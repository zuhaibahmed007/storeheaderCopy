const tglBtn = document.querySelector(".head_ar2 .az_hambger .az_toggle");
const overlayBtn = document.querySelector(".overlay");
tglBtn.addEventListener("click", () => {
  const aside = document.querySelector(".aside");
  const overlay = document.querySelector(".overlay");
  aside.classList.add("asideOpen");
  overlay.classList.add("d-block");
});
// overlayBtn.addEventListener("click", () => {
//   const aside = document.querySelector(".aside");
//   const overlay = document.querySelector(".overlay");
//   //   aside.classList.remove("asideOpen");
//   //   overlay.classList.remove("d-block");
//   const button = document.querySelector(".button");
//   const banner = document.querySelector(".banner");
// });

document.addEventListener("click", (evt) => {
  let targetElement = evt.target;
  const overlay = document.querySelector(".overlay");
  const aside = document.querySelector(".aside");
  if (targetElement.classList.contains("overlay")) {
    aside.classList.remove("asideOpen");
    overlay.classList.remove("d-block");
  } else {
    return;
  }
});

$(document).ready(function () {
  $(".azmega_menu .dropdown-menu .no-drop").on("click", function (e) {
    $(this).next("ul").toggle();
    e.stopPropagation();
    e.preventDefault();
  });
});
