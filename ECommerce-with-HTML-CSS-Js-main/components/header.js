
class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <section id="header">
      <a href="index.html"><img src="./img/logo.png" class="logo" alt="logo" /></a>

      <div>
        <ul id="navbar">
          <li><a class="active" href="index.html">Home</a></li>
          <li><a href="shop.html">Shop</a></li>
          <li><a href="blog.html">Blog</a></li>
          <li><a href="about.html">About</a></li>
          <li><a href="contact.html">Contact</a></li>
          <li id="lg-bag">
            <a href="cart.html"><i class="fi fi-rr-shopping-bag"></i></a>
          </li>
          <a href="#" id="close"><i class="fas fa-times"></i></a>
        </ul>
      </div>
      <div id="mobile">
        <a href="cart.html">
          <i class="fi fi-rr-shopping-bag"></i>
        </a>
        <i id="bar" class="fas fa-outdent"></i>
      </div>
    </section>
    `;
  }
}

customElements.define('header-component', Header);