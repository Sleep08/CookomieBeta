const returnAccueil = document.querySelector(".returnAccueil");
const menuNavigLogo = document.querySelector(".fa-bars");
const menuNavig = document.querySelector("#cookomieMenu");
buttonMenu = document.querySelector(".buttonMenu")

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