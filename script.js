let countdownInterval;
let targetDate = null;

/* Admin Unlock */
function unlockAdmin() {
    const pass = document.getElementById("adminPass").value;
    if (pass === "kovydovy") {
        document.getElementById("adminControls").style.display = "block";
    } else {
        alert("Access Denied.");
    }
}

/* Countdown */
function setCountdown() {
    targetDate = new Date(document.getElementById("dateInput").value);
    countdownInterval = setInterval(updateCountdown, 1000);
}

function updateCountdown() {
    if (!targetDate) return;

    const now = new Date();
    const diff = targetDate - now;

    if (diff <= 0) {
        document.getElementById("countdown").innerText = "RELEASED";
        clearInterval(countdownInterval);
        return;
    }

    const days = Math.floor(diff / (1000*60*60*24));
    document.getElementById("countdown").innerText = days + " DAYS REMAINING";
}

function pauseCountdown() {
    clearInterval(countdownInterval);
}

function resetCountdown() {
    clearInterval(countdownInterval);
    document.getElementById("countdown").innerText = "COUNTDOWN DISABLED";
}

function goVault() {
    window.location.href = "vault.html";
}

/* Search */
function searchFiles() {
    const input = document.getElementById("searchBar").value.toUpperCase();
    const files = document.getElementsByClassName("file");

    for (let i = 0; i < files.length; i++) {
        if (files[i].innerText.toUpperCase().includes(input)) {
            files[i].style.display = "";
        } else {
            files[i].style.display = "none";
        }
    }
}

/* Typewriter */
const fileText = `
DOCUMENT SOURCE: Internal Communication Log
STATUS: Archived

---------------------------------------------

Chapter 1: New Man
Date: November 18th, 2025

On this day, I met <span class="censor">Enoch</span>.
He came from nowhere.
Funny. Friendly. Accepted instantly.

Morning tradition:
Meeting Mrs. Long.
Corner near the bathrooms.

Everyone enjoyed him.

---------------------------------------------

Chapter 2: December 18th, 2025

He said:
"Alex, can I talk to you in private?"

He told me:
"I'm starting to talk with this girl.
Her name is <span class="censor">Itzel</span>."

I agreed to help him.

Worst decision of my life.
`;

let index = 0;
let typingSpeed = 25;

function typeWriter() {
    const container = document.getElementById("typewriter");
    if (!container) return;

    if (index < fileText.length) {
        container.innerHTML = fileText.substring(0, index);
        index++;
        setTimeout(typeWriter, typingSpeed);
    }
}

window.onload = typeWriter;
