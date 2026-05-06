const fetchquotes = async () => {
    try {
        const response = await fetch('https://api.freeapi.app/api/v1/public/quotes');
        const data = await response.json();
        console.log(data);
        const quotesContainer = document.getElementById('quotes-container');
        data.data.data.forEach(quote => {
            const quoteElement = document.createElement('div');
            quoteElement.innerHTML = `
            <h4>${quote.content}</h4>
            <p>${quote.author}</p>
            <p>[${quote.tags.join(', ')}]</p>
            <p>${quote.id}</p>`
            ;
            quotesContainer.appendChild(quoteElement);
        });
    } catch (error) {
        console.error('Error fetching quotes:', error);
    }
}
fetchquotes();