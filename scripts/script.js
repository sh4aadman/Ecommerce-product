const cart = document.querySelector("#product-cart");

const modal = document.querySelector("#cart-modal");

const badge = document.querySelector("#count-badge");
let badgeInt = parseInt(badge.textContent);

const lightbox = document.querySelector(".light-box");

const lightboxCloseBtn = document.querySelector(".close-button");

const productImage = document.querySelector(".product-image");

const form = document.querySelector(".product-cart");

const count = document.querySelector("#product-quantity");
let countInt = parseInt(count.value);

const button = document.querySelector(".primary-button");

const incrementBtn = document.querySelector("#increment-button");

const decrementBtn = document.querySelector("#decrement-button");

const checkoutBtn = document.querySelector("#check-out");

productImage.addEventListener("click", () => {
    lightbox.style.display = "block";
});

lightboxCloseBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
});

cart.addEventListener("click", () => {
    modal.style.display = "block"
});

cart.addEventListener("mouseover", () => {
    modal.style.display = "block";
    setTimeout(() => {
        modal.style.display = "none";
    }, 10000);
});

cart.addEventListener("mouseout", () => {
    modal.style.display = "none";
});

form.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("submitted!");
    console.log(count.value);
    badgeInt++;
    badge.textContent = badgeInt;
    if (badgeInt > 0) {
        badge.style.display = "block";
    }
});

incrementBtn.addEventListener("click", (event) => {
    event.preventDefault();
    countInt++;
    count.value = countInt;
    decrementBtn.disabled = false;
});

decrementBtn.addEventListener("click", (event) => {
    event.preventDefault();
    countInt--;
    if (countInt <= 0) {
        countInt = 0;
        decrementBtn.disabled = true;
    }
    count.value = countInt;
});

checkoutBtn.addEventListener("click", () => {
    location.href = "index.html";
})