import React, { useEffect, useState } from 'react';
import './RecipeItem.css';
import { useLocation, useParams } from 'react-router-dom';
import recipes from "./mock/recipes-list.js";


function RecipeItem() {
    const { id } = useParams();
    const location = useLocation();
    console.log(id);
    const [currentRecipe, setCurrentRecipe] = useState(null);

    useEffect(() => {
        const findRecipeById = (id) => {
            const recipeId = parseInt(id, 10);
            if (!recipeId) {
                console.error('Invalid ID');
                return null; // Return null or undefined if the ID is not valid
            }
            // Find the recipe by ID
            const recipe = recipes.find(r => r.id === recipeId);
            if (!recipe) {
                console.error('Recipe not found');
                return null; // Return null or undefined if no recipe is found
            }
            return recipe;
        };

        setCurrentRecipe(findRecipeById(id));
    })

    // Check if a recipe was found before trying to access its properties
    if (!currentRecipe) {
        return <div>Recipe not found</div>; // Render an error message or similar
    }

  return (

    <div className='recipe__container'>

    
        <img src={currentRecipe.image} alt='image' className="recipe__image"/>
        
        <h1 className='recipe__title'>{currentRecipe.name}</h1>
        <div className='recipe__description'>{currentRecipe.description}</div>
    

        <div className="recipe__details servings">
            <p>Servings: {currentRecipe.servings}</p>
            <p>Prep time: {currentRecipe.preptime}</p>
            <p>Cooking time: {currentRecipe.cookingTime}</p>
        </div>

        <div className="recipe__details ingredients">
            {currentRecipe.ingredients_desc.split(",").map((ingredient, index) => (
                <li key={index}>{ingredient.trim()}</li>
            ))}
        </div>

        <div className="recipe__details instructions">
            <h2>Instructions:</h2>
            <ol>
                {currentRecipe.instructions_desc.split(". ").map((step, index) => (
                    <li key={index}>{step}</li>
                ))}
            </ol>
        </div>

        <div className="recipe__details tips">
            <h2>Tips:</h2>
            <ul>
                <li>{currentRecipe.tips}</li>
            </ul>
        </div>
    
    </div>

    
    
  );
}

export default RecipeItem;