window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("section-navigation").style.top = "0";
  } else {
    document.getElementById("section-navigation").style.top = "-50px";
  }
}

const email = document.querySelector("#myEmail");
const discord = document.querySelector("#myDiscord");
const number = document.querySelector("#myNumber");
const ShowHide = document.querySelector(".ShowHide");
const ShowHideText = document.querySelector(".ShowHideTXT");
const ShowHide2 = document.querySelector(".ShowHide2");
const ShowHideText2 = document.querySelector(".ShowHideTXT2");
const ShowHide3 = document.querySelector(".ShowHide3");
const ShowHideText3 = document.querySelector(".ShowHideTXT3");
email.innerHTML = "***********";
discord.innerHTML = "***********";
number.innerHTML = "***********";

// make value visible on hover
// function mOverDisc() {
//   discord.innerHTML = "expert#0001";
// }
// function mOutDisc() {
//   discord.innerHTML = "***********";
// }
// function mOverEmail() {
//   email.innerHTML = "SOEXPERTTT@GMAIL.COM";
// }
// function mOutEmail() {
//   email.innerHTML = "***********";
//   contact_color.style.backgroundColor = "white";
// }
// function mOverWhats() {
//   number.innerHTML = "+966 53 939 9312";
// }
// function mOutWhats() {
//   number.innerHTML = "***********";
// }

ShowHide.onclick = function () {
  if (number.innerHTML == "***********") {
    number.innerHTML = "+966 53 939 9312";
    ShowHideText.innerHTML = "- hide -";
  } else {
    number.innerHTML = "***********";
    ShowHideText.innerHTML = "- SHOW -";
  }
};
ShowHide2.onclick = function () {
  if (email.innerHTML == "***********") {
    email.innerHTML = "soexperttt@gmail.com";
    ShowHideText2.innerHTML = "- hide -";
  } else {
    email.innerHTML = "***********";
    ShowHideText2.innerHTML = "- SHOW -";
  }
};
ShowHide3.onclick = function () {
  if (discord.innerHTML == "***********") {
    discord.innerHTML = "expert#0001";
    ShowHideText3.innerHTML = "- hide -";
  } else {
    discord.innerHTML = "***********";
    ShowHideText3.innerHTML = "- SHOW -";
  }
};

let open = document.getElementById("floating-btn");
let quick = document.getElementById("quick-contact");
quick.style.display = "none";

open.onclick = function () {
  if (quick.style.display == "none") {
    quick.style.display = "inline";
    open.value = "-";
  } else if (quick.style.display == "inline") {
    quick.style.display = "none";
    open.value = "+";
  }
};
