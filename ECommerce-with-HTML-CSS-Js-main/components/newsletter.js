class Newsletter extends HTMLElement {
  constructor() {
    super()
  }

  connectedCallback() {
    this.innerHTML = `
    <section id="newsletter" class="section-m1 section-p1">
    <div class="newstext">
      <h4>Sign up For Newsletters</h4>
      <p>Get E-mail updates about our latest shop and <span>special offers.</span></p>
    </div>
    <div class="form">
      <input type="email" placeholder="Your email address" />
      <button class="normal">Sign up</button>
    </div>
  </section>
    `;
  }
}

customElements.define('newsletter-component', Newsletter);