function Products() {
  return (
    <div className="product">
      <header class="header">
        <nav class="nav">
          <a href="index.html">
            <img src="Images/Waxing_Wandlight.png" alt="Logo" class="logo" />
          </a>
          <div class="nav-links" id="navLinks">
            <img
              src="Images/black-circle-close-button-png-5.png"
              alt="circle close button icon"
              class="sidebtn"
              onclick="hideMenu()"
            />
            <ul>
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>
                <a href="products.html">Products</a>
              </li>
              <li>
                <a href="contact.html">Contact Us</a>
              </li>
            </ul>
          </div>
          <img
            src="Images/menu_icon.png"
            alt="menu bars icon"
            class="sidebtn"
            onclick="showMenu()"
          />
        </nav>
        <h1>Waxing Wandlight</h1>
      </header>

      <div class="prod-container">
        <div id="data-output"></div>
      </div>

      <footer class="footer-distributed">
        <div class="footer-right">
          <a
            href="https://www.facebook.com"
            aria-label="Facebook"
            class="fa fa-facebook"
          >
            .
          </a>
          <a
            href="https://twitter.com"
            aria-label="Twitter"
            class="fa fa-twitter"
          >
            .
          </a>
          <a
            href="https://www.instagram.com"
            aria-label="Instagram"
            class="fa fa-instagram"
          >
            .
          </a>
          <a
            href="https://www.snapchat.com"
            aria-label="Snapchat"
            class="fa fa-snapchat-ghost"
          >
            .
          </a>
        </div>
        <div class="footer-left">
          <p class="footer-links">
            <a class="link-1" href="index.html">
              Home
            </a>
            <a href="products.html">Products</a>
            <a href="contact.html">Contact Us</a>
          </p>
          <p>Waxing Wandlight &copy; 2022</p>
        </div>
      </footer>
    </div>
  );
}

export default Products;
