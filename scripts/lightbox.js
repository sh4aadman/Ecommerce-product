const productImage = document.querySelector("#main-image");

const productLightbox = document.querySelector(".light-box");

const lightboxImage = document.querySelector("#lightbox-image");

const lightboxCloseBtn = document.querySelector(".close-button");

const productThumbnailMain = document.querySelectorAll(".product-thumbnail-m");

const productThumbnailLightbox = document.querySelectorAll(
  ".product-thumbnail-light"
);

const previousBtn = document.querySelector("#previous-thumbnail");
const nextBtn = document.querySelector("#next-thumbnail");

productImage.addEventListener("click", function () {
  productLightbox.style.display = "block";
  lightboxImage.src = productImage.src;
  lightboxImage.alt = productImage.alt;
});

const changeMainImage = (x) => {
  x.addEventListener("click", function () {
    productImage.setAttribute("src", `./images/image-${x.alt}.jpg`);
    productImage.setAttribute("alt", `${x.alt}`);
  });
};

lightboxCloseBtn.addEventListener("click", function () {
  productLightbox.style.display = "none";
});

const changeLightboxImage = (x) => {
  x.addEventListener("click", function () {
    lightboxImage.setAttribute("src", `./images/image-${x.alt}.jpg`);
    lightboxImage.setAttribute("alt", `${x.alt}`);
  });
};

productThumbnailMain.forEach(changeMainImage);
productThumbnailLightbox.forEach(changeLightboxImage);

previousBtn.addEventListener("click", function () {
  let imgNumber = lightboxImage.alt.slice(-1);
  let imgInt = parseInt(imgNumber);
  imgInt--;
  if (imgInt <= 0) {
    imgInt = 4;
  }
  lightboxImage.setAttribute("src", `./images/image-product-${imgInt}.jpg`);
  lightboxImage.setAttribute("alt", `product-${imgInt}`);
});

nextBtn.addEventListener("click", function () {
  let imgNumber = lightboxImage.alt.slice(-1);
  let imgInt = parseInt(imgNumber);
  imgInt++;
  if (imgInt > 4) {
    imgInt = 1;
  }
  lightboxImage.setAttribute("src", `./images/image-product-${imgInt}.jpg`);
  lightboxImage.setAttribute("alt", `product-${imgInt}`);
});