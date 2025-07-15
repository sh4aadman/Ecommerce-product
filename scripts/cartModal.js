const cartBadge = document.querySelector("#product-cart");

const cartModal = document.querySelector("#cart-modal");

const cartDetails = document.querySelector("#cart-details");

const productName = document.querySelector("#product-name");

const productCount = document.querySelector("#product-quantity");

const count = sessionStorage.getItem("count");
const quantityArrayStr = sessionStorage.getItem("quantityArray");
const quantityArray = JSON.parse(quantityArrayStr);

const emptyCart = document.querySelector("#empty-cart");

for (let i = 0; i < parseInt(count); i++) {
  const quantityCountStr = quantityArray[i];
  const quantityCount = parseInt(quantityCountStr);
  const total = 125.0 * quantityCount;
  const section = document.createElement("section");
  section.classList.add("cart-details");
  section.innerHTML = `
    <figure>
    <img src="./images/image-product-1-thumbnail.jpg" alt="product-thumbnail">
    </figure>
    <section class="cart-product-details">
    <p>${productName.innerHTML}</p>
    <p>${quantityCount} x $125.00</p><span>$${total}.00</span>
    </section>
    <button class="remove-button"><i class="fa-solid fa-trash-can"></i></button>
    `;
  cartDetails.append(section);
}

cartBadge.addEventListener("click", function () {
  emptyCart.style.display = "none";
});
