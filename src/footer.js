function footerFunc() {
  const footer = document.createElement("div");
  footer.classList.add("footer");
  footer.innerHTML = `<p class="footer-text">Developed by Callum Laing</p>`;

  return footer;
}

export default footerFunc();
