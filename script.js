const navBtn = document.querySelector(".nav-btn");
const navMenu = document.querySelector(".nav-menu");
const overlay = document.querySelector(".overlay");
const navProjectsTitle = document.querySelector(".projects .link-title");
const projectsNav = document.querySelector(".projects-nav");

function toggleNav() {
  navBtn.classList.toggle("active");
  navMenu.classList.toggle("active");
  overlay.classList.toggle("active");
}

function toggleProjectsNav() {
  navProjectsTitle.classList.toggle("active");
  projectsNav.classList.toggle("active");
}

navBtn.addEventListener("click", toggleNav);

overlay.addEventListener("click", function () {
  if (navBtn.classList.contains("active")) {
    toggleNav();
  }
});

const projectsBtn = document.querySelector(".nav-link.projects .link-title");
projectsBtn.addEventListener("click", toggleProjectsNav);
