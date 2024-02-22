"use strict";

const wrapper = document.querySelector(".wrapper");
const icon = document.querySelector(".nav__icon");

const fallMenuBtnDiv = document.querySelector(".fall-menu-div");
const fallMenuBtn = document.querySelector(".fall-menu-btn");
const fallMenuList = document.querySelector(".fall-menu");
const fallMenuListBtns = document.querySelectorAll(".fall-menu > li");
const cookieNotification = document.querySelector(".cookie-warning");
const cookieNotificationButton = document.querySelector(
  ".cookie-warning__button"
);

const exampleCards = document.querySelectorAll(".sigment-cards__sigment");
const tikTokVideos = document.querySelectorAll(".tiktok-video");
const tikTokVideosVid = document.querySelectorAll(".tiktok-video > a > video");
const cardImgs = document.querySelectorAll(".sigment-cards__sigment_img");
const cardText = document.querySelectorAll(".sigment-cards__sigment_text");
console.log(cardText);

window.addEventListener("load", (e) => {
  cookieNotification.classList.remove("display-none");
});

cookieNotificationButton.addEventListener("click", (e) => {
  cookieNotification.classList.add("display-none");
});

icon.addEventListener("mousedown", (e) => {
  console.log(1232132);
});

fallMenuBtn.addEventListener("mousedown", fallMenuFunct);
function fallMenuFunct(e) {
  if (e.target.closest(".fall-menu-btn")) {
    console.log(123);
    fallMenuList.classList.toggle("display-none");
  }
  wrapper.addEventListener("mousedown", (e) => {
    if (e.target == wrapper && e.target !== fallMenuList) {
      fallMenuList.classList.add("display-none");
    }
  });
}

wrapper.addEventListener("mouseover", appearVideo);

function appearVideo(e) {
  if (e.target.closest(".link-card")) {
    for (let i = 0; exampleCards.length > i; i++) {
      let n = i;
      if (e.target == exampleCards[n]) {
        exampleCards[n].style.position = "relative";
        exampleCards[n].style.padding = "0";
        cardImgs[n].classList.add("card-content-amin");
        cardText[n].classList.add("card-content-amin");
        cardText[n].style.top = "65%";
        exampleCards[n].insertAdjacentElement("beforeend", tikTokVideos[n]);
        tikTokVideos[n].classList.remove("display-none");
        tikTokVideosVid[n].play();
        tikTokVideosVid[n].setAttribute("autoplay", "");
        tikTokVideosVid[n].setAttribute("muted", "");
        tikTokVideosVid[n].setAttribute("loop", "");
        tikTokVideosVid[n].classList.add("scaling");
        tikTokVideosVid[n].addEventListener("mousemove", (e) => {
          console.log(e.pageX);
          tikTokVideosVid[n].style.transformOrigin = `${e.pageY} ${e.pageX}`;
          console.log(123);
        });
        tikTokVideosVid[n].style.opacity = 0;
        tikTokVideosVid[
          n
        ].style.animation = `opacity linear 0.35s 0.05s forwards`;
        exampleCards[n].addEventListener("mouseleave", (e) => {
          cardImgs[n].classList.remove("card-content-amin");
          cardImgs[n].style.transition = "all 0.4s linear 0.05s";
          cardText[n].style.transition = "all 0.4s linear 0.05s";
          cardText[n].classList.remove("card-content-amin");
          tikTokVideosVid[n].removeAttribute("autoplay");
          tikTokVideosVid[n].removeAttribute("muted");
          tikTokVideos[n].remove();
          wrapper.insertAdjacentElement("beforeend", tikTokVideos[n]);
          tikTokVideos[n].classList.add("display-none");
          exampleCards[n].style.padding = "4%";
        });
      }
    }

    e.stopPropagation();
  }
  // console.log(12);
}
