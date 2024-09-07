const loadProducts = async () =>
{
    try
    {
        const response = await fetch('../data/products.json');
        const products = await response.json();
        return products;
    }
    catch(error)
    {
        console.error("An error occured while loading the products", error);
    }
}

async function showProducts()
{
    const productsContainer = document.getElementById('product-cards');
    const productsArray = await loadProducts();

    productsArray.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('col');
        productCard.innerHTML =
        `
          <div class="card h-100">
            <img src="./img/${product.img}" class="card-img-top" alt=""/>
            <a data-id = "${product.id}" id = "showProductPage" class="card-body" href="product.html">
              <h5 data-id = "${product.id}" class="card-title">${product.title}</h5>
              <p data-id = "${product.id}" class="card-text">${product.text}</p>
            </a>
            <div class="card-footer d-flex justify-content-between flex-column flex-lg-row">
              <div class = "d-flex bg-transparent align-items-end">
                <s class="text-muted bg-transparent me-2">${product.price}</s>
                <strong class="bg-transparent">${product.installment}</strong>
              </div>
              <button data-id ="${product.id}" id = "btAdd" type="button" class="btn btn-sm btn-dark btn-outline-success" data-mdb-ripple-init data-mdb-ripple-color="dark" href="cart.html">buy now</button>
            </div>
          </div>`;
          productCard.querySelector('#btAdd').addEventListener('click', addItemCart);
          productCard.querySelector('#showProductPage').addEventListener('click', loadProduct);
        productsContainer.appendChild(productCard);
    });
    localStorage.setItem('products', JSON.stringify(productsArray))
}

window.onload = async () =>
{
    try
    {
        showProducts();
    }
    catch(error)
    {
        console.error("An error occured while loading the products on window.onload", error);

    }
}

function addItemCart(e)
{
  const productId = e.target.getAttribute('data-id');
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const products = JSON.parse(localStorage.getItem('products'));
  const selectedItem = products.find(product => product.id === Number(productId));
  console.log(selectedItem);
  if(selectedItem)
  {
    if(cart.find(product => product.id === selectedItem.id))
    {
      alert('product already added to the cart');
    }
    else
    {
      cart.push(selectedItem);
      localStorage.setItem('cart', JSON.stringify(cart));
      alert('product added to the cart');
  
    }
  }
  else
  {
    alert('product not found');
  }
}

//pagina do produto
function loadProduct(e)
{
  e.preventDefault(); 

  const target = e.currentTarget;
  const productId = e.target.getAttribute('data-id');

   // Store the productId in localStorage to be used in product.html
   localStorage.setItem('selectedProductId', productId);
   window.location.href = 'product.html';

}

document.addEventListener('DOMContentLoaded', () => {
  const currentPage = document.body.getAttribute('data-page');
if(window.location.pathname.endsWith('product.html')) //se esta na pag produto
{
  const productId = localStorage.getItem('selectedProductId');
  const products = JSON.parse(localStorage.getItem('products'));
  const selectedItem = products.find(product => product.id === Number(productId));
  
  const productsContainer = document.querySelector('.productpage');
  productsContainer.innerHTML = `
    <div class="w-50 display-flex content-center">
      <div class="productgallery">
        <img id = "mainImage" class="productimage" src="img/${selectedItem.img}" alt="">
        <div class="minigallery">
          <img class="miniphoto" src="img/${selectedItem.img}" alt="">
          <img class="miniphoto" src="img/ParaisoPlanterinFosiilGrey.jpg" alt="">
          <img class="miniphoto" src="img/OrionPlanter-Setof2.jpg" alt="">
          <img class="miniphoto" src="img/Tela_Bowl_-_Set_of_3_in_Antico_Terra_Cotta.jpg" alt="">
        </div>
      </div>
    </div>
    <div class="w-50 content-center productinfodiv">
      <h2><strong>${selectedItem.title}</strong></h2>
      <p>${selectedItem.text}</p>
      <p><strong>Support Local Art</strong></p>
      <p><s>${selectedItem.price}</s>
            <strong>${selectedItem.installment}</strong></p>
      <button data-id ="${selectedItem.id}" id = "btAdd" href="cart.html" class="button">Adicionar ao carrinho</button>
    </div>`;
    productsContainer.querySelector('#btAdd').addEventListener('click', addItemCart);

  const productInfoTable = document.querySelector('.productinfo');
  productInfoTable.innerHTML = `
  <table class="table" --mdb-table-color:#F4F5EC >
          <thead class="thead">
              <tr>
                  <th><h2><strong>Product Description</strong></h2></th>
                  <th></th>
              </tr>
          </thead>
          <tbody>
            <tr>
              <th>Color</th>
              <th>${selectedItem.color}</th>
          </tr>
            <tr>
              <th>Height</th>
              <th>${selectedItem.height}</th>
          </tr>
          <tr>
            <th>Width</th>
            <th>${selectedItem.width}</th>
        </tr>
          <tr>
            <th>Recommended environment</th>
            <th>${selectedItem.recommended_environment}</th>
        </tr>
        <tr>
          <th>Recommended for plants</th>
          <th>${selectedItem.recommended_for_plants}</th>
      </tr>
          </tbody>
      </table>`

      const miniImages = document.querySelectorAll('.miniphoto');
      miniImages.forEach(miniImage => {
      miniImage.addEventListener('click', () => {
        changeImage(miniImage.src);
    }); 
  });
}});

// Changes main image
function changeImage(src) {
  document.getElementById('mainImage').src = src;
}


