//This is to include the navbar.

function headerFunc() {
  const header = document.createElement("div");
  header.classList.add("header");

  const navbar = document.createElement("nav");
  navbar.classList.add("nav-bar");
  header.appendChild(navbar);

  navbar.innerHTML = ` <nav class="navbar">
        <div class="main-nav">
          <a href="#home" class="home-nav">Home</a>
          <a href="#menu" class="menu-nav">Menu</a>
          <a href="#contact" class="contact-nav">Contact</a>
        </div>`;
  return header;
}

export default headerFunc();
