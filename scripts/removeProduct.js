const badge = document.getElementById("count-badge");

const emptyCart = document.querySelector("#empty-cart");

const cartDetails = document.querySelector("#cart-details");

const removeBtn = document.querySelector(".remove-button");

const checkoutBtn = document.querySelector("#check-out");

removeBtn.addEventListener("click", function () {
  const newQuantity = [];
  sessionStorage.setItem("quantityArray", JSON.stringify(newQuantity));
  badge;
  badge.style.display = "none";
  cartDetails.style.display = "none";
  checkoutBtn.style.display = "none";
  emptyCart.style.display = "block";
});
