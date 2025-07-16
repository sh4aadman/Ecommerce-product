const cartBadge = document.querySelector("#product-cart");

const cartModal = document.querySelector("#cart-modal");

const checkoutBtn = document.querySelector("#check-out");

let count = 0;
const quantityArrayStr = sessionStorage.getItem("quantityArray");
const quantityArray = JSON.parse(quantityArrayStr);
count = quantityArray?.length;

cartBadge.addEventListener("click", function () {
  if (count === 0) {
    checkoutBtn.style.display = "none";
  }
  cartModal.style.display = "block";
  setTimeout(() => {
    cartModal.style.display = "none";
  }, 5000);
});
