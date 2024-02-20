const navBtn = document.querySelector(".nav-btn");
const navMenu = document.querySelector(".nav-menu");

navBtn.addEventListener("click", (e) => {
  navBtn.classList.toggle("active");
  navMenu.classList.toggle("active");
});

const projectsBtn = document.querySelector(".nav-link.projects .link-title");
projectsBtn.addEventListener("click", (e) => {
  document
    .querySelector(".nav-link.projects .link-title")
    .classList.toggle("active");

  document
    .querySelector(".nav-link.projects .projects-nav")
    .classList.toggle("active");
});
