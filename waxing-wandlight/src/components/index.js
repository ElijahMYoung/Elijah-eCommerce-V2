function Home() {
  return (
    <div className="Home">
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
      <section class="slider">
        <div class="slides">
          <div class="slide active">
            <img src="Images/Slider0.jpg" alt="a wand on a book" />
          </div>
          <div class="slide">
            <img src="Images/Slider1.jpg" alt="a wand on a book" />
          </div>
          <div class="slide">
            <img src="Images/Slider2.jpg" alt="a wand on a book" />
          </div>
          <div class="slide">
            <img src="Images/Slider3.jpg" alt="a wand on a book" />
          </div>
          <div class="slide">
            <img src="Images/Slider4.jpg" alt="a wand on a book" />
          </div>
          <div class="slide-manual">
            <div class="btn active"></div>
            <div class="btn"></div>
            <div class="btn"></div>
            <div class="btn"></div>
            <div class="btn"></div>
          </div>
        </div>
      </section>
      <div class="paragraph-container">
        <p>
          Waxing Wandlight consists of the world's greatest wand makers. We put
          time and care into each of our works, guaranteeing our customers
          unique and powerful wands.
        </p>
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

export default Home;
