class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `

  <footer class="section-p1">
  <div class="col-container">
  <div class="col">
    <img class="logo" src="img/logo.png" alt="" />
    <h4>Contact</h4>
    <p><strong>Address: </strong>Link Road Number 3, Near Kali Mata Mandir, Bhopal, Madhya Pradesh, India 462003</p>
    <p><strong>Phone: </strong>+91 755 4051000, 4052000</p>
    <p><strong>Hours: </strong>09:00 - 17:00, Monday - Friday</p>
    <div class="follow">
      <h4>Follow us</h4>
      <div class="icon">
        <i class="fab fa-facebook-f"></i>
        <i class="fab fa-twitter"></i>
        <i class="fab fa-instagram"></i>
        <i class="fab fa-pinterest-p"></i>
        <i class="fab fa-youtube"></i>
      </div>
    </div>
  </div>

  <div class="col">
    <h4>About</h4>
    <a href="#">About us</a>
    <a href="#">Delivery information</a>
    <a href="#">Privacy Policy</a>
    <a href="#">Terms & Conditions</a>
    <a href="#">Contact us</a>
  </div>

  <div class="col">
    <h4>My Account</h4>
    <a href="#">Sign In</a>
    <a href="#">View Cart</a>
    <a href="#">My Wishlist</a>
    <a href="#">Track My Orders</a>
    <a href="#">Help</a>
  </div>

  <div class="col install">
    <h4>Install App</h4>
    <p>From App Store or Google Play</p>
    <div class="row">
      <img src="img/pay/app.jpg" alt="">
      <img src="img/pay/play.jpg" alt="">
    </div>
    <p>Secured Payment Gateways</p>
    <img src="img/pay/pay.png" alt="">
  </div>
</div>
  <div class="copyright">
    <p>© 2023, 201112211 - HTML CSS JS ECommerce Frontend Website</p>
  </div>
</footer>
`;
  }
}

customElements.define("footer-component", Footer);
