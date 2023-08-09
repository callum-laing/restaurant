//This is to include the navbar.

function headerFunc() {
  const header = document.createElement("div");
  header.classList.add("headerDiv");

  const navbar = document.createElement("nav");
  navbar.classList.add("nav-bar");
  header.appendChild(navbar);

  return;
}

export default headerFunc();
