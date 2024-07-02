import React from 'react';
import { Link } from 'react-router-dom';
import recipes from './mock/recipes-list';

function RecipeList() {
  return (
    <div className='inline-grid gap-10 grid-cols-3'>
                {recipes.map((recipe) => (
                <Link to={`/recipe/${recipe.id}`} className="tile m-4" key={recipe.id}>
                    <h2 className='tile__title'>{recipe.name}</h2>
                    <div className='tile__desc'>{recipe.description}</div>
                </Link>
            ))}
    </div>
    

);
}

export default RecipeList;