let searchbar = document.querySelector('#search-bar');
let searchbox = document.querySelector('.search-box');
let menubar = document.querySelector('#menu-bar');
let mynav = document.querySelector('.navbar');


menubar.onclick = () =>{
    mynav.classList.toggle('active');
}
searchbar.onclick = () =>{
    searchbox.classList.toggle('active')
}




