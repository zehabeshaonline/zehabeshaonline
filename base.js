// Logo loader
document.querySelector("head").innerHTML += `
    <link rel="shortcut icon" href="./image/favicon.ico" type="image/x-icon" />
    <link rel="stylesheet" href="./fonts.css" />
    <link rel="stylesheet" href="./styles.css" />
`;

// Header and footer loader
const baseBodyContent = document.body.innerHTML;
let cartImageContent = "";

if (document.querySelector("title").innerHTML == "Zehabesha | Home") {
  cartImageContent = `
       <div class="cart-opener-image-container">
          <img src="./image/svg/cart2.svg" alt="Cart" />
        </div>
`;
}

document.body.innerHTML = `
    <header>
      <a href="./index.html" class="logo-link">
        <img src="./image/svg/logo-no-bg.svg" class="logo" alt="Logo" />
        Zehabesha
      </a>
      <nav>
        <a href="./index.html">Home</a>
        <a href="./about.html">About us</a>
        <a href="./contact.html">Contact us</a>
        ${cartImageContent}
      </nav>
    </header>

    ${baseBodyContent}


  <footer>
    <section class="first-footer-section">
      <a href="./index.html" class="footer-logo-link">
        <img src="./image/svg/logo-no-bg.svg" class="footer-logo" alt="Logo" />
      </a>
      <div class="main-links-container">
        <h2>Main Links</h2>
        <a href="./index.html">Home</a>
        <a href="./about.html">About</a>
        <a href="./contact.html">Contact</a>
      </div>

      <div class="other-links-container">
        <h2>Other Links</h2>
        <a href="./selling.html">Sell Items</a>
        <a href="./auction.html">Auction</a>
        <a href="./terms-and-conditions.html">Terms and conditions</a>
        <a href="./privacy-policy.html">Privacy Policy</a>
      </div>
    </section>
    <section class="second-footer-section">
      <hr />
      <p>
        @Zehabesha<br />
        2025 All rights reserved
      </p>
    </section>
  </footer>
`;
