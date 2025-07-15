const cartBadge = document.querySelector("#product-cart");

const cartModal = document.querySelector("#cart-modal");

const checkoutBtn = document.querySelector("#check-out");

const count = sessionStorage.getItem("count");

cartBadge.addEventListener("click", function () {
  if (parseInt(count) === 0) {
    checkoutBtn.style.display = "none";
  }
  cartModal.style.display = "block";
  setTimeout(() => {
    cartModal.style.display = "none";
  }, 5000);
});
