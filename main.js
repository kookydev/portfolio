let nav = document.getElementById("nav");
let navList = document.querySelector("nav-list");
let navToggle = document.getElementById("nav-toggle")
let cursor = document.getElementById("cursor")
let logoItems = document.getElementsByClassName("nav-logo")
let logo1 = document.getElementById("logo1")
let logo3 = document.getElementById("logo3")
let logo4 = document.getElementById("logo4")
let logo5 = document.getElementById("logo5")
let logo6 = document.getElementById("logo6")
let logoArray = [logo1, logo3, logo4, logo5, logo6]

navToggle.checked = true;

function checkboxToggle(el) {
  if (el.checked) {
    nav.style.width = "100%"
    nav.style.borderRadius = "0px"
    cursor.style.order = 1
    logoArray.map(i => i.style.display = "block")
  } else {
    nav.style.width = "85px"
    nav.style.borderRadius = "0px 0px 15px 0px"
    cursor.style.order = 0
    logoArray.map(i => i.style.display = "none")
  }
}




window.addEventListener("scroll", () => {
  let scrolled = window.scrollY
  if (scrolled > 90) {
    navToggle.checked = false
    checkboxToggle(navToggle)
  } else {
    navToggle.checked = true
    checkboxToggle(navToggle)
  }

})

const menuAnimation = () => {

  let logo1 = document.getElementById("logo1");
  let logo2 = document.getElementById("logo2");
  let logo3 = document.getElementById("logo3");
  let logo4 = document.getElementById("logo4");
  let logo5 = document.getElementById("logo5");
  let logo6 = document.getElementById("logo6");
  let cursor = document.getElementById("cursor");
  let windowWidth = document.documentElement.clientWidth;
  let timeout = Math.random() * 200;
  if (windowWidth < 2000) {
    if (!menuCollapsed) {
      nav.classList.toggle("nav-collapsed");
      setTimeout(() => {
        cursor.style.order = 0;
      }, timeout);
      setTimeout(() => {
        logo5.style.display = "none";
      }, (timeout += Math.random() * 200 + 100));
      setTimeout(() => {
        logo4.style.display = "none";
      }, (timeout += Math.random() * 200 + 100));
      setTimeout(() => {
        logo3.style.display = "none";
      }, (timeout += Math.random() * 200 + 100));
      setTimeout(() => {
        cursor.style.order = -1;
      }, (timeout += Math.random() * 200 + 100));
      setTimeout(() => {
        logo1.style.display = "none";
        logo6.style.display = "none";
      }, (timeout += Math.random() * 200 + 100));
      setTimeout(() => {
        menuCollapsed = true;
      }, (timeout += Math.random() * 200 + 100));

    } else {

      nav.classList.toggle("nav-collapsed");
      setTimeout(() => {
        logo1.style.display = "block";
        logo6.style.display = "block";
      }, timeout);
      setTimeout(() => {
        cursor.style.order = 0;
      }, (timeout += Math.random() * 400 + 100));
      setTimeout(() => {
        logo3.style.display = "block";
      }, (timeout += Math.random() * 400 + 100));

      setTimeout(() => {
        logo4.style.display = "block";
      }, (timeout += Math.random() * 400 + 100));
      setTimeout(() => {
        logo5.style.display = "block";
      }, (timeout += Math.random() * 400 + 100));
      setTimeout(() => {
        menuCollapsed = false;
      }, (timeout += Math.random() * 200 + 100));

    }
  }
};