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



function productDisplay () {
    productList.innerHTML = ""
    products.map((product, i) => {
        productList.innerHTML += `<div class="innerDiv"><img src=${product.img} alt="image1">
        <h2>${product.Name}</h2>
        <p>${product.price}</p>
        <button>Add to Cart</button>
        </div>`
        console.log(product);
    })
}

productDisplay()