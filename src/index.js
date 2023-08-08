import createMenu from "./menu";

function mainFunction() {
  const container = document.querySelector("#content");

  // Create a div element and add a class
  const mainDiv = document.createElement("div");
  mainDiv.classList.add("main-container");

  // Create an h1 element, add a class, set text content
  const title = document.createElement("h1");
  title.classList.add("title");
  title.textContent = "Welcome to my restaurant!";

  // Append the h1 element to the div
  mainDiv.appendChild(title);

  // Append the div to the container
  container.appendChild(mainDiv);

  container.appendChild(createMenu());
}

mainFunction();
