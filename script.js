/* -----------------------------------------
  Have focus outline only for keyboard users 
 ---------------------------------------- */

const handleFirstTab = (e) => {
  if(e.key === 'Tab') {
    document.body.classList.add('user-is-tabbing')

    window.removeEventListener('keydown', handleFirstTab)
    window.addEventListener('mousedown', handleMouseDownOnce)
  }

}

const handleMouseDownOnce = () => {
  document.body.classList.remove('user-is-tabbing')

  window.removeEventListener('mousedown', handleMouseDownOnce)
  window.addEventListener('keydown', handleFirstTab)
}

window.addEventListener('keydown', handleFirstTab)

const backToTopButton = document.querySelector(".back-to-top");
let isBackToTopRendered = false;

let alterStyles = (isBackToTopRendered) => {
  backToTopButton.style.visibility = isBackToTopRendered ? "visible" : "hidden";
  backToTopButton.style.opacity = isBackToTopRendered ? 1 : 0;
  backToTopButton.style.transform = isBackToTopRendered
    ? "scale(1)"
    : "scale(0)";
};

window.addEventListener("scroll", () => {
  if (window.scrollY > 700) {
    isBackToTopRendered = true;
    alterStyles(isBackToTopRendered);
  } else {
    isBackToTopRendered = false;
    alterStyles(isBackToTopRendered);
  }
});
const bar = document.getElementById("bar");
function getRndInteger(min, max) {
  return Math.round((Math.random()*(max - min) + min)*100)/100;
}
function setProgress(percent) {
  const p = 180 - (percent / 100) * 180;
  bar.style.transform = `rotate(-${p}deg)`;
}

let progress = 0;
var ph=0;
function run(){const interval = setInterval(() => {
  progress += 25;
  setProgress(progress);
  if (progress > 18) {
    clearInterval(interval);
  }
  ph = ph + getRndInteger(3,3.8)
  document.getElementById("mrr-text").innerHTML="Ph Level : " + ph.toString()
}, 1200)}


