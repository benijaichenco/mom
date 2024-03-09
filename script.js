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

function toggleNavAndScroll(event) {
  toggleNav();
  event.preventDefault();
  const sectionId = event.target.getAttribute("href").toString();
  console.log(sectionId);
  seamless.scrollIntoView(document.querySelector(sectionId), {
    behavior: "smooth",
    block: "center",
    inline: "center",
  });
}

function toggleProjectsNav() {
  navProjectsTitle.classList.toggle("active");
  projectsNav.classList.toggle("active");
}

overlay.addEventListener("click", function () {
  if (navBtn.classList.contains("active")) {
    toggleNav();
  }
});
