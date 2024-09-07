export const headerComponent = 
`
<div class = "navbar navbar-expand-lg">
      <div class="container-fluid">
      
            <!-- Collapse Button -->
            <button data-mdb-collapse-init class="navbar-toggler" type="button" data-mdb-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <i class="fas fa-bars"></i>
            </button>
      
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
      
              <!-- Navbar brand logo -->
              <a class="navbar-brand mt-2 mt-lg-0" href="index.html">
                <img src="img/logo.png" height="50" alt="MDB Logo" loading="lazy" />
              </a>
              <div id = "product-links">
                <ul class="navbar-nav ms-lg-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                      <a class="nav-link" href="index.html#product-cards">Outdoor Vases</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="index.html#product-cards">Indoor Decoration</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="index.html#product-cards">Clay</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="index.html#product-cards">Art Material</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="index.html#product-cards">Plant Hangers</a>
                    </li>
                  </ul>
              </div>
      
              <!-- Right elements -->
              <div class="ms-auto d-flex flex-column flex-lg-row">
                <!-- Search button -->
                <div>
                  <form class="d-flex input-group w-auto">
                    <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search"
                      aria-describedby="search-addon" />
                </div>
                <!-- Left links -->
                <ul class="navbar-nav ms-lg-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link" href="index.html#aboutus">About us</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="login.html">Log in</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="register.html">Register for free</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="cart.html">Cart</a>
                  </li>
                </ul>
              </div>
              <!-- End/Right elements -->
             </div>
      </div>
</div>
`