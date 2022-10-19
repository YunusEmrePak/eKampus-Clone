const main = document.querySelector(".main");
const leftArrow = document.querySelector(".leftArrow");
const rightArrow = document.querySelector(".rightArrow");
const titleMain = document.querySelector(".titleMain");
const contentMain = document.querySelector(".contentMain");
const mainImg = document.querySelector(".main img");
const accessMain = document.querySelector(".accessMain");
const notificationMenu = document.querySelector(".notificationMenu");
const notificationbtn = document.querySelector(".notification");
const languagebtn = document.querySelector(".right");
const language = document.querySelector(".language");


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

change = () => {
    if (i == 0) {
        mainImg.src = "img/mainfoto2.png";
        titleMain.innerHTML = "Unlimited Access to Information"
        contentMain.innerHTML = "Electronic Databases, Books, Journals, Open Access Resources, Open Course Materials";
        i++;
    }
    else {
        mainImg.src = "img/mainfoto.png";
        titleMain.innerHTML = "The Faculty of Open and Distance Education";
        contentMain.innerHTML = "Innovation, quality, flexibilty, interaction, experience";
        i--;
    }
}

window.onload = function () {
    setInterval(change, 3000);
};

var k = 0;
var l = 0;

notificationClick = () => {
    if (k == 0) {
        notificationMenu.style.visibility = "visible";
        k++;
    }
    else {
        notificationMenu.style.visibility = "hidden";
        k--;
    }
    
}

notificationbtn.addEventListener("click", notificationClick);

languageVisibility = () => {
    if (l == 0) {
        language.style.visibility = "visible";
        l++;
    }
    else {
        language.style.visibility = "hidden";
        l--;
    }
}

languagebtn.addEventListener("click", languageVisibility);