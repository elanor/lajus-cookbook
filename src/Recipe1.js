import React from 'react';
import './RecipeItem.css';

function Recipe1() {
  return (

    <div className='RecipeItem'>
        <header>
        <h1>Brazilian Feijoada</h1>
        <p>Dinner by Sergio, for that special autumn sunny day 🍂</p>
    </header>

    <section class="recipe-details">
        <div class="servings">
            <p>Servings: 4 people</p>
        </div>
        <div class="time">
            <p>Prep time: 20 min</p>
            <p>Cooking time: 2 to 3h</p>
        </div>
    </section>

    <section class="ingredients">
        <h2>Ingredients:</h2>
        <ul>
            <li>500g of black beans, soaked overnight</li>
            <li>200g of pork shoulder, cut into chunks</li>
            <li>100g of chorizo, sliced</li>
            
        </ul>
    </section>

    <section class="instructions">
        <h2>Instructions:</h2>
        <ol>
            <li>Soak the Beans: Soak the black beans in a large bowl of water overnight.</li>
            <li>Cook the Meats: In a large pot, heat the oil over medium heat. Add the bacon and cook until it starts to crisp. Then add the pork shoulder and chorizo.</li>
            
        </ol>
    </section>

    <section class="tips">
        <h2>Tips:</h2>
        <ul>
            <li>Adjust the types and amounts of meats according to your preference.</li>
            <li>Cooking times may vary depending on the type and age of the beans.</li>
            
        </ul>
    </section>
    </div>
    
  );
}

export default Recipe1;