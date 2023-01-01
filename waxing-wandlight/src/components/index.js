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
    </div>
  );
}

export default Home;
