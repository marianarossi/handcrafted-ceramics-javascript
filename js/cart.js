// jacob nielsen
//fazer uma parte da responsivide no css
//js do carrinho
//js do login/registro tem que salvar no localstorage
//validar formulario (campos obrigatorios)

async function loadCartFromLocalStorage()
{
    const cart = localStorage.getItem('cart');
    
    if(cart)
    {
      try
      {
          const parsedCart = JSON.parse(cart);
          return parsedCart;
      }catch(error)
      {
        console.error('Error ocurred while trying to parse cart from localstorage');
        return [];
      }
    } else
    {
      return [];
    }
    
}

function newProduct(product, subtotal) {
  const newProduct = `
  <div class="row mb-4 d-flex justify-content-between align-items-center">
    <div class="col-md-2 col-lg-2 col-xl-2">
      <img src="./img/${product.img}" class="img-fluid rounded-3" alt="Cotton T-shirt">
    </div>
    <div class="col-md-3 col-lg-3 col-xl-3">
      <h6 class="text-muted">$${product.price}</h6>
      <h6 class="mb-0">${product.title}</h6>
    </div>
    <div class="col-md-3 col-lg-3 col-xl-3 d-flex">
<button class="btn btn-link px-2" onclick="this.parentNode.querySelector('input[type=number]').stepDown(); this.parentNode.querySelector('input[type=number]').dispatchEvent(new Event('input'));">
  <i class="fas fa-minus"></i>
</button>
      <input data-id="${product.id}" min="1" name="quantity" value="${product.quantity}" type="number" class="form-control form-control-sm product-quantity" />
<button class="btn btn-link px-2" onclick="this.parentNode.querySelector('input[type=number]').stepUp(); this.parentNode.querySelector('input[type=number]').dispatchEvent(new Event('input'));">
  <i class="fas fa-plus"></i>
</button>
    </div>
    <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
      <h6 class="mb-0">$${subtotal.toFixed(2)}</h6>
    </div>
    <div class="col-md-1 col-lg-1 col-xl-1 text-end">
      <a href="#!" class="text-muted"><i data-id="${product.id}" id="productRemove" class="fas fa-times"></i></a>
    </div>
  </div>`;
  return newProduct;
}

let globalSubtotal = 0; // Store subtotal globally


async function showCart()
{
  const cart = await loadCartFromLocalStorage();
  const cartContainer = document.getElementById('shopping-cart');
  const subtotalElement = document.getElementById('subtotal');
  const totalElement = document.getElementById('total');
  const itemCountElement = document.getElementById('itemCount');
  cartContainer.innerHTML = '';
  let subtotal = 0;
  let total=0;
  let itemCount=0;

  cart.forEach(item => 
    {
      const subtotalItem = item.price * item.quantity;
      subtotal += subtotalItem;
      itemCount++;

      const element = document.createElement('div');
      element.innerHTML = newProduct(item, subtotalItem);
      cartContainer.appendChild(element);
  })
  globalSubtotal = subtotal;
  total = subtotal;
  itemCountElement.innerHTML = `<h6>${itemCount} items</h6>`
  subtotalElement.innerHTML = `<h5>$ ${subtotal.toFixed(2)}</h5>`
  totalElement.innerHTML = `<h5>$ ${total.toFixed(2)}</h5>`
  removeListener();
  quantityListener();
  shippingListener();
}

function updateTotal() {
  const shippingSelect = document.getElementById('shipping');
  const shippingCost = parseFloat(shippingSelect.value) || 0;

  let total = globalSubtotal + shippingCost; // Use globalSubtotal
  const totalElement = document.getElementById('total');

  totalElement.innerHTML = `<h5>$ ${total.toFixed(2)}</h5>`;
}

function shippingListener()
{
  document.getElementById('shipping').addEventListener('change', updateTotal);
}

async function removeItemFromCart(id)
{
  let cart = await loadCartFromLocalStorage();
  cart = cart.filter(item => item.id !== Number(id));
  localStorage.setItem('cart', JSON.stringify(cart));
  showCart();
}

function removeListener(e){
  document.querySelectorAll('#productRemove').forEach(a =>{
    a.addEventListener('click', async (e) => {
      const id = e.target.getAttribute('data-id');
      await removeItemFromCart(id);
  });
});
}

async function updateQuantity(id, newQuantity)
{
  let cart = await loadCartFromLocalStorage();

  cart = cart.filter(item =>
  {
    if(item.id === Number(id))
    {
      if(parseInt(newQuantity) <= 0)
      {
        return false;
      }
      item.quantity = parseInt(newQuantity);
    }
    return true;
  });
  localStorage.setItem('cart', JSON.stringify(cart));
  showCart();
  console.log("Updated Quantity:", newQuantity, "for Item ID:", id);

}

function quantityListener() {
  const inputs = document.querySelectorAll('input[type="number"].product-quantity');
  inputs.forEach(input => {
    // Using the 'input' event to capture any change in the quantity, change n funcionou
    input.addEventListener('input', async () => {
      const itemId = input.getAttribute('data-id');
      const newQuantity = input.value;
      console.log("Item ID:", itemId, "New Quantity:", newQuantity);
      await updateQuantity(itemId, newQuantity);
    });
  });
}


window.onload = async () =>
  {
      try
      {
          showCart();
      }
      catch(error)
      {
          console.error("An error occured while loading the products on window.onload", error);
  
      }
  }