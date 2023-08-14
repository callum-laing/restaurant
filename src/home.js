//Main homepage to include the initial page load/home link.
//Include: Title, Intro text, images

function homeFunc() {
  const wrapper = document.createElement("div");
  wrapper.classList.add("main-page");

  const bodyText = document.createElement("div");
  bodyText.classList.add("intro");
  bodyText.innerHTML = `<h1 class="intro-color">Welcome</h1> <br> <h3>The Pantry</h3> <hr> <p class="intro-text">Where every bite is a bakery delight!</p>`;

  wrapper.appendChild(bodyText);
  return wrapper;
}

export default homeFunc();
