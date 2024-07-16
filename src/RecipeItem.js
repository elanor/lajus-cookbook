import React, { useEffect, useState } from 'react';
import './RecipeItem.css';
import { useLocation, useParams } from 'react-router-dom';
import recipes from "./mock/recipes-list.js";
import { index } from 'langchain/indexes';



function RecipeItem() {
    const { id } = useParams();
    const location = useLocation();
    console.log(id);
    const [currentRecipe, setCurrentRecipe] = useState(null);


    useEffect(() => {
        console.log("++")
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
    },
    []
)

    // Check if a recipe was found before trying to access its properties
    if (!currentRecipe) {
        return <div>Recipe not found</div>; // Render an error message or similar
    }

  return (

    <>
    <img src={require(`./assets/${currentRecipe.image}`)}  alt='image' className="recipe__image"/>
    <div className='container recipe__container tablet:px-12 mobile:px-6'>

    
{/* <img src={require(`./assets/${currentRecipe.image}`)}  alt='image' className="recipe__image"/> */}

        <h1 className='recipe__title flex justify-center text-5xl font-extrabold tablet:font-bold tablet:text-5xl tablet:leading-none mobile:text-4xl'>{currentRecipe.name}</h1>
        <h5 className='recipe__description flex justify-center text-xl mt-8 tablet:leading-7 tablet:mt-6 mobile:text-xl mobile:mt-4 mobile:leading-5'>{currentRecipe.description}</h5>


        <div className="servings flex justify-between pt-8 mobile:flex-col">
            <h3><strong>Servings:</strong> {currentRecipe.servings}</h3>
            <h3><strong>Prep time:</strong> {currentRecipe.preptime}</h3>
            <h3><strong>Cooking time:</strong> {currentRecipe.cookingTime}</h3>
        </div>

        <div className="recipe__details tablet:columns-1">
            <div className="ingredients">
                <h2><strong>Ingredients:</strong></h2>
                <div className="ingredients__desc">
                    {currentRecipe.ingredients_desc.map((ingredient, index) => (
                        <>
                            <input type="checkbox" id="ingredient" name="ingredient" key={index}/>
                            <label for="ingredient"> {ingredient}</label><br/>
                        </>
                    ))}
                </div>
            </div>

            <div className="instructions">
                <h2><strong>Instructions:</strong></h2>
                <ol>
                    {currentRecipe.instructions_desc.map((step, index) => (
                        <li key={index}>{step}</li>
                    ))}
                </ol>
            </div>

            <div className="tips">
                <h5><strong>Tips: </strong></h5>
                <ul>
                    {currentRecipe.tips.map((step, index) => (
                        <li key={index}>{step}</li>
                    ))}
                    
                </ul>
            </div>
        </div>



</div>
    </>   
    
  );
}

export default RecipeItem;