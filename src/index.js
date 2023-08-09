import wrapper from "./home";
import headerFunc from "./header";
import footerFunc from "./footer";

function mainFunction() {
  const container = document.querySelector("#content");

  container.appendChild(headerFunc);
  container.appendChild(wrapper);
  container.appendChild(footerFunc);
}

mainFunction();
