const cartBadge = document.querySelector("#product-cart");

const cartModal = document.querySelector("#cart-modal");

const cartDetails = document.querySelector("#cart-details");

const productName = document.querySelector("#product-name");

const productCount = document.querySelector("#product-quantity");

const emptyCart = document.querySelector("#empty-cart");

cartBadge.addEventListener("click", function () {
  const quantityArrayStr = sessionStorage.getItem("quantityArray");
  const quantityArray = JSON.parse(quantityArrayStr);
  const count = quantityArray?.length || 0;
  if (count > 0) {
    emptyCart.style.display = "none";
  }
});
