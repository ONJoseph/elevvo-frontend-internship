const products = [

{
id:1,
name:"Wireless Headphones",
price:99,
image:"https://picsum.photos/300?1"
},

{
id:2,
name:"Smart Watch",
price:149,
image:"https://picsum.photos/300?2"
},

{
id:3,
name:"Bluetooth Speaker",
price:79,
image:"https://picsum.photos/300?3"
},

{
id:4,
name:"Gaming Mouse",
price:59,
image:"https://picsum.photos/300?4"
}

];

let cart = JSON.parse(localStorage.getItem("cart")) || [];

const productList = document.getElementById("productList");
const cartItems = document.getElementById("cartItems");
const cartCount = document.getElementById("cartCount");


function saveCart(){
localStorage.setItem("cart", JSON.stringify(cart));
}


function renderProducts(){

productList.innerHTML="";

products.forEach(product=>{

const col=document.createElement("div");

col.className="col-md-3 mb-4";

col.innerHTML=`

<div class="card">

<img src="${product.image}" class="card-img-top">

<div class="card-body">

<h5>${product.name}</h5>

<p>$${product.price}</p>

<button class="btn btn-primary w-100"
onclick="addToCart(${product.id})">

Add to Cart

</button>

</div>

</div>

`;

productList.appendChild(col);

});

}


function addToCart(id){

const product = products.find(p=>p.id===id);

cart.push(product);

saveCart();

renderCart();

}


function removeFromCart(index){

cart.splice(index,1);

saveCart();

renderCart();

}


function renderCart(){

cartItems.innerHTML="";

cart.forEach((item,index)=>{

const li=document.createElement("li");

li.className="list-group-item";

li.innerHTML=`

${item.name} - $${item.price}

<button class="btn btn-sm btn-danger"
onclick="removeFromCart(${index})">

Remove

</button>

`;

cartItems.appendChild(li);

});

cartCount.textContent = cart.length;

}


renderProducts();
renderCart();
