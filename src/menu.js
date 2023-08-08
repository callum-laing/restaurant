function createMenu() {
  const menu = document.createElement("div");
  menu.classList.add("menu-card");

  // Create an h2 element, add a class, set text content
  const title = document.createElement("h2");
  title.classList.add("title");
  title.textContent = "Menu";

  // Append the h2 element to the div
  menu.appendChild(title);

  return menu; // Return the created menu div
}

export default createMenu;
