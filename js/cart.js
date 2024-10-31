
const product = [
    {    
        id: 0,    
        image: 'img/shirt1.png',    
        title: 'T-shert',    
        price: 120,
    },
    {
        id: 1,
        image: 'img/shirt2.png',
        title: 'T-shert Az',
        price: 124, 
    },
    {
        id: 2,
        image: 'img/shirt3.png',
        title: 'Camizola',
        price: 100,
    },
    {
        id: 3,
        image: 'img/vizcaya-essence-care-mascara-de-hidratacao.jpg',
        title: 'mascara de hidratacao',
        price: 700,
    },
    {
        id: 4,
        image: 'img/tenis-adidas.jpg',
        title: 'Tenis Adidas',
        price: 10000,
    },
    {
        id: 5,
        image: 'img/pomada.jpg',
        title: 'Pomada',
        price: 250,
    },
    {
        id: 6,
        image: 'img/cap-NY.png',
        title: 'Chapeu NY',
        price: 1500,
    },
    {
        id: 7,
        image: 'img/pasta-sch.png',
        title: 'Pasta Sch',
        price: 2000,
    },
    {
        id: 8,
        image: 'img/glasses.png',
        title: 'glasses',
        price: 700,
    }
];
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price} = item;
    return(
        `<div class='box'>
        <div class='img-box'>
           <img class='images' src=${image}></img>
        </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>kz ${price}.00</h2>`+
        "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
        `</div>
        </div>`
    )
}).join('')

var cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(){
    let j = 0;
    let total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "carinha vazia";
        document.getElementById("total").innerHTML = "kz "+0+".00";
    }
    else {
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;
           document.getElementById("total").innerHTML = "kz "+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>kz ${price}.00</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
                        
        }).join('');
    }
}