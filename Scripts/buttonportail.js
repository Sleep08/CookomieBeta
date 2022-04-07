const buttonPortail = document.querySelector(".buttonDiscover")
const leftPart = document.querySelector(".leftPart");
const portailCookomie = document.querySelector(".portail");
const plusPhilo = document.getElementById("plusPhilosophie");
const titlePhilo = document.getElementById("titlePhilo");
let philoPart = document.querySelector(".leftPart__philosophie");
let menuPart = document.querySelector(".leftPart__balade");
let philoComment = document.querySelector(".philoComment");
let circlePhilo = document.getElementById("plusCirclePhilo");
const plusChef = document.getElementById("plusChef");
const titleChef = document.getElementById("titleChef");
let chefPart = document.querySelector(".rightPart");
let chefComment = document.querySelector(".chefComment");
let circleChef = document.getElementById("plusCircleChef");
const plusMenu = document.getElementById("plusMenu");
const titleMenu = document.getElementById("titleMenu");
let menuComment = document.querySelector(".menuComment");
let circleMenu = document.getElementById("plusCircleMenu");
const titleMenuDeux = document.getElementById("titleMenuDeux");

buttonPortail.addEventListener("click", function(){
    portailCookomie.style.display = "none";
});

circlePhilo.addEventListener("click", function() {
    titlePhilo.style.width = "95%";
    titlePhilo.style.fontSize = "2em";
    philoComment.style.display = "block";
    circlePhilo.style.display = "none";
    let moinsPhilo = document.createElement("i");
    moinsPhilo.setAttribute("class", "fa-solid fa-circle-minus");
    moinsPhilo.setAttribute("id", "moinsPhilo");
    plusPhilo.appendChild(moinsPhilo);
    moinsPhilo.addEventListener("click", function() {
        titlePhilo.style.width = "80%";
        titlePhilo.style.fontSize = "3em";
        philoComment.style.display = "none";
        circlePhilo.style.display = "";
        moinsPhilo.style.display = "none";
    })
});

circleChef.addEventListener("click", function() {
    titleChef.style.width = "95%";
    titleChef.style.fontSize = "2em";
    chefComment.style.display = "block";
    circleChef.style.display = "none";
    let moinsChef = document.createElement("i");
    moinsChef.setAttribute("class", "fa-solid fa-circle-minus");
    moinsChef.setAttribute("id", "moinsChef");
    plusChef.appendChild(moinsChef);
    document.querySelector(".leftPart__philosophie").style.display="none";
    document.querySelector(".leftPart__balade").style.display="none";
    let imgLeft = document.createElement("img");
    imgLeft.setAttribute("src", "cookomiepictures/joPresa.jpg");
    leftPart.appendChild(imgLeft);
    moinsChef.addEventListener("click", function() {
        titleChef.style.width = "80%";
        titleChef.style.fontSize = "3em";
        chefComment.style.display = "none";
        circleChef.style.display = "";
        moinsChef.style.display = "none";
        leftPart.removeChild(imgLeft);
        document.querySelector(".leftPart__philosophie").style.display="";
        document.querySelector(".leftPart__balade").style.display="";
    })
});

circleMenu.addEventListener("click", function() {
    menuComment.style.display = "block";
    circleMenu.style.display = "none";
    let moinsMenu = document.createElement("i");
    moinsMenu.setAttribute("class", "fa-solid fa-circle-minus");
    moinsMenu.setAttribute("id", "moinsMenu");
    plusMenu.appendChild(moinsMenu);
    titleChef.style.display="none";
    chefPart.style.backgroundImage = "url(cookomiepictures/roseH.jpg)";
    philoPart.style.display="none";
    menuPart.style.height="100%";
    moinsMenu.addEventListener("click", function() {
        titleChef.style.display = "";
        menuComment.style.display = "none";
        circleMenu.style.display = "";
        moinsMenu.style.display = "none";
        chefPart.style.backgroundImage = "url(cookomiepictures/jo.jpg)";
        philoPart.style.display="";
        menuPart.style.height="50%";
    });
});
