let compteur = 0;
const affichage = document.querySelector("#N1");
const boutonPlus = document.querySelector("#plus");
const boutonMoins = document.querySelector("#moins");

boutonPlus.addEventListener("click", () => {
    compteur++;
    affichage.textContent = compteur;
});

boutonMoins.addEventListener("click", () => {
    compteur--;
    affichage.textContent = compteur;
});