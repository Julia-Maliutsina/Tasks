const prev = document.getElementById("slider-nav_prev_arrow");
const next = document.getElementById("slider-nav_next_arrow");
prev.addEventListener("click", changeSlide, false);
next.addEventListener("click", changeSlide, false);

const sliderContent = document.getElementsByClassName("slider-content")[0];
let sliderPosition = 0;
const slideWidth = document.getElementsByClassName("slider-content_slide")[0]
  .offsetWidth;

function changeSlide(EO) {
  console.log(EO.target == prev);
  console.log(EO.target == next);
  EO.preventDefault();
  EO = EO || window.event;
  if (sliderPosition > -slideWidth && EO.target == prev) {
    sliderPosition -= slideWidth * 2;
  }
  if (sliderPosition < 0 && EO.target == next) {
    sliderPosition += slideWidth * 2;
  }
  if (EO.target == prev) {
    sliderPosition += slideWidth;
  }
  if (EO.target == next) {
    sliderPosition -= slideWidth;
  }
  sliderContent.style.transform = "translateX(" + sliderPosition + "px)";
}

const mobileMenuOpenIcon = document.getElementsByClassName(
  "main-nav_mobile_icon_img"
)[0];
mobileMenuOpenIcon.addEventListener("click", showMenu, false);

function showMenu(EO) {
  console.log("started");
  const mobileMenu = document.getElementsByClassName("menu_mobile")[0];
  const mobileMenuOverlay = document.getElementsByClassName(
    "menu_mobile_overlay-tint"
  )[0];
  mobileMenu.style.display = "block";
  mobileMenuOverlay.style.display = "block";
  const mobileMenuCloseIcon = document.getElementsByClassName(
    "menu_mobile_icon_vertical"
  )[0];
  mobileMenuCloseIcon.addEventListener("click", hideMenu, false);

  function hideMenu(EO) {
    mobileMenu.style.display = "none";
    mobileMenuOverlay.style.display = "none";
  }
}
