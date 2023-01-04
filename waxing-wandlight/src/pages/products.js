import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/products");
        setProducts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="product">
      <div class="prod-container">
        <div id="data-output">
          <div class="prod-box">
            {products.map((product) => (
              <div class="prod-box">
                <div class="prod-image">
                  <img src={product.icon} alt="" />
                </div>
                <div class="prod-info">
                  <h3 class="prod-title">{product.item}</h3>
                  <div class="prod-desc">
                    <div class="description">{product.description}</div>
                  </div>
                  <div class="subInfo">
                    <div class="price">{product.price}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
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
            {" "}
          </a>
          <a
            href="https://www.instagram.com"
            aria-label="Instagram"
            class="fa fa-instagram"
          >
            {" "}
          </a>
          <a
            href="https://www.snapchat.com"
            aria-label="Snapchat"
            class="fa fa-snapchat-ghost"
          >
            {" "}
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
