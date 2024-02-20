document.addEventListener("wheel", (e) => {
  const header = document.querySelector(".header-container");

  console.log(e.deltaY);
  if (e.deltaY > 0) {
    header.classList.add("scrolled");
  } else if (window.scrollY == 0 && e.deltaY < 0) {
    header.classList.remove("scrolled");
  }
  if (header.classList.contains("scrolled")) {
    document.querySelector(".text").style.animation = "none";
  } else {
    document.querySelector(".text").style.animation =
      "animation: textTransition 2s;";
  }

  if (window.scrollY > 0) {
    header.classList.add("scrolled");
  }
});

const headerText = document.querySelector(".header-container .text");
