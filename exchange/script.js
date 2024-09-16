document.addEventListener("DOMContentLoaded", () => {
  const burgerIcon = document.querySelector(".burger-icon");
  const navMenu = document.querySelector("nav ul");

  burgerIcon.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });
});
