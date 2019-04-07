const nav = document.getElementById("nav");
// const navList = document.querySelector("nav-list");
const navToggle = document.getElementById("nav-toggle");
const cursor = document.getElementById("cursor");
// const logoItems = document.getElementsByClassName("nav-logo");
const logo1 = document.getElementById("logo1");
const logo3 = document.getElementById("logo3");
const logo4 = document.getElementById("logo4");
const logo5 = document.getElementById("logo5");
const logo6 = document.getElementById("logo6");
const logoArray = [logo1, logo3, logo4, logo5, logo6];
const videos = document.querySelectorAll("video");

// Video play and display settings
videos.forEach(video => {

  // Make videos play while hovered over and pause after 5secs when hover is removed
  video.addEventListener("mouseover", function () {
    this.play();
  });
  video.addEventListener("mouseout", function () {
    setTimeout(() => {
      this.pause();
    }, 5000);
  });

  // Find the aspect ratio of the video and its parent container
  const vidAR = video.videoHeight / video.videoWidth;
  const parentAR = video.parentNode.offsetHeight / video.parentNode.offsetWidth;
  // Choose the size of the video to allow the best viewing whilst still filling the parent (not consistently working on Chrome)
  if (vidAR < parentAR) {
    video.style.maxHeight = "100%";
  } else {
    video.style.maxWidth = "100%";
  }


});
// Set the nav toggle to checked when the page loads so that the navbar is expanded by default
navToggle.checked = true;
// Set styles for collapsed and expanded navbar (will probably add / remove classes in future as transitions may work better this way)
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

// Collapse the navbar automatically when page is scrolled down and expand when scrolled back to the top
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

// size the preview videos based on their aspeect ratio