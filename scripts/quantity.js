const productCount = document.querySelector("#product-quantity");

const countDecrementBtn = document.querySelector("#decrement-button");

const countIncrementBtn = document.querySelector("#increment-button");

countDecrementBtn.addEventListener("click", function (event) {
  event.preventDefault();
  let count = productCount.value;
  let countInt = parseInt(count);
  countInt--;
  if (countInt <= 1) {
    countInt = 1;
    countDecrementBtn.disabled = true;
  }
  productCount.value = countInt;
  countDecrementBtn.disabled = false;
});

countIncrementBtn.addEventListener("click", function (event) {
  event.preventDefault();
  let count = productCount.value;
  let countInt = parseInt(count);
  countInt++;
  productCount.value = countInt;
});
