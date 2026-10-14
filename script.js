let productContainer = document.querySelector(".product-grid");
let errorMessage = document.querySelector("#errorMessage");

productContainer.style.display = "grid";
productContainer.style.gridTemplateColumns =
    "repeat(auto-fit, minmax(250px, 1fr))";
productContainer.style.gap = "20px";
productContainer.style.padding = "20px";
productContainer.style.maxWidth = "1400px";
productContainer.style.margin = "auto";

fetch("https://fakestoreapi.com/products/")
    .then(response => response.json())
    .then(products => {
        products.forEach(product => {
            let productCard = document.createElement("div");

            productCard.style.backgroundColor = "white";
            productCard.style.border = "1px solid #ddd";
            productCard.style.borderRadius = "10px";
            productCard.style.padding = "15px";
            productCard.style.boxShadow =
                "0 3px 8px rgba(0, 0, 0, 0.1)";

            let imageContainer = document.createElement("div");

            imageContainer.style.height = "200px";
            imageContainer.style.display = "flex";
            imageContainer.style.alignItems = "center";
            imageContainer.style.justifyContent = "center";

            let productImage = document.createElement("img");

            productImage.src = product.image;
            productImage.alt = product.title;
            productImage.style.maxWidth = "100%";
            productImage.style.maxHeight = "100%";
            productImage.style.objectFit = "contain";

            imageContainer.appendChild(productImage);

            let productTitle = document.createElement("h3");
            productTitle.textContent = product.title.slice(0, 60);

            let productCategory = document.createElement("p");
            productCategory.textContent = product.category;
            productCategory.style.color = "#2563eb";

            let productDescription = document.createElement("p");
            productDescription.textContent =
                product.description.slice(0, 120);
            productDescription.style.lineHeight = "1.5";
            productDescription.style.color = "#555";

            productCard.appendChild(imageContainer);
            productCard.appendChild(productTitle);
            productCard.appendChild(productCategory);
            productCard.appendChild(productDescription);

            productContainer.appendChild(productCard);
        });
    })
    .catch(error => {
        errorMessage.textContent =
            "Error loading products: " + error.message;
        errorMessage.style.color = "red";
    })
    .finally(() => {
        console.log("API called");
    });
