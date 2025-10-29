let zombie = document.getElementById("personaje");
let mantequilla = document.getElementById("Mantequilla");
let guisante = document.getElementById("Guisante");
let cubeta = document.getElementById("Cubeta");
let nuez = document.getElementById("Nuez");
let revivir = document.getElementById("Revivir");

mantequilla.addEventListener("click", () => {
    zombie.src = "img/Zombie_b.png";
    document.body.style.backgroundColor = "yellow";
});

guisante.addEventListener("click", () => {
    zombie.src = "img/Headless.png";
    document.body.style.backgroundColor = "green";
});

cubeta.addEventListener("click", () => {
    zombie.src = "img/Buckethead_Zombie.webp";
    document.body.style.backgroundColor = "gray";
});

nuez.addEventListener("click", () => {
    zombie.src = "img/Alergia.png";
    document.body.style.backgroundColor = "brown";
});

revivir.addEventListener("click", () => {
    zombie.src = "img/Zombie.webp";
    document.body.style.backgroundColor = "lightblue";
});