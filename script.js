const formulaire = document.querySelector(".form");
const jouer = document.querySelector(".jouer");
const game = document.querySelector(".game");
const rejouer = document.querySelector(".rejouer");
jouer.addEventListener("click", () => {
  const nomFormulaire = document.querySelector(".nom").value;
  const nomJoueur = document.querySelector(".playerName");
  nomJoueur.innerHTML = nomFormulaire;
  var couleurPeau = document.getElementsByName("couleur");
  for (i = 0; i < couleurPeau.length; i++) {
    if (couleurPeau[i].checked) console.log(couleurPeau[i].value);
  }
  const choixFormulaire = document.querySelector(".choix");
  const choixOption = choixFormulaire.options[choixFormulaire.selectedIndex];
  const choixJoueur = document.querySelector(".playerHand");
  choixJoueur.innerHTML = choixOption.value;
  const mainCPU = document.querySelector(".cpuHand");
  const choixCPU = [
    "✊", "✋", "✌️", "✊🏻", "✋🏻", "✌🏻", "✊🏽", "✋🏽", "✌🏽", "✊🏿", "✋🏿", "✌🏿"
  ];
  const randomCPU = choixCPU[Math.floor(Math.random() * choixCPU.length)];
  mainCPU.innerHTML = randomCPU;
  const resultat = document.querySelector(".resultat");
  const resultatPlayer = document.querySelector(".player");
  const resultatCPU = document.querySelector(".cpu");
  if (
    (randomCPU == "✊" || randomCPU == "✊🏻" || randomCPU == "✊🏽" || randomCPU == "✊🏿") &&
    choixOption.value == "✋"
  ) {
    resultatCPU.style.backgroundColor = "rgb(209, 109, 130)";
    resultatPlayer.style.backgroundColor = "rgb(127, 216, 190)";
    resultat.innerHTML = "VICTOIRE!!!";
  } else if (
    (randomCPU == "✋" || randomCPU == "✋🏻" || randomCPU == "✋🏽" || randomCPU == "✋🏿") &&
    choixOption.value == "✌️"
  ) {
    resultatCPU.style.backgroundColor = "rgb(209, 109, 130)";
    resultatPlayer.style.backgroundColor = "rgb(127, 216, 190)";
    resultat.innerHTML = "VICTOIRE!!!";
  } else if (
    (randomCPU == "✌️" || randomCPU == "✌🏻" || randomCPU == "✌🏽" || randomCPU == "✌🏿") &&
    choixOption.value == "✊"
  ) {
    resultatCPU.style.backgroundColor = "rgb(209, 109, 130)";
    resultatPlayer.style.backgroundColor = "rgb(127, 216, 190)";
    resultat.innerHTML = "VICTOIRE!!!";
  } else if (
    (randomCPU == "✌️" || randomCPU == "✌🏻" || randomCPU == "✌🏽" || randomCPU == "✌🏿") &&
    choixOption.value == "✌️"
  ) {
    resultatCPU.style.backgroundColor = "rgb(63, 136, 197)";
    resultatPlayer.style.backgroundColor = "rgb(63, 136, 197)";
    resultat.innerHTML = "MATCH NUL";
  } else if (
    (randomCPU == "✋" || randomCPU == "✋🏻" || randomCPU == "✋🏽" || randomCPU == "✋🏿") &&
    choixOption.value == "✋"
  ) {
    resultatCPU.style.backgroundColor = "rgb(63, 136, 197)";
    resultatPlayer.style.backgroundColor = "rgb(63, 136, 197)";
    resultat.innerHTML = "MATCH NUL";
  } else if (
    (randomCPU == "✊" || randomCPU == "✊🏻" || randomCPU == "✊🏽" || randomCPU == "✊🏿") &&
    choixOption.value == "✊"
  ) {
    resultatCPU.style.backgroundColor = "rgb(63, 136, 197)";
    resultatPlayer.style.backgroundColor = "rgb(63, 136, 197)";
    resultat.innerHTML = "MATCH NUL";
  } else if (
    (randomCPU == "✊" || randomCPU == "✊🏻" || randomCPU == "✊🏽" || randomCPU == "✊🏿") &&
    choixOption.value == "✌️"
  ) {
    resultatCPU.style.backgroundColor = "rgb(127, 216, 190)";
    resultatPlayer.style.backgroundColor = "rgb(209, 109, 130)";
    resultat.innerHTML = "DÉFAITE";
  } else if (
    (randomCPU == "✋" || randomCPU == "✋🏻" || randomCPU == "✋🏽" || randomCPU == "✋🏿") &&
    choixOption.value == "✊"
  ) {
    resultatCPU.style.backgroundColor = "rgb(127, 216, 190)";
    resultatPlayer.style.backgroundColor = "rgb(209, 109, 130)";
    resultat.innerHTML = "DÉFAITE";
  } else if (
    (randomCPU == "✌️" ||
    randomCPU == "✌🏻" || randomCPU == "✌🏽" || randomCPU == "✌🏿") && choixOption.value == "✋"
  ) {
    resultatCPU.style.backgroundColor = "rgb(127, 216, 190)";
    resultatPlayer.style.backgroundColor = "rgb(209, 109, 130)";
    resultat.innerHTML = "DÉFAITE";
  }
  gsap
  .timeline({})
  .to(".form", { y: "100vh" })
  .to(".game", { opacity: 1 }, "<");
});
rejouer.addEventListener("click", function () {
  gsap
  .timeline({})
  .to(".form", { y: "0vh", ease: "back" })
  .to(".game", { opacity: 0 }, "<");
});
