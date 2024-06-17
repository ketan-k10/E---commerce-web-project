const footerHTML = `
<footer class="section-footer">
<div class="footer-container container">
  <div class="content_1">
    <img src="./public/images/logosss.png" alt="logo" />
    <p>
      Welcome to Smart Sphere, your ultimate destination for cutting-edge gadgets!
    </p>
    <img src="https://i.postimg.cc/Nj9dgJ98/cards.png" alt="cards" />
  </div>
  <div class="content_2">
    <h4>SHOPPING</h4>
    <a href="#">Smartphones</a>
    <a href="#">Smart Home</a>
    <a href="#">Accessories</a>
    <a href="#">Sales & Offers</a>
  </div>
  <div class="content_3">
    <h4>Experience</h4>
    <a href="./contact.html">Contact Us</a>
    <a href="#" target="_blank">Payment Methods</a>
    <a href="#" target="_blank">Delivery</a>
    <a href="#" target="_blank">Returns and Exchanges</a>
  </div>
  <div class="content_4">
    <h4>NEWSLETTER</h4>
    <p>Be the first to know about new arrivals, sales & promos!</p>
    <div class="f-mail">
      <input type="email" placeholder="Your Email" />
      <i class="bx bx-envelope"></i>
    </div>
    <hr />
  </div>
</div>
</footer>`;

const footerElem = document.querySelector(".section-footer");
footerElem.insertAdjacentHTML("afterbegin", footerHTML);
