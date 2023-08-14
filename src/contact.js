function contactPage() {
  const contactWrapper = document.createElement("div");
  wrapper.classList.add("contact-wrapper");

  const contactContent = document.createElement("div");
  contactContent.classList.add("contactContent");
  contactContent.innerHTML = `<h2 class="contact-title">Contact Us!</h2>
    <div class="contact-links">
      <p><span class="contact-link-title">Email:</span> thepantry@imnotreal.com</p>
      <p><span class="contact-link-title">Phone:</span> 01234 987654</p>
    </div>
    <div class="location">
      <img class="location-img" src="https://assets.codepen.io/6415761/location.jpg" alt="" />
    </div>`;

  contactWrapper.appendChild(contactContent);
  return contactWrapper;
}

export default contactPage();
