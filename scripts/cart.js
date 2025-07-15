const cartSubmission = document.querySelector(".product-cart");

const countBadge = document.querySelector("#count-badge");

let badgeCount = 0;
let quantityArray = [];

cartSubmission.addEventListener("submit", function (event) {
  event.preventDefault();
  const quantity = document.getElementById("product-quantity").value;
  quantityArray.push(quantity);
  sessionStorage.setItem("quantityArray", JSON.stringify(quantityArray));
  badgeCount++;
  sessionStorage.setItem("count", badgeCount);
  countBadge.innerHTML = badgeCount;
  countBadge.style.display = "inline";
});
