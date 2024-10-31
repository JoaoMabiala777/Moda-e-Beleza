let shop = document.querySelector('#shop-cart');
let shopcart = document.querySelector('.shopping-cart');
let menubar = document.querySelector('#menu-bar');
let mynav = document.querySelector('.navbar');
let searchbar = document.querySelector('#search-bar');
let searchbox = document.querySelector('.search-box');

shop.onclick = () =>{
    shopcart.classList.toggle('active');
}
menubar.onclick = () =>{
    mynav.classList.toggle('active');
}
searchbar.onclick = () =>{
    searchbox.classList.toggle('active')
}
