const nav = document.getElementById("nav");
const navList = document.querySelector("nav-list");
const navToggle = document.getElementById("nav-toggle");
const cursor = document.getElementById("cursor");
const logoItems = document.getElementsByClassName("nav-logo");
const logo1 = document.getElementById("logo1");
const logo3 = document.getElementById("logo3");
const logo4 = document.getElementById("logo4");
const logo5 = document.getElementById("logo5");
const logo6 = document.getElementById("logo6");
const logoArray = [logo1, logo3, logo4, logo5, logo6];
const videos = document.querySelectorAll("video");

videos.forEach(video => {
  video.addEventListener("mouseover", function() {
    this.play();
  });
  video.addEventListener("mouseout", function() {
    setTimeout(() => {
      this.pause();
    }, 5000);
  });
});

navToggle.checked = true;

function checkboxToggle(el) {
  if (el.checked) {
    nav.style.width = "100%";
    nav.style.borderRadius = "0px";
    cursor.style.order = 1;
    logoArray.map(i => (i.style.display = "block"));
  } else {
    nav.style.width = "85px";
    nav.style.borderRadius = "0px 0px 15px 0px";
    cursor.style.order = 0;
    logoArray.map(i => (i.style.display = "none"));
  }
}

window.addEventListener("scroll", () => {
  let scrolled = window.scrollY;
  if (scrolled > 90) {
    navToggle.checked = false;
    checkboxToggle(navToggle);
  } else {
    navToggle.checked = true;
    checkboxToggle(navToggle);
  }
});
