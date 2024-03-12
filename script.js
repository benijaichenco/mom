const navBtn = document.querySelector(".nav-btn");
const navMenu = document.querySelector(".nav-menu");
const overlay = document.querySelector(".overlay");
const navProgramsTitle = document.querySelector(".program .link-title");
const programsNav = document.querySelector(".programs-nav");
const programsNavArrow = document.querySelector(".programs-nav-down-arrow");
const main = document.querySelector("main");

function toggleNav() {
  navBtn.classList.toggle("active");
  navMenu.classList.toggle("active");
  overlay.classList.toggle("active");
}

function toggleNavAndScroll(event) {
  toggleNav();
  event.preventDefault();
  const sectionId = event.target.getAttribute("href");
  const section = document.querySelector(sectionId);
  main.scrollTo({ behavior: "smooth", top: section.offsetTop });
}

function toggleProjectsNav() {
  navProgramsTitle.classList.toggle("active");
  programsNav.classList.toggle("active");
  programsNavArrow.classList.toggle("active");
}

overlay.addEventListener("click", function () {
  if (navBtn.classList.contains("active")) {
    toggleNav();
  }
});
