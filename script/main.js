// déclaration des variables global
let heure;
let minute;
let seconde;
let bouton = document.getElementById("bouton");
let reponse = document.getElementById("reponse");

document.getElementById("bouton").onclick = () => {
    heure = document.querySelector('input[id="heure"]').value;
    minute = document.querySelector('input[id="minute"]').value;
    seconde = document.getElementById("seconde").value;
    seconde++;
    if (seconde === 60) {
        minute++;
        seconde = 0;
    }
    if (minute === 60) {
        heure++;
        minute = 0;
    } 
    if (heure === 24) {
        heure = 0;
    }
    reponse.innerHTML = heure + " heure " + minute + " minute " + seconde + " seconde";
}