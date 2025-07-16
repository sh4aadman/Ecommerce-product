const cartSubmission = document.querySelector(".product-cart");

const countBadge = document.querySelector("#count-badge");

let badgeCount = 0;
let quantityArray = [];

cartSubmission.addEventListener("submit", function (event) {
  event.preventDefault();
  const quantity = document.getElementById("product-quantity").value;
  const quantityObj = { id: badgeCount, quantity: quantity };
  quantityArray.push(quantityObj);
  badgeCount++;
  sessionStorage.setItem("quantityArray", JSON.stringify(quantityArray));
  countBadge.innerHTML = badgeCount;
  countBadge.style.display = "inline";
});
