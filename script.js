const spacebar = document.querySelector(".spacebar");
const loader = document.querySelector(".loading");
const progressing = document.querySelector(".processing");
const finish = document.querySelector(".finalPopup");

const pressed = function () {
  spacebar.style.marginTop = "10px";
  spacebar.style.boxShadow = "0px 10px 0px 2px #000";
  setInterval(release, 800);
};

const release = function () {
  spacebar.style.marginTop = "0px";
  spacebar.style.boxShadow = "0px 15px 0 7px #000";
  spacebar.style.filter = "blur(2px)";
  setInterval(showloader, 500);
};

const showloader = function () {
  loader.classList.remove("hidden");
  progressing.style.width = "95%";
  setInterval(popup, 5500);
};

const popup = function () {
  loader.classList.add("hidden");
  spacebar.classList.add("hidden");
  finish.classList.remove("hidden");
  finish.style.display = "flex";
  loader.style.display = "none";
};

spacebar.addEventListener("click", pressed);
