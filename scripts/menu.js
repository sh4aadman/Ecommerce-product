const section = document.createElement("section");

const closeIcon = document.createElement("i");
closeIcon.classList.add("fa-solid", "fa-xmark", "mobile-icon");

const list = document.createElement("ul");

const logo = document.querySelector("#side-menu");

const body = document.getElementsByTagName("body");

const menuLinks = document.getElementsByClassName("menu-links");

for (let menuLink of menuLinks) {
  const li = document.createElement("li");
  const a = document.createElement("a");
  a.href = "#";
  a.textContent = menuLink.innerText;
  li.appendChild(a);
  list.appendChild(li);
}

list.classList.add("mobile-menu-display");
section.appendChild(closeIcon);
section.appendChild(list);
section.classList.add("mobile-menu");

logo.addEventListener("click", function () {
  body[0].appendChild(section);
});

closeIcon.addEventListener("click", function () {
    body[0].removeChild(section);
})
