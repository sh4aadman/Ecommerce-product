const quantity = document.getElementById("quantity");

const total = document.getElementById("total");

function checkQuantity() {
  const quantityArrayStr = sessionStorage.getItem("quantityArray");
  if (quantityArrayStr) {
    const quantityArray = JSON.parse(quantityArrayStr);
    if (quantityArray.length > 0) {
      const count = quantityArray[quantityArray.length - 1].quantity;
      quantity.innerText = count;
      total.innerText = `$${count * 125.0}.00`;
    }
  }
}

setInterval(() => {
  checkQuantity();
}, 1000);
