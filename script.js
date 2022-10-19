const main = document.querySelector(".main");
const leftArrow = document.querySelector(".leftArrow");
const rightArrow = document.querySelector(".rightArrow");
const titleMain = document.querySelector(".titleMain");
const contentMain = document.querySelector(".contentMain");
const mainImg = document.querySelector(".main img");
const accessMain = document.querySelector(".accessMain");

arrayFoto = ["img/mainfoto.png", "img/mainfoto2.png"];
var i = 0;

leftClick = () => {
    if (i == 0) {
        mainImg.src = "img/mainfoto2.png";
        i++;
        titleMain.innerHTML = "Unlimited Access to Information"
        contentMain.innerHTML = "Electronic Databases, Books, Journals, Open Access Resources, Open Course Materials";
    }
    else {
        mainImg.src = "img/mainfoto.png";
        i--;
        titleMain.innerHTML = "The Faculty of Open and Distance Education";
        contentMain.innerHTML = "Innovation, quality, flexibilty, interaction, experience";
    }
}

rightClick = () => {
    if (i == 0) {
        mainImg.src = "img/mainfoto2.png";
        i++;
        titleMain.innerHTML = "Unlimited Access to Information"
        contentMain.innerHTML = "Electronic Databases, Books, Journals, Open Access Resources, Open Course Materials";
    }
    else {
        mainImg.src = "img/mainfoto.png";
        i--;
        titleMain.innerHTML = "The Faculty of Open and Distance Education";
        contentMain.innerHTML = "Innovation, quality, flexibilty, interaction, experience";
    }
}

leftArrow.addEventListener("click", leftClick);
rightArrow.addEventListener("click", rightClick);

for (var j = 0;j < 999; j++) {
    setInterval (function(){
        mainImg.src = "img/mainfoto2.png";
        i = 0;
        titleMain.innerHTML = "Unlimited Access to Information"
        contentMain.innerHTML = "Electronic Databases, Books, Journals, Open Access Resources, Open Course Materials";
      } , 3000);
      setInterval (function(){
        mainImg.src = "img/mainfoto.png";
        i = 1;
        titleMain.innerHTML = "The Faculty of Open and Distance Education";
        contentMain.innerHTML = "Innovation, quality, flexibilty, interaction, experience";
      } , 6000);
}
