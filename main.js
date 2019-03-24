let menuCollapsed = false;
let nav = document.getElementById("nav");
let navList = document.querySelector("nav-list");


function checkboxToggle(el) {
  if (el.checked) {
    nav.style.width = "100%"
  } else {
    nav.style.width = "auto"
  }
}

// window.onscroll = function () {
//   scrollTrigger()
// };
let navClassCheck = nav.classList.contains("nav-collapsed");
console.log(navClassCheck);

window.addEventListener("scroll", () => {
  let scrolled = window.scrollY
  scrolled > 90 ? scrollTrigger("close") : scrollTrigger("open")
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