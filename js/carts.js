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


let ProductsInCart = localStorage.getItem("productInCarts")
let allProducts = document.querySelector(".products")
if(ProductsInCart){
    let item = JSON.parse(ProductsInCart) ;
    drawCartProducts(item);
}
function  drawCartProducts(products){
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
           <button class="Add-to-cart" onclick="Removefromcart(${iteam.id})">Remove from cart</button>
       </div>
       </div>`
    })
    allProducts.innerHTML = y;
}


