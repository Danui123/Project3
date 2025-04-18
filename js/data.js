const products = [
    {
      name: "Running Shoes",
      price: 149.99,
      image: "assets-img/shoes.jpg"
    },
    {
      name: "Smart Watch",
      price: 99.99,
      image: "assets-img/watch.jpg"
    },
    {
      name: "Headphones",
      price: 199.99,
      image: "assets-img/headphones.jpg"
    }
  ];
  
  function showProducts() {
    const container = document.getElementById("productList");
    container.innerHTML = "";
  
    products.forEach((p, index) => {
      container.innerHTML += `
        <div class="product-card">
          <img src="${p.image}" alt="${p.name}" style="width:100%; height:200px; object-fit:cover; border-radius:10px; cursor:pointer;" onclick="viewProduct(${index})">
          <h3>${p.name}</h3>
          <p>Price: $${p.price.toFixed(2)}</p>
          <button onclick="addToCart('${p.name}', ${p.price}, '${p.image}')">Add to Cart</button>
        </div>
      `;
    });
  }
  
  
  function addToCart(name, price, image) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push({ name , price, image });
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${name} added to cart!`);
  }
  
  function viewProduct(index) {
    localStorage.setItem("selectedProduct", JSON.stringify(products[index]));
    window.location.href = "product-details.html";
  }
  