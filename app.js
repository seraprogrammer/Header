const navMenu = document.getElementById("menu_icon");
const header = document.getElementById("header");

let flg = 0;
navMenu.addEventListener("click", () => {
  if (flg == 0) {
    header.style.left = "-100%";
    flg = 1;
  } else {
    header.style.left = "0%";
    flg = 0;
  }
});
