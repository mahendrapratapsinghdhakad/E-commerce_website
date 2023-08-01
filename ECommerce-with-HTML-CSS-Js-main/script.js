const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const close = document.getElementById("close");

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}
if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  })
}

const path = window.location.pathname.split('/').pop();
const navbar = document.getElementById("navbar");

const prevActive = navbar.querySelector(".active");
if (prevActive) {
  prevActive.classList.remove("active");
}

if (path === "shop.html" || path === "sproduct.html") {
  const shopLink = navbar.querySelector("a[href='shop.html']");
  shopLink.classList.add("active");
} else {
  const current = navbar.querySelector(`a[href='${path}']`);
  if (current) {
    current.classList.add("active");
  }
}

const products = document.getElementById('product1');
if (products) {
  products.addEventListener('click', () => {
    window.location.href = 'sproduct.html';
  })
}
    
