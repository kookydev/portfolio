let navtrigger = document.getElementById("toggle");
console.log(navtrigger);
let logo1 = document.getElementById("logo1");
let logo2 = document.getElementById("logo2");
let logo3 = document.getElementById("logo3");
let logo4 = document.getElementById("logo4");
let logo5 = document.getElementById("logo5");
let logo6 = document.getElementById("logo6");
let windowWidth = document.documentElement.clientWidth;
let menuCollapsed = false;

navtrigger.addEventListener("click", () => {
    if (windowWidth < 400) {
        if (!menuCollapsed) {
            logo1.style.animation = "logo-out .1s linear";
            logo3.style.animation = "logo-out .1s linear 1.5s";
            logo4.style.animation = "logo-out .1s linear .5s";
            logo5.style.animation = "logo-out .1s linear .25s";
            logo6.style.animation = "logo-out .1s linear";
            menuCollapsed = true;
        }
        else {
            logo1.style.animation = "logo-in .1s linear";
            logo3.style.animation = "logo-in .1s linear .25s";
            logo4.style.animation = "logo-in .1s linear .5s";
            logo5.style.animation = "logo-in .1s linear .75s";
            logo6.style.animation = "logo-in .1s linear 1s";
            menuCollapsed = false;
        }
    } 
})
