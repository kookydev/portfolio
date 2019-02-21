let menuCollapsed = false;
let navtrigger = document.getElementById("toggle");
navtrigger.addEventListener("click", () => {
  menuAnimation();
});

const menuAnimation = () => {
  console.log(navtrigger);
  let logo1 = document.getElementById("logo1");
  let logo2 = document.getElementById("logo2");
  let logo3 = document.getElementById("logo3");
  let logo4 = document.getElementById("logo4");
  let logo5 = document.getElementById("logo5");
  let logo6 = document.getElementById("logo6");
  let cursor = document.getElementById("cursor");
  let windowWidth = document.documentElement.clientWidth;
  let timeout = Math.random() * 500;
  if (windowWidth < 2000) {
    if (!menuCollapsed) {
      setTimeout(() => {
        cursor.style.order = 0;
      }, timeout);
      setTimeout(() => {
        logo5.style.display = "none";
      }, (timeout += Math.random() * 400 + 200));
      setTimeout(() => {
        logo4.style.display = "none";
      }, (timeout += Math.random() * 400 + 200));
      setTimeout(() => {
        logo3.style.display = "none";
      }, (timeout += Math.random() * 400 + 200));
      setTimeout(() => {
        cursor.style.order = -1;
      }, (timeout += Math.random() * 400 + 200));
      setTimeout(() => {
        logo1.style.display = "none";
        logo6.style.display = "none";
      }, (timeout += Math.random() * 400 + 200));

      menuCollapsed = true;
    } else {
      setTimeout(() => {
        logo1.style.display = "block";
        logo6.style.display = "block";
      }, timeout);
      setTimeout(() => {
        cursor.style.order = 0;
      }, (timeout += Math.random() * 400 + 200));
      setTimeout(() => {
        logo3.style.display = "block";
      }, (timeout += Math.random() * 400 + 200));
      
      setTimeout(() => {
        logo4.style.display = "block";
      }, (timeout += Math.random() * 400 + 200));
      setTimeout(() => {
        logo5.style.display = "block";
      }, (timeout += Math.random() * 400 + 200));
      setTimeout(() => {
        cursor.style.order = 1;
      }, (timeout += Math.random() * 400 + 200));
      
      menuCollapsed = false;
    }
  }
};
