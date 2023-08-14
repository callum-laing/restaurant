import homeFunc from "./home";
import headerFunc from "./header";
import footerFunc from "./footer";
import menuPage from "./menu";
import contactPage from "./contact";

// function mainFunction(content) {
//   const container = document.querySelector("#content");

//   container.appendChild(headerFunc);
//   container.appendChild(homeFunc);
//   container.appendChild(footerFunc);
// }

// mainFunction();

function clearContent() {
  const content = document.querySelector("#content");
  content.innerHTML = "";
}

function loadInitialContent(content) {
  const container = document.querySelector("#content");
  clearContent();
  container.appendChild(headerFunc);
  container.appendChild(content);
  container.appendChild(footerFunc);
}

document.addEventListener("DOMContentLoaded", () => {
  loadInitialContent(homeFunc);

  const homeLink = document.querySelector("#homeLink");
  homeLink.addEventListener("click", () => {
    loadInitialContent(homeFunc);
  });

  const contactLink = document.querySelector("#contactLink");
  contactLink.addEventListener("click", () => {
    loadInitialContent(contactPage);
  });

  const menuLink = document.querySelector("#menuLink");
  menuLink.addEventListener("click", () => {
    loadInitialContent(menuPage);
  });
});
