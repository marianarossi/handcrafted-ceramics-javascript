// passar 3 parametros na constante, puxar 3 imagens json imagens
export const carouselComponent = 
`
<div class="carousel-indicators">
        <button type="button" data-mdb-target="#carousel" data-mdb-slide-to="0" class="active"
          aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-mdb-target="#carousel" data-mdb-slide-to="1"
          aria-label="Slide 2"></button>
        <button type="button" data-mdb-target="#carousel" data-mdb-slide-to="2"
          aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="./img/wheel.jpg" class="d-block w-100" alt="Ceramic Wheel Forming" />
        </div>
        <div class="carousel-item">
          <img src="./img/ceramiccollection.jpg" class="d-block w-100" alt="Ceramic collection of various pots" />
        </div>
        <div class="carousel-item">
          <img src="./img/glaze.jpg" class="d-block w-100" alt="Ceramic pots with various glaze colours" />
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-mdb-target="#carousel"
        data-mdb-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-mdb-target="#carousel"
        data-mdb-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
`