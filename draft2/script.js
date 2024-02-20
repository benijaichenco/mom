function chooseLink() {
  const links = document.querySelectorAll(".nav-link");
  console.log(links);
  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      console.log(e.target.parentElement);
      console.log(link);
      links.forEach((link) => {
        link.parentElement.classList.remove("active-link");
      });
      e.target.parentElement.classList.add("active-link");
    });
  });
}
chooseLink();
