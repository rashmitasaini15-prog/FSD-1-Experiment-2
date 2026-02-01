const products = [
  { name: "Laptop", price: 55000, category: "Electronics" },
  { name: "Headphones", price: 2999, category: "Electronics" },
  { name: "T-Shirt", price: 799, category: "Clothing" },
  { name: "Jeans", price: 1999, category: "Clothing" }
];
const productContainer = document.getElementById("productContainer");
const filterSelect = document.getElementById("categoryFilter");
function displayProducts(filteredProducts) {
  productContainer.innerHTML = ""; 

  filteredProducts.forEach(product => {
    const card = document.createElement("div");
    card.classList.add("product-card");

    card.innerHTML = `
      <h2>${product.name}</h2>
      <p>₹ ${product.price.toFixed(2)}</p>
      <p class="category">${product.category}</p>
    `;

    productContainer.appendChild(card);
  });
}
displayProducts(products);
filterSelect.addEventListener("change", () => {
  const selected = filterSelect.value;
  if (selected === "All") {
    displayProducts(products);
  } else {
    const filtered = products.filter(p => p.category === selected);
    displayProducts(filtered);
  }
});
