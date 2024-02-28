// localStorage.setItem("std1","shaimaa")
// console.log(localStorage.getItem("std1"))
// localStorage.setItem("student2" , "ahmed")
// console.log(localStorage.getItem("student2"))
// localStorage.removeItem("student2")
// localStorage.clear()

// // ///////////////////////////////////////////////////////////////////////////////////
let userInfo = document.querySelector ("#user_info")
let userD = document.querySelector ("#user")
let links = document.querySelector ("#links")
let logoutBtn =document.querySelector("#log-out")

// لو فيه username:
if (localStorage.getItem("username")){
    links.remove()
    userInfo.style.display ="flex"
    userD.innerHTML = localStorage.getItem("username")}
    
logoutBtn.addEventListener("click",function(){
    localStorage.clear()
    setTimeout(()=>{
        window.location ="login.html";
    },1500)
})
// /////////////////////////////////////////////////////////////////////////////////////
let allProducts=document.querySelector(".products")
let products =[
    {
        id:1,
        title:"chocolate cub cake",
        p:"6 pecies of cub cake",
        span:'20$',
        imageUrl:"images/images (1).jpg"
    },
    {
        id:2,
        title:"chocolate molten cake",
        p:"1 pecies with cub icecream ",
        span:'25$',
        imageUrl:"images/images.jpg"
    },
    {
        id:3,
        title:"chocolate makron cake",
        p:"6 pecies  makron cake",
        span:'40$',
        imageUrl:"images/images (2).jpg"
    },
    {
        id:4,
        title:"biscuitese",
        p:"6 pecies of biscuitese",
        span:'20$',
        imageUrl:"images/images (3).jpg"
    },
]
function drawItems(){
     let y =products.map((iteam)=>{
        return `
        <div class="product-item">
        <img class="product-item-img" src="${iteam.imageUrl} ">
        <div class="discribtion">
            <h2>${iteam.title}</h2>
            <p>${iteam.p}</p>
            <span>${iteam.span}</span>
        </div>
        <div class="action">
            <button class="Add-to-cart" onclick="addToCart(${iteam.id})">Add to cart</button>
            <i class="far fa-heart fav"></i>
        </div>
        </div>`
     })
     allProducts.innerHTML = y;
}
drawItems ()
// ////////////////////////////////////////
let cartProductDiv = document.querySelector(".carts_product div")
let badge =document.querySelector(".badge")

let addedItem = localStorage.getItem("ProductsInCart") ? JSON.parse(localStorage.getItem("ProductsInCart")) : [];

if(addedItem) {
    addedItem.map(item => {
        cartProductDiv.innerHTML += `<p>${item.title}</p>`;
    })
    badge.style.display = "block";
    badge.innerHTML = addedItem.length;
}
// if (addedItem){addedItem.map(item=>{
//     cartProductDiv.innerHTML += `<p>${item.title}</p>`})
//     badge.style.display="block"
//    badge.innerHTML= cartsProductsLength.length}

 if(localStorage.getItem=("username")){
    function addToCart(id){
        let choosenItem = products.find((item) => item.id === id ); 
        cartProductDiv.innerHTML += `<p>${choosenItem.title}</p>`

        addedItem=[...addedItem, choosenItem]
        localStorage.setItem("productInCarts",JSON.stringify(addedItem))
        let cartsProductsLength =document.querySelectorAll(".carts_product div p")
        // console.log(cartsProductsLength.length)
        badge.style.display="block"
        badge.innerHTML= cartsProductsLength.length}
  }else {
       window.location ="login.html" } 
       

// // ////////////////////////////////////
let shoppingCartIcon = document.querySelector(".cart")
let cartsProducts = document.querySelector(".carts_product")
shoppingCartIcon.addEventListener("click", opencart)

function opencart(){
     if(cartProductDiv.innerHTML !=""){
         if(cartsProducts.style.display=="block"){
            cartsProducts.style.display="none"
         }else {
            cartsProducts.style.display="block"
         }
     } 
}




   





// // login   sign up + save data in local storage 
// // products // add products to cart // add some products fav and delete
// // add 1 or more products 
// // user without login can see only the products 
