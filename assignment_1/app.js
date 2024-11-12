const fs = require('fs');

function getProducts() {
    try {
        const data = fs.readFileSync('data.json', 'utf-8');
        jsonData = JSON.parse(data);
        console.log(jsonData);
    } catch (error) {
        console.error(error);
    }
}


function addNewProduct(newProduct) {
    try {
        const data = fs.readFileSync('data.json', 'utf-8');
        const products = JSON.parse(data);
        if (newProduct && newProduct.id && newProduct.name && newProduct.category && newProduct.price !== undefined && typeof newProduct.available === 'boolean') {
            products.push(newProduct);
            const jsonData = JSON.stringify(products);
            fs.writeFileSync('data.json', jsonData);
            console.log("Product added successfully.");
        } else {
            console.error("Invalid product data. Ensure all fields are provided.");
        }
    } catch (error) {
        console.error(error);
    }
}

function updateProduct(productId, updatedFields) {
    try {
        const data = fs.readFileSync('data.json', 'utf-8');
        const products = JSON.parse(data);

        const productIndex = products.findIndex(p => p.id === productId);
        
        if (productIndex !== -1) {
            products[productIndex] = { ...products[productIndex], ...updatedFields };
            const jsonData = JSON.stringify(products);
            fs.writeFileSync('data.json', jsonData);
            console.log("Product updated successfully.");
        } else {
            console.error("Product not found.");
        }
    } catch (error) {
        console.error(error);
    }
}

function filterAvailableProducts() {
    try {
        const data = fs.readFileSync('data.json', 'utf-8');
        const products = JSON.parse(data);
        availableProducts = products.filter(product => product.available);
        console.log(availableProducts);
    } catch (error) {
        console.error(error);
    }
}

function filterProductsByCategory(category) {
    try {
        const data = fs.readFileSync('data.json', 'utf-8');
        const products = JSON.parse(data);
        productByCategory = products.filter(product => product.category === category);
        console.log(productByCategory);
    } catch (error) {
        console.error(error);
    }
}


getProducts();

newProduct = {
    "id": 5,
    "name": "Shirt",
    "category": "Clothing",
    "price": 400,
    "available": true
}
addNewProduct(newProduct);

updateProduct(1, { price: 30, available: false, name: "Juice" });

filterAvailableProducts();

filterProductsByCategory("Electronics");