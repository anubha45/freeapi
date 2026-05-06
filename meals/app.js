const fetchmeals = async () => {
    try {
        const response = await fetch('https://api.freeapi.app/api/v1/public/meals');
        const data = await response.json();
        console.log(data);
        const mealsContainer = document.getElementById('meals-container');
        data.data.data.forEach(meal => {
            const mealElement = document.createElement('div');
            mealElement.innerHTML = `
            <img src="${meal.strMealThumb}" alt="${meal.strMeal}" style="max-width: 100%; height: auto;">
            <h1>${meal.strMeal}</h1>
            <p>Category: ${meal.strCategory}</p>
            <p>Area: ${meal.strArea}</p>
            <a href="${meal.strYoutube}" target="_blank">Youtube Link</a>
            `;
            mealsContainer.appendChild(mealElement);
        });
    } catch (error) {
        console.error('Error fetching meals:', error);
    }

}
fetchmeals();