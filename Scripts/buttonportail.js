const buttonPortail = document.querySelector(".buttonDiscover")
const leftPart = document.querySelector(".leftPart");
const portailCookomie = document.querySelector(".portail");
const galerieButton = document.querySelector(".galleryMenu");
const mainSection = document.getElementById("accueil");
const galerieSection = document.getElementById("galerieCookomie");
const returnAccueil = document.querySelector(".returnAccueil");
const menuNavigLogo = document.querySelector(".fa-bars");
const menuNavig = document.querySelector("#cookomieMenu");
const buttonMenu = document.querySelector(".buttonMenu");
const philoPart = document.querySelector("#philosophieCookomie");
const philoButton = document.querySelector(".sectionOne");
const philoReturn = document.querySelector(".returnAccueilPhilo")
const cheffeButton = document.querySelector(".sectionTwo");
const cheffePart = document.getElementById("votreCheffe");
const cheffeReturn = document.querySelector(".returnAccueilCheffe");

buttonPortail.addEventListener("click", function(){
    portailCookomie.style.display = "none";
});

galerieButton.addEventListener("click", function(){
    mainSection.style.display = "none";
    galerieSection.style.display = "block";
})

returnAccueil.addEventListener("click", function() {
    mainSection.style.display = "";
    galerieSection.style.display = "none";
})

menuNavigLogo.addEventListener("click", function(){
    menuNavig.style.display = "block";
    menuNavigLogo.style.display = "none"
    let crossClose = document.createElement("i");
    crossClose.setAttribute("class", "fa-solid fa-xmark");
    buttonMenu.appendChild(crossClose);
    crossClose.addEventListener("click", function() {
        menuNavig.style.display="none";
        crossClose.style.display = "none";
        menuNavigLogo.style.display = "";
    })
})

philoButton.addEventListener("click", function() {
    mainSection.style.display = "none";
    philoPart.style.display = "block";
})

philoReturn.addEventListener("click", function() {
    mainSection.style.display = "";
    philoPart.style.display = "none";
})

cheffeButton.addEventListener("click", function() {
    mainSection.style.display = "none";
    philoPart.style.display = "none";
    cheffePart.style.display = "block";
})

cheffeReturn.addEventListener("click", function() {
    mainSection.style.display = "";
    cheffePart.style.display = "none";
})

