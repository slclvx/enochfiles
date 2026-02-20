let countdownInterval;
let targetDate = null;

/* Slide Admin Panel */
function toggleAdmin() {
    document.getElementById("adminPanel").classList.toggle("active");
}

/* Unlock Admin */
function unlockAdmin() {
    const pass = document.getElementById("adminPass").value;
    const message = document.getElementById("loginMessage");

    if (pass === "kovydovy") {
        document.getElementById("loginSection").style.display = "none";
        document.getElementById("adminControls").style.display = "block";
        message.innerText = "";
        sessionStorage.setItem("adminUnlocked", "true");
    } else {
        message.innerText = "Incorrect password.";
        message.style.color = "#ff6b6b";
    }
}

/* Keep Admin Unlocked During Session */
window.onload = function() {
    if (sessionStorage.getItem("adminUnlocked") === "true") {
        document.getElementById("loginSection").style.display = "none";
        document.getElementById("adminControls").style.display = "block";
    }

    typeWriter();
};

/* Countdown */
function setCountdown() {
    targetDate = new Date(document.getElementById("dateInput").value);
    countdownInterval = setInterval(updateCountdown, 1000);
}

function updateCountdown() {
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

function searchFiles() {
    const input = document.getElementById("searchBar").value.toUpperCase();
    const files = document.getElementsByClassName("file");

    for (let i = 0; i < files.length; i++) {
        files[i].style.display =
            files[i].innerText.toUpperCase().includes(input) ? "" : "none";
    }
}

/* Typewriter Effect */
const fileText = `
DOCUMENT LOG — FILE 001

Chapter 1 — November 18th, 2025

I met <span class="censor">Enoch</span>.

He came from nowhere.
Funny. Friendly. Instantly accepted.

Chapter 2 — December 18th

He told me he was talking to a girl named
<span class="censor">Itzel</span>.

I agreed to help him.

Worst decision of my life.
`;

let index = 0;

function typeWriter() {
    const container = document.getElementById("typewriter");
    if (!container) return;

    if (index < fileText.length) {
        container.innerHTML = fileText.substring(0, index);
        index++;
        setTimeout(typeWriter, 25);
    }
}
