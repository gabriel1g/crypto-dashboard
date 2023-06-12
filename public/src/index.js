const themeBtn = document.querySelector(".theme-btn");

document.getElementById("menu-btn").addEventListener("click", () => {
  const sidebar = document.querySelector("main aside");
  var style = document.defaultView.getComputedStyle(sidebar);

  if (style.display == "none") {
    sidebar.setAttribute("style", "display: flex");
  }
  else if (style.display == "flex") {
    sidebar.removeAttribute("style");
  }
});

document.getElementById("close-btn").addEventListener("click", () => {
  document.querySelector("main aside").setAttribute("style", "display: none");
});

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");

  themeBtn.querySelector("span:first-child").classList.toggle("active");
  themeBtn.querySelector("span:last-child").classList.toggle("active");
});
