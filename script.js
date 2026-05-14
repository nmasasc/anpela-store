const productsContainer = document.getElementById("products");
const loadingText = document.getElementById("loading");

async function fetchProducts() {

  try {

    const response = await fetch("https://fakestoreapi.com/products");

    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }

    const products = await response.json();

    loadingText.style.display = "none";

    products.slice(0, 6).forEach(product => {

      const productCard = document.createElement("div");

      productCard.classList.add("product-card");

      productCard.innerHTML = `
        <img src="${product.image}" alt="${product.title}">
        <h3>${product.title}</h3>
        <p>$${product.price}</p>
      `;

      productsContainer.appendChild(productCard);

    });

  } catch (error) {

    loadingText.innerText = error.message;

    console.error(error);

  }

}

fetchProducts();