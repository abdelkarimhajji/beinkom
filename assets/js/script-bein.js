let Flesh_dev = document.getElementById("Flesh_dev");
let Flesh_marketing = document.getElementById("Flesh_marketing");
let Flesh_impression = document.getElementById("Flesh_impression");
let Flesh_creation = document.getElementById("Flesh_creation");
let dev = document.getElementById("Dev");
let marketing = document.getElementById("Marketing")
let impression = document.getElementById("impression_copie")
let creation = document.getElementById("Creation")
let impression_shadow = document.getElementById("impression");
Flesh_dev.style.visibility = "hidden"
Flesh_impression.style.visibility = "hidden"
Flesh_marketing.style.visibility = "hidden"
Flesh_creation.style.visibility = "hidden"

// hover of dev
dev.addEventListener('mouseenter', () => {
    dev.style.filter = "grayscale(0%)"
    dev.style.transition = "0.2s"
    Flesh_dev.style.visibility = "visible"
    Flesh_dev.style.transition = "0.5s"
})
dev.addEventListener('mouseleave', () => {
    dev.style.filter = "grayscale(100%)"
    Flesh_dev.style.visibility = "hidden"
    Flesh_dev.style.transition = "0s"   
})


// hover of marketing
marketing.addEventListener('mouseenter', () => {
    marketing.style.filter = "grayscale(0%)"
    marketing.style.transition = "0.2s"

    Flesh_marketing.style.visibility = "visible"
    Flesh_marketing.style.transition = "0.5s"
})
marketing.addEventListener('mouseleave', () => {
    marketing.style.filter = "grayscale(100%)"
    Flesh_marketing.style.visibility = "hidden"
    Flesh_marketing.style.transition = "0s"   
})


// hover of impresstion
impression.addEventListener('mouseenter', () => {
    impression.style.filter = "grayscale(0%)"
    impression.style.transition = "0.2s"
    impression_shadow.style.filter = "grayscale(0%)"
    Flesh_impression.style.visibility = "visible"
    Flesh_impression.style.transition = "0.5s"
})
impression.addEventListener('mouseleave', () => {
    impression.style.filter = "grayscale(100%)"
     impression_shadow.style.filter = "grayscale(100%)"
    Flesh_impression.style.visibility = "hidden"
    Flesh_impression.style.transition = "0s"   
})


// hover of creation
creation.addEventListener('mouseenter', () => {
    creation.style.filter = "grayscale(0%)"
    creation.style.transition = "0.2s"

    Flesh_creation.style.visibility = "visible"
    Flesh_creation.style.transition = "0.5s"
})
creation.addEventListener('mouseleave', () => {
    creation.style.filter = "grayscale(100%)"
    Flesh_creation.style.visibility = "hidden"
    Flesh_creation.style.transition = "0s"   
})






//  lading page
let bird = document.querySelector(".bird");
let frame = 0;
const frames = ["bird1", "bird2", "bird3", "bird4", "bird5", "bird6"]
function animateBird() {
  bird.style.backgroundImage = `url("assets/images/${frames[frame]}.png")`;


  frame++;
  if (frame > 5) {
    frame = 0;
  }

  setTimeout(animateBird, 80); 
}

animateBird(); 




let loading = document.querySelector(".loading")

let minLoadTimePassed = false;
let siteLoaded = false;


setTimeout(function () {
  minLoadTimePassed = true;
  if (siteLoaded) hidePreloader();
}, 2500);


window.addEventListener("load", function () {
  siteLoaded = true;
  if (minLoadTimePassed) hidePreloader();
});


function hidePreloader() {
  loading.style.transition = "0.4s";
  loading.style.opacity = "0";

  setTimeout(function () {
    loading.style.display = "none";
  }, 1000);
}

