// Creating link element in the head for css
let pageCSS = document.createElement("link");
pageCSS.rel = "stylesheet";
pageCSS.href = "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css";
document.head.appendChild(pageCSS);

// Creating the script element in the body for javascript
let pageJS = document.createElement("script");
pageJS.type = "text/javascript";
pageJS.src = "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js";
document.body.appendChild(pageJS);

// Get the page-root element
let pageRoot = document.getElementById("page-root");

// Creating the navbar element
let navbar = document.createElement("nav");
navbar.setAttribute("class", "navbar navbar-expand-lg navbar-dark bg-dark");
navbar.innerHTML = `<div class="container-fluid">
  <a class="navbar-brand" href="#">MyJavascriptPage</a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item">
        <a class="nav-link" aria-current="page" href="#">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">About</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Categories
        </a>
        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
          <li><a class="dropdown-item" href="#">Python</a></li>
          <li><a class="dropdown-item" href="#">JavaScript</a></li>
          <li><a class="dropdown-item" href="#">React</a></li>
        </ul>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Contact Me</a>
      </li>
    </ul>
    <form class="d-flex" action="https://www.google.com/search" method="get" target="_blank">
      <input class="form-control me-2" type="search" name="q" placeholder="Search" aria-label="Search">
      <button class="btn btn-danger" type="submit">Search</button>
    </form>
  </div>
</div>`;
pageRoot.appendChild(navbar);

// Creating the carousel (image slider) element
let carousel = document.createElement("div");
carousel.setAttribute("id", "carouselExampleIndicators");
carousel.setAttribute("class", "carousel slide");
carousel.setAttribute("data-bs-ride", "carousel");
carousel.innerHTML = `<div class="carousel-indicators">
<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
</div>
<div class="carousel-inner">
<div class="carousel-item active">
  <img src="./img/slider1.jpg" class="d-block w-100" alt="slider1.jpg">
</div>
<div class="carousel-item">
  <img src="./img/slider2.jpg" class="d-block w-100" alt="slider2.jpg">
</div>
<div class="carousel-item">
  <img src="./img/slider3.jpg" class="d-block w-100" alt="slider3.jpg">
</div>
</div>
<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
<span class="carousel-control-prev-icon" aria-hidden="true"></span>
<span class="visually-hidden">Previous</span>
</button>
<button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
<span class="carousel-control-next-icon" aria-hidden="true"></span>
<span class="visually-hidden">Next</span>
</button>`;
pageRoot.appendChild(carousel);

// Creating the contact me div
let contact = document.createElement("div");
contact.setAttribute("class", "container my-3");
contact.setAttribute("id", "contact-me");
contact.innerHTML = `<h2>Contact Me</h2>
<form>
<div class="mb-3">
    <label for="name">Name</label>
    <input type="text" class="form-control" id="name" name="name" placeholder="Enter your full name">
</div>
<div class="mb-3">
    <label for="email">Email Address</label>
    <input type="email" class="form-control" id="email" name="email" placeholder="Enter your email address">
</div>
<div class="mb-3">
    <label for="phone">Phone number (with country code)</label>
    <input type="text" class="form-control" id="phone" name="phone" placeholder="Enter your phone number">
</div>
<div class="mb-3">
    <label for="message">Message</label>
    <textarea class="form-control" id="message" name="message" rows="4" placeholder="Describe your concern here"></textarea>
</div>
<button class="btn btn-primary" type="button">Submit</button>
</form>`;
pageRoot.appendChild(contact);

// Creating the footer element
let footer = document.createElement("footer");
footer.setAttribute("class", "bg-dark text-white py-2 text-center");
let currentYear = new Date().getFullYear()
let nextYear = new Date().getFullYear() + 1
footer.innerHTML = `<p class="mb-0">Copyright &copy; MyJavascriptWebsite &bull; ${currentYear} - ${nextYear} &bull; All Rights Reserved`;
pageRoot.appendChild(footer);