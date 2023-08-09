function headerFunc() {
  const header = document.createElement("div");
  header.classList.add("headerDiv");

  const navbar = document.createElement("nav");
  navbar.classList.add("navbar");
  header.appendChild(navbar);

  return;
}

export default headerFunc();
