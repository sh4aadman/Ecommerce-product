// const cartBadge = document.querySelector("#product-cart");

// const countBadge = document.querySelector("#count-badge");

// const cartModal = document.querySelector("#cart-modal");

const emptyCart = document.querySelector("#empty-cart");

// const cartDetails = document.querySelector(".cart-details");

const productName = document.querySelector("#product-name");

const cartSubmission = document.querySelector(".product-cart");

const productCount = document.querySelector("#product-quantity");

const addToCartBtn = document.querySelector("#add-to-cart-button");

// const countIncrementBtn = document.querySelector("#increment-button");

// const countDecrementBtn = document.querySelector("#decrement-button");

// const removeBtn = document.querySelector(".remove-button");

// const checkoutBtn = document.querySelector("#check-out");

// const changeQuantity = (x) => {
//   productCount.value = x;
// };

// countDecrementBtn.addEventListener("click", function (event) {
//   event.preventDefault();
//   let count = productCount.value;
//   let countInt = parseInt(count);
//   countInt--;
//   if (countInt <= 0) {
//     countInt = 0;
//     countDecrementBtn.disabled = true;
//   }
//   productCount.value = countInt;
// });

// countIncrementBtn.addEventListener("click", function (event) {
//   event.preventDefault();
//   let count = productCount.value;
//   let countInt = parseInt(count);
//   countInt++;
//   productCount.value = countInt;
// });

addToCartBtn.addEventListener("click", function () {
  Location.href = "index.html";
  emptyCart.style.display = "none";
  let countInt = parseInt(productCount.value);
  let total = 125.0 * countInt;
  cartDetails.innerHTML = `
  <figure>
    <img src="./images/image-product-1-thumbnail.jpg" alt="product-thumbnail">
  </figure>
  <section class="cart-product-details">
    <p>${productName.innerHTML}</p>
    <p>${countInt} x $125.00</p><span>$${total}.00</span>
  </section>
  <button class="remove-button"><i class="fa-solid fa-trash-can"></i></button>
  `;
});

// cartSubmission.addEventListener("submit", function (event) {
//   event.preventDefault();
  
//   let badgeInt = parseInt(countBadge.textContent);
//   badgeInt++;
//   countBadge.textContent = badgeInt;
//   if (badgeInt > 0) {
//     countBadge.style.display = "block";
//   }
// });

// cartBadge.addEventListener("click", function (event) {
//   event.stopImmediatePropagation();
//   cartModal.style.display = "block";
//   const badgeInt = parseInt(countBadge.textContent);
//   if (badgeInt === 0) {
//     checkoutBtn.style.display = "none";
//   }
//   setTimeout(() => {
//     cartModal.style.display = "none";
//   }, 5000);
// });

if (removeBtn) {
  removeBtn.addEventListener("click", function () {
    console.log("clicked");
  });
}

// document.firstElementChild.addEventListener(
//   "click",
//   function () {
//     cartModal.style.display = "none";
//   },
//   false
// );
