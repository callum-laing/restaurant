function menuPage() {
  const wrapper = document.createElement("div");
  wrapper.classList.add("menu-page");

  const menuContent = document.createElement("div");
  menuContent.classList.add("menu");
  menuContent.innerHTML = `<h2 class="menu-title">Menu</h2>
    <div class="pastry-menu">
      <table>
        <h3>Pastry</h3>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
        <tr>
          <td>Croissant</td>
          <td>£3.50</td>
        </tr>
        <tr>
          <td> Pain au Chocolat</td>
          <td>£3.00</td>
        </tr>
        <tr>
          <td>Danish</td>
          <td>£2.00</td>
        </tr>
        <tr>
          <td>Fruit Turnover</td>
          <td> £2.50</td>
        </tr>
        <tr>
          <td>Scone</td>
          <td>£2.50</td>
        </tr>
      </table>
    </div>

    <div class="cupcake-menu">
      <table>
        <h3>Cupcakes
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
          <tr>
            <td>Vanilla Cake</td>
            <td>£2.50</td>
          </tr>
          <tr>
            <td>Blueberry Cake</td>
            <td>£2.50</td>
          </tr>
          <tr>
            <td>Strawberry Cake</td>
            <td>£2.50</td>
          </tr>
          <tr>
            <td>Caramel Cake</td>
            <td>£2.50</td>
          </tr>
          <tr>
            <td>Chocolate Cake</td>
            <td>£2.50</td>
          </tr>
      </table>
    </div>

    <div class="cookie-menu">
      <table>
        <h3>Cookies</h3>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
        <tr>
          <td>Chocolate Chip Cookie</td>
          <td>£2.00</td>
        </tr>
        <tr>
          <td>Blueberry Cookie</td>
          <td>£2.00</td>
        </tr>
        <tr>
          <td>White Choc Chip Cookie</td>
          <td>£2.00</td>
        </tr>
        <tr>
          <td>Raisin Cookie</td>
          <td>£2.00</td>
        </tr>
        <tr>
          <td>Raspberry Cookie</td>
          <td>£2.00</td>
        </tr>
      </table>
    </div>

    <dv class="drink-menu">
      <table>
        <h3>Drinks</h3>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
        <tr>
          <td>Coke Zero(330ml)</td>
          <td>£1.20</td>
        </tr>
        <tr>
          <td>Sprite Zero(330ml)</td>
          <td>£1.20</td>
        </tr>
        <tr>
          <td>Green Tea</td>
          <td>£1.00</td>
        </tr>
        <tr>
          <td>Fresh Juice</td>
          <td>£1.00</td>
        </tr>
        <tr>
          <td>Coffee</td>
          <td>£1.20</td>
        </tr>
      </table>`;

  wrapper.appendChild(menuContent);
  return wrapper;
}

export default menuPage();
