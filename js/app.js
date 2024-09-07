const script = document.createElement('script');
script.src = 'https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/7.2.0/mdb.umd.min.js';
document.head.appendChild(script);


import { headerComponent } from "./components/header.js";
import { footerComponent } from "./components/footer.js";
import { carouselComponent } from "./components/carousel.js";


document.getElementById('header').innerHTML = headerComponent;
document.getElementById('footer').innerHTML = footerComponent;


const currentPage = document.body.getAttribute('data-page');
if(currentPage === "index")
{
    document.getElementById('carousel').innerHTML = carouselComponent;

}



