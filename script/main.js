// déclaration des variables global
let heure;
let minute;
let seconde;
let bouton = document.getElementById("bouton");
let reponse = document.getElementById("reponse");

document.getElementById("bouton").onclick = () => {
    heure = document.querySelector('input[id="heure"]').value;
    // console.log(heure);
    minute = document.querySelector('input[id="minute"]').value;
    // console.log(minute);
    // peut se faire avec id
    seconde = document.getElementById("seconde").value;
    console.log(seconde);
}