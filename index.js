let productList = document.querySelector(".product-list");


let products = [
    {
        img: "https://currenwatches.com.pk/cdn/shop/products/S7d2e9b2df5eb48be959dad1f4655b5e5S_1445x.jpg?v=1713332874",
        Name: "Primium watch",
        price: 2559
    },
    {
        img: "https://saamaan.pk/cdn/shop/products/Comet-Infinity-Smartwatch.jpg?v=1671009969",
        Name: "sale watch",
        price: 1499
    },
    {
        img: "https://st.depositphotos.com/2288675/2450/i/450/depositphotos_24503275-stock-photo-gold-pocket-watch-and-hourglass.jpg",
        Name: "vip watch",
        price: 5099
    }
]



let productDisplay = () => {
    productList.innerHTML = ""
    products.map((product, i) => {
        productList.innerHTML += `<div class="innerDiv"><img src=${product.img} alt="image1">
        <h2>${product.Name}</h2>
        <p>${product.price}</p>
        <button onclick="addToCart(${i})">Add to Car</button>
        </div>`
        // console.log(product);
    })
}

productDisplay();


let cart = [];
function addToCart(index) {
    let productInCart = cart.find(item => item.Name === products[index].Name);
    if (!productInCart) {
        let productClone = { ...products[index], }
        productClone.qty = 1;
        productClone.total = productClone.qty * productClone.price;
        cart.push(productClone);
    } else {
        productInCart.qty += 1;
        productInCart.total = productInCart.qty * productInCart.price
        products[index].price + products[index].price;
        alert("Quantity Updated")
    }
    console.log(cart);
}