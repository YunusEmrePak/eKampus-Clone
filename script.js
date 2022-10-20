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
const messagebtn = document.querySelector(".message");
const messagearea = document.querySelector(".messageArea");
const closeIcon = document.querySelector(".closeIcon");
const searchbtn = document.querySelector(".search");
const searchArea = document.querySelector(".searchArea");
const searchCloseIcon = document.querySelector(".searchCloseIcon");
const body = document.querySelector("body");



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

var control_notification = 0;
var control_language = 0;
var control_message = 0;
var control_search = 0;


notificationClick = () => {
    if (control_notification == 0) {
        notificationMenu.style.visibility = "visible";
        control_notification++;
    }
    else {
        notificationMenu.style.visibility = "hidden";
        control_notification--;
    }
    
}

notificationbtn.addEventListener("click", notificationClick);

languageVisibility = () => {
    if (control_language == 0) {
        language.style.visibility = "visible";
        control_language++;
    }
    else {
        language.style.visibility = "hidden";
        control_language--;
    }
}

languagebtn.addEventListener("click", languageVisibility);

messageVisibility = () => {
    if (control_message == 0) {
        messagearea.style.visibility = "visible";
        control_message++;
    }
    else {
        messagearea.style.visibility = "hidden";
        control_message--;
    }
    
}

messagebtn.addEventListener("click", messageVisibility);
closeIcon.addEventListener("click", messageVisibility);

searchVisibility = () => {
    if (control_search == 0) {
        searchArea.style.visibility = "visible";
        control_search++;
    }
    else {
        searchArea.style.visibility = "hidden";
        control_search--;
    }
}

searchbtn.addEventListener("click", searchVisibility);

searchCloseIcon.addEventListener("click", searchVisibility);
