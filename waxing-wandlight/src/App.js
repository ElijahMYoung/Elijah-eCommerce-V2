import "./App.css";
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import "./css/Home.css";
import Home from "./pages";
import Products from "./pages/products";
import Contact from "./pages/contact";
function App() {
  return (
    <BrowserRouter>
      <header>
        <nav className="nav">
          <NavLink to="/">
            <img src="Images/Waxing_Wandlight.png" alt="Logo" class="logo" />
          </NavLink>
          <div class="nav-links" id="navLinks">
            <img
              src="Images/black-circle-close-button-png-5.png"
              alt="circle close button icon"
              class="sidebtn"
              onclick="hideMenu()"
            />
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <NavLink to="products">Products</NavLink>
              </li>
              <li>
                <NavLink to="contact">Contact</NavLink>
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
      <main>
        <Routes>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
