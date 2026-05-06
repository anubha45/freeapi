const fetchjokes = async () => {
    try {
        const response = await fetch('https://api.freeapi.app/api/v1/public/randomjokes');
        const data = await response.json();
        const jokesContainer = document.getElementById('jokes-container');
        data.data.data.forEach(joke => {
            const jokeElement = document.createElement('div');
            jokeElement.innerHTML = `
            <p>${joke.id}</p>
            <h4>${joke.content}</h4>
            <p>[${joke.categories}]</p>`
            ;
            jokesContainer.appendChild(jokeElement);
        });
    } catch (error) {
        console.error('Error fetching jokes:', error);
    }
}
fetchjokes();