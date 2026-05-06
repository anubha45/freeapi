const getProducts = async () => {
    try {
        const response = await fetch('https://api.freeapi.app/api/v1/public/randomproducts');
        const data = await response.json();
        console.log(data);
        const container = document.getElementById('products-container');
        data.data.data.forEach(product => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
    <img src="${product.thumbnail}" alt="${product.title}" onerror="this.src='https://picsum.photos/400/300'">
    <span class="price">$${product.price}</span>
    <div class="card-info">
        <h3>${product.title}</h3>
        <span class="brand">${product.brand}</span>
        <p class="description">${product.description}</p>
        <div class="rating"><span>${product.rating}</span></div>
    </div>
`;
            container.appendChild(card);
        });
    } catch (error) {
        console.error('Error fetching products:', error);
    }
}
getProducts()

