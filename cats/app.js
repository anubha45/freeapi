const fetchcats = async () => {
   try {
    const response = await fetch('https://api.freeapi.app/api/v1/public/cats/cat/random');
    const data = await response.json();
    console.log(data);
    const catsContainer = document.getElementById('cats-container');
    catsContainer.innerHTML = `
    <img src="${data.data.image}" alt="Random Cat Image" style="max-width: 100%; height: auto;">
    <p>Name: ${data.data.name}</p>
    <button onclick="fetchcats()">Another Cat</button>
    `} catch (error) {
    console.error('Error fetching cat image:', error);
   }
}
fetchcats();