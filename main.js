//Cambio de cantidad de articulos ingresado por el usuario

let minuBtn = document.querySelector('.input--minus')
let numberText = document.querySelector('.input--number')
let plusBtn = document.querySelector('.input--plus')
let UserInputNumber = 0;

plusBtn.addEventListener('click', ()=>{
    UserInputNumber ++
    numberText.value = UserInputNumber;
})

minuBtn.addEventListener('click', ()=>{
    UserInputNumber --
    if(UserInputNumber <=0){
        UserInputNumber = 0;
        
    }
    numberText.value = UserInputNumber;
})

//Agregar el total de articulos al carrito al oprimir el boton de add to cart

const AddToCartBtn = document.querySelector('.details--button')
let cartNotification = document.querySelector('.header--cart--notification')
let lastValue = parseInt(cartNotification.innerText) 

AddToCartBtn.addEventListener('click', ()=> {
    
    lastValue = lastValue + UserInputNumber;
    cartNotification.innerText = lastValue;
    cartNotification.style.display = 'block';
    UserInputNumber = 0;
    numberText.value = UserInputNumber;
    drawProductInModal();
   
})

//Mostrar en el carrito los articulos agregador
const cartDescription = document.querySelector('.header--cart')
const cartDescriptionArticles = document.querySelector('.cart-modal')
const emptyCart = document.querySelector('.cart-modal--checkout-container')

cartDescription.addEventListener('click', ()=>{    
    cartDescriptionArticles.classList.toggle('show')
    if(lastValue === 0){
        emptyCart.innerHTML = `<p class= "cart-empty">Your cart is empty</p>`
     }else{
        drawProductInModal()
     }    
})

//Borrar los articulos del carrito de compras
function deleteProduct(){
    const deleteCart = document.querySelector('.cart-modal--delete')
    deleteCart.addEventListener('click', ()=>{
        emptyCart.innerHTML = `<p class= "cart-empty">Your cart is empty</p>`
        lastValue = 0;
        cartNotification.innerText = lastValue;
    })
}

//Cambiar Imagenes cuando se presione los botones flecha
const imageContainer = document.querySelector('.gallery--image-container')
const galleryNextButton = document.querySelector('.gallery--next')
const galleryPrevButton = document.querySelector('.gallery--previus')
let imgIndex = 1;

galleryNextButton.addEventListener('click', () =>{
    changeNextImage(imageContainer)
})

galleryPrevButton.addEventListener('click', () =>{
    changePreviusImage(imageContainer)
})

//Mostrar Modal Navbar
const iconMenuNavbar = document.querySelector('.header--menu')
const iconCloseModalNavbar = document.querySelector('.modal-navbar--close')
const menuModalNavbar = document.querySelector('.modal-navbar--background')

iconMenuNavbar.addEventListener('click', ()=>{
    menuModalNavbar.style.display = 'block'
})

menuModalNavbar.addEventListener('click', ()=>{
    menuModalNavbar.style.display = 'none'
})


//Mostrar el modal de imagenes cuando click en la imagen principal
const imagesModal = document.querySelector('.modal-gallery--background')
const iconCloseModal = document.querySelector('.modal-gallery--close-container')

imageContainer.addEventListener('click',()=>{
    imagesModal.style.display = 'grid';
})

iconCloseModal.addEventListener('click', ()=>{
    imagesModal.style.display = 'none';
})

//Cambiar las imagenes principales desde los thumbnails
let galleryThumbnails = document.querySelectorAll('.gallery--thumbnail');
galleryThumbnails =[...galleryThumbnails];

galleryThumbnails.forEach(thumbnail =>{
    thumbnail.addEventListener('click', event=>{
        imageContainer.style.backgroundImage = `url('../images/image-product-${event.target.id}.jpg')`
    })
})

//Cambiar las imagenes principales desde los thumbnails en el Modal
let thumbnailsModal = document.querySelectorAll('.modal-gallery--thumbnail');
let modalImageContainer = document.querySelector('.modal-gallery--image-container');
thumbnailsModal = [...thumbnailsModal];

thumbnailsModal.forEach(thumbnailsModal =>
    thumbnailsModal.addEventListener('click',event =>{
    modalImageContainer.style.backgroundImage = `url('../images/image-product-${event.target.id.slice(-1)}.jpg')`
})
)

//Cambiar las imagen principal con las flechas desde los thumbnails en el Modal
const previustModalbtn = document.querySelector('.modal-gallery--image-next')
const nextModalbtn = document.querySelector('.modal-gallery--image-previus')

nextModalbtn.addEventListener('click', () =>{
    changeNextImage(modalImageContainer)
})

previustModalbtn.addEventListener('click', () =>{
    changePreviusImage(modalImageContainer)
})

//Funciones

function drawProductInModal(){
    emptyCart.innerHTML = `
    <div class="cart-modal--details-container">
        <img class="cart-modal--image-product"
        src="./images/image-product-1-thumbnail.jpg" alt="">
    <div>
      <p class="cart-modal--product">Autumn Limited Edtion..</p>
      <p class="cart-modal--price">$125.000 x 3 <span>$375.000</span></p>
    </div>
        <img
        class="cart-modal--delete"
        src="./images/icon-delete.svg"
        alt="delete"
    />
  </div>
  <button class="cart-modal--checkout">Checkout</button>`
  deleteProduct();
  let priceModal = document.querySelector('.cart-modal--price')
  priceModal.innerHTML = `$125.000 x ${lastValue} <span>$${lastValue*125}.000</span>`
}

function changeNextImage(imgcontainer){
    if(imgIndex === 4){
        imgIndex = 1;
    }else{
        imgIndex ++;
    }
    imgcontainer.style.backgroundImage = `url('../images/image-product-${imgIndex}.jpg')`
}

function changePreviusImage(imgcontainer){
    if(imgIndex === 1){
        imgIndex = 4;
    }else{
        imgIndex --;
    }
    imgcontainer.style.backgroundImage = `url('../images/image-product-${imgIndex}.jpg')`
}