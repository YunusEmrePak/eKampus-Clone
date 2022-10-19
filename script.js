const main = document.querySelector(".main");
const leftArrow = document.querySelector(".leftArrow");
const rightArrow = document.querySelector(".rightArrow");
const titleMain = document.querySelector(".titleMain");
const contentMain = document.querySelector(".contentMain");

arrayFoto = ["img/mainfoto.png", "img/mainfoto2.png"];
var i = 0;

leftClick = () => {
    if (i == 0) {
        main.style.backgroundImage = `url('${arrayFoto[1]}')`;
        i++;
        titleMain.innerHTML = "Unlimited Access to Information"
        contentMain.innerHTML = "Electronic Databases, Books, Journals, Open Access Resources, Open Course Materials";
    }
    else {
        main.style.backgroundImage = `url('${arrayFoto[0]}')`;
        i--;
        titleMain.innerHTML = "The Faculty of Open and Distance Education";
        contentMain.innerHTML = "Innovation, quality, flexibilty, interaction, experience";
    }
}

rightClick = () => {
    if (i == 0) {
        main.style.backgroundImage = `url('${arrayFoto[1]}')`;
        i++;
        titleMain.innerHTML = "Unlimited Access to Information"
        contentMain.innerHTML = "Electronic Databases, Books, Journals, Open Access Resources, Open Course Materials";
    }
    else {
        main.style.backgroundImage = `url('${arrayFoto[0]}')`;
        i--;
        titleMain.innerHTML = "The Faculty of Open and Distance Education";
        contentMain.innerHTML = "Innovation, quality, flexibilty, interaction, experience";
    }
}

leftArrow.addEventListener("click", leftClick);
rightArrow.addEventListener("click", rightClick);

for (var j = 0;j < 999; j++) {
    setInterval (function(){
        main.style.backgroundImage = `url('${arrayFoto[1]}')`;
      } , 4000);
      setInterval (function(){
        main.style.backgroundImage = `url('${arrayFoto[0]}')`;
      } , 8000);
}
