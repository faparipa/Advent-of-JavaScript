const menuItems = [
    {
        name: "French Fries with Ketchup",
        price: 223,
        image: "plate__french-fries.png",
        alt: "French Fries",
        count: 0,
    },
    {
        name: "Salmon and Vegetables",
        price: 512,
        image: "plate__salmon-vegetables.png",
        alt: "Salmon and Vegetables",
        count: 0,
    },
    {
        name: "Spaghetti Meat Sauce",
        price: 782,
        image: "plate__spaghetti-meat-sauce.png",
        alt: "Spaghetti with Meat Sauce",
        count: 0,
    },
    {
        name: "Bacon, Eggs, and Toast",
        price: 599,
        image: "plate__bacon-eggs.png",
        alt: "Bacon, Eggs, and Toast",
        count: 0,
    },
    {
        name: "Chicken Salad with Parmesan",
        price: 698,
        image: "plate__chicken-salad.png",
        alt: "Chicken Salad with Parmesan",
        count: 0,
    },
    {
        name: "Fish Sticks and Fries",
        price: 634,
        image: "plate__fish-sticks-fries.png",
        alt: "Fish Sticks and Fries",
        count: 0,
    },
];

//let addToCartBtn;
let itemsName = [];
let piece;
const menu = document.querySelector("ul.menu");
const cartSummary = document.querySelector(".cart-summary");
const cartTitle = document.querySelector(".cart>h1");
const subtotalPriceText = document.querySelector(".line-item >.subtotal");
const taxText = document.querySelector(".tax");
const totalPriceText = document.querySelector(".line-item >.total");
const quantity = document.querySelectorAll(".quantity");

let subtotals = [0];
let count;

let generateMenu = () => {
    menuItems.forEach((items) => {
        let content = menu.innerHTML;
        count = items.count;
        content += `
              <li>
                  <div class="plate">
                      <img src="images/${items.image}" alt="${items.alt}" />
                  </div>
                  <div class="content">
                      <p class="menu-item">${items.name}</p>
                      <p class="price">${items.price}</p>
                      <button class="add">Add to Cart</button>
                  </div>
               </li>
      `;

        menu.innerHTML = content;
        addBtn();
    });
};

let updateCart = () => {
    cartSummary.innerHTML = "";
    cartTitle.textContent = "Your cart is Emty";
    subtotalPriceText.textContent = "$0";
    taxText.textContent = "$0";
    totalPriceText.textContent = "$0";

    menuItems.forEach((items) => {
        if (items.count > 0) {
            cartTitle.textContent = "Your cart";
            let subtotal = items.price * items.count;
            cart = "";
            cart = `<li>
                      <div class="plate">
                          <img
                              src="images/${items.image}"
                              alt="${items.alt}"
                              class="plate"
                          />
                          <div class="quantity">${items.count}</div>
                      </div>
                      <div class="content">
                          <p class="menu-item">${items.name}</p>
                          <p class="price">$${items.price}</p>
                      </div>
                      <div class="quantity__wrapper">
                          <button class="decrease">
                              <img src="images/chevron.svg" />
                          </button>
                          <div class="quantity">${items.count}</div>
                          <button class="increase">
                              <img src="images/chevron.svg" />
                          </button>
                      </div>
                      <div class="subtotal">$${subtotal}</div>
                  </li>`;

            cartSummary.innerHTML += cart;
            totalPriceUpdate();
        }
    });
    increase();
    decrease();
};

let totalPriceUpdate = () => {
    subtotals = [];
    menuItems.forEach((items) => {
        if (items.count > 0) {
            subtotals.push(items.price * items.count);
            let subtotalPrice = subtotals.reduce(function (a, b) {
                return a + b;
            });
            let tax = subtotalPrice * 0.0975;
            let totalPrice = subtotalPrice + tax;
            subtotalPriceText.textContent = `$${subtotalPrice}`;
            taxText.textContent = `$${tax.toFixed(2)}`;
            totalPriceText.textContent = `$${totalPrice.toFixed(2)}`;
        }
    });
};

let addBtn = () => {
    let addToCartBtn = document.querySelectorAll(".add");
    for (let i = 0; i < addToCartBtn.length; i++) {
        addToCartBtn[i].addEventListener("click", () => {
            count = menuItems[i].count;

            if (menuItems[i].count > 0) {
                alert("This item is already in your cart.");
                //TODO count increse
            } else {
                // itemName = menuItems[i].name;
                // image = menuItems[i].image;
                // alt = menuItems[i].alt;
                let price = menuItems[i].price;
                count++;
                menuItems[i].count = count;
                //console.log(menuItems[i].count);
                updateCart();
            }
        });
    }
};

let increase = (count) => {
    const increaseBtn = document.getElementsByClassName("increase");
    for (let i = 0; i < increaseBtn.length; i++) {
        increaseBtn[i].addEventListener("click", () => {
            count = menuItems[i].count;
            count++;
            menuItems[i].count = count;
            updateCart();
        });
    }
};

let decrease = (count) => {
    const decreaseBtn = document.getElementsByClassName("decrease");
    for (let i = 0; i < decreaseBtn.length; i++) {
        decreaseBtn[i].addEventListener("click", () => {
            count = menuItems[i].count;
            count--;
            if (count < 1) {
                if (confirm("Would you like to remove this item?")) {
                    menuItems[i].count = count;
                } else {
                    count = 1;
                    return count;
                }
            }
            menuItems[i].count = count;
            updateCart();
        });
    }
};

generateMenu();
