let countdownInterval;
let targetDate = null;

/* Admin Panel */
function toggleAdmin(){ document.getElementById("adminPanel").classList.toggle("active"); }
function unlockAdmin(){
    const pass=document.getElementById("adminPass").value;
    const msg=document.getElementById("loginMessage");
    if(pass==="kovydovy"){
        document.getElementById("loginSection").style.display="none";
        document.getElementById("adminControls").style.display="block";
        msg.innerText="";
        sessionStorage.setItem("adminUnlocked","true");
    } else { msg.innerText="Incorrect password"; msg.style.color="#ff4c4c"; }
}
window.onload=function(){
    if(sessionStorage.getItem("adminUnlocked")==="true"){
        document.getElementById("loginSection").style.display="none";
        document.getElementById("adminControls").style.display="block";
    }
    typeWriter();
};

/* Countdown */
function setCountdown(){
    targetDate=new Date(document.getElementById("dateInput").value);
    clearInterval(countdownInterval);
    document.getElementById("vaultBtn").style.display="none";
    countdownInterval=setInterval(updateCountdown,1000);
}
function updateCountdown(){
    const now=new Date();
    let diff=targetDate-now;
    if(diff<=0){ clearInterval(countdownInterval); document.getElementById("countdown").innerText="RELEASED"; document.getElementById("vaultBtn").style.display="inline-block"; return; }
    let months=Math.floor(diff/(1000*60*60*24*30));
    diff-=months*(1000*60*60*24*30);
    let days=Math.floor(diff/(1000*60*60*24));
    diff-=days*(1000*60*60*24);
    let hours=Math.floor(diff/(1000*60*60));
    diff-=hours*(1000*60*60);
    let minutes=Math.floor(diff/(1000*60));
    diff-=minutes*(1000*60);
    let seconds=Math.floor(diff/1000);
    document.getElementById("countdown").innerText=`${months}M ${days}D ${hours}H ${minutes}M ${seconds}S`;
}
function pauseCountdown(){ clearInterval(countdownInterval); }
function resetCountdown(){ clearInterval(countdownInterval); document.getElementById("countdown").innerText="COUNTDOWN DISABLED"; document.getElementById("vaultBtn").style.display="none"; }
function goVault(){ window.location.href="vault.html"; }
function navigateTo(page){ window.location.href=page; }
function searchFiles(){
    const input=document.getElementById("searchBar").value.toUpperCase();
    const files=document.getElementsByClassName("file");
    for(let i=0;i<files.length;i++){ files[i].style.display=files[i].innerText.toUpperCase().includes(input)?"":"none"; }
}

/* Typewriter */
const fileText=`
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

let index=0;
function typeWriter(){
    const container=document.getElementById("typewriter");
    if(!container) return;
    if(index<fileText.length){ container.innerHTML=fileText.substring(0,index); index++; setTimeout(typeWriter,25); }
}
