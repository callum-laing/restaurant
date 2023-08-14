(()=>{"use strict";const t=function(){const t=document.createElement("div");t.classList.add("main-page");const n=document.createElement("div");return n.classList.add("intro"),n.innerHTML='<h1 class="intro-color">Welcome</h1> <br> <h3>The Pantry</h3> <hr> <p class="intro-text">Where every bite is a bakery delight!</p>',t.appendChild(n),t}(),n=function(){const t=document.createElement("div");t.classList.add("header");const n=document.createElement("nav");return n.classList.add("nav-bar"),t.appendChild(n),n.innerHTML=' <nav class="navbar">\n        <div class="main-nav">\n          <a href="#" id="homeLink">Home</a>\n          <a href="#" id="menuLink">Menu</a>\n          <a href="#" id="contactLink">Contact</a>\n        </div>',t}(),e=function(){const t=document.createElement("div");return t.classList.add("footer"),t.innerHTML='<p class="footer-text">Developed by Callum Laing</p>',t}(),d=function(){const t=document.createElement("div");t.classList.add("menu-page");const n=document.createElement("div");return n.classList.add("menu"),n.innerHTML='<h2 class="menu-title">Menu</h2>\n    <div class="pastry-menu">\n      <table>\n        <h3 class="menu-subtitle">Pastry</h3>\n        <br>\n        <tr>\n          <th>Name</th>\n          <th>Price</th>\n        </tr>\n        <tr>\n          <td>Croissant</td>\n          <td>£3.50</td>\n        </tr>\n        <tr>\n          <td> Pain au Chocolat</td>\n          <td>£3.00</td>\n        </tr>\n        <tr>\n          <td>Danish</td>\n          <td>£2.00</td>\n        </tr>\n        <tr>\n          <td>Fruit Turnover</td>\n          <td> £2.50</td>\n        </tr>\n        <tr>\n          <td>Scone</td>\n          <td>£2.50</td>\n        </tr>\n      </table>\n    </div>\n\n    <div class="cupcake-menu">\n      <table>\n        <h3 class="menu-subtitle">Cupcakes</h3>\n        <br>\n          <tr>\n            <th>Name</th>\n            <th>Price</th>\n          </tr>\n          <tr>\n            <td>Vanilla Cake</td>\n            <td>£2.50</td>\n          </tr>\n          <tr>\n            <td>Blueberry Cake</td>\n            <td>£2.50</td>\n          </tr>\n          <tr>\n            <td>Strawberry Cake</td>\n            <td>£2.50</td>\n          </tr>\n          <tr>\n            <td>Caramel Cake</td>\n            <td>£2.50</td>\n          </tr>\n          <tr>\n            <td>Chocolate Cake</td>\n            <td>£2.50</td>\n          </tr>\n      </table>\n    </div>\n\n    <div class="cookie-menu">\n      <table>\n        <h3 class="menu-subtitle">Cookies</h3>\n        <br>\n        <tr>\n          <th>Name</th>\n          <th>Price</th>\n        </tr>\n        <tr>\n          <td>Chocolate Chip Cookie</td>\n          <td>£2.00</td>\n        </tr>\n        <tr>\n          <td>Blueberry Cookie</td>\n          <td>£2.00</td>\n        </tr>\n        <tr>\n          <td>White Choc Chip Cookie</td>\n          <td>£2.00</td>\n        </tr>\n        <tr>\n          <td>Raisin Cookie</td>\n          <td>£2.00</td>\n        </tr>\n        <tr>\n          <td>Raspberry Cookie</td>\n          <td>£2.00</td>\n        </tr>\n      </table>\n    </div>\n\n    <dv class="drink-menu">\n      <table>\n        <h3 class="menu-subtitle">Drinks</h3>\n        <br>\n        <tr>\n          <th>Name</th>\n          <th>Price</th>\n        </tr>\n        <tr>\n          <td>Coke Zero(330ml)</td>\n          <td>£1.20</td>\n        </tr>\n        <tr>\n          <td>Sprite Zero(330ml)</td>\n          <td>£1.20</td>\n        </tr>\n        <tr>\n          <td>Green Tea</td>\n          <td>£1.00</td>\n        </tr>\n        <tr>\n          <td>Fresh Juice</td>\n          <td>£1.00</td>\n        </tr>\n        <tr>\n          <td>Coffee</td>\n          <td>£1.20</td>\n        </tr>\n      </table>',t.appendChild(n),t}(),r=function(){const t=document.createElement("div");t.classList.add("contact-wrapper");const n=document.createElement("div");return n.classList.add("contactContent"),n.innerHTML='<h2 class="contact-title">Contact Us!</h2>\n    <div class="contact-links">\n      <p><span class="contact-link-title">Email:</span> thepantry@imnotreal.com</p>\n      <p><span class="contact-link-title">Phone:</span> 01234 987654</p>\n    </div>\n    <div class="location">\n      <img class="location-img" src="https://assets.codepen.io/6415761/location.jpg" alt="" />\n    </div>',t.appendChild(n),t}();function a(t){const d=document.querySelector("#content");document.querySelector("#content").innerHTML="",d.appendChild(n),d.appendChild(t),d.appendChild(e)}document.addEventListener("DOMContentLoaded",(()=>{a(t),document.querySelector("#homeLink").addEventListener("click",(()=>{a(t)})),document.querySelector("#contactLink").addEventListener("click",(()=>{a(r)})),document.querySelector("#menuLink").addEventListener("click",(()=>{a(d)}))}))})();