//This is to include the navbar.

function headerFunc() {
  const header = document.createElement("div");
  header.classList.add("header");

  const navbar = document.createElement("nav");
  navbar.classList.add("nav-bar");
  header.appendChild(navbar);

  navbar.innerHTML = ` <nav class="navbar">
        <div class="main-nav">
          <a href="#" id="homeLink">Home</a>
          <a href="#" id="menuLink">Menu</a>
          <a href="#" id="contactLink">Contact</a>
        </div>`;
  return header;
}

export default headerFunc();
