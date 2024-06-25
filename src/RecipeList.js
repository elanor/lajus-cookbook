import React from 'react';
// import './RecipeList.css';
import { Link } from 'react-router-dom';
import recipes from './mock/recipes-list';
// import './index.css';


function RecipeList() {
  return (
    <>
                {recipes.map((recipe) => (
                <Link to={`/recipe/${recipe.id}`} className="tile" key={recipe.id}>
                    <h2 className='tile__title'>{recipe.name}</h2>
                    <div className='tile__desc'>{recipe.description}</div>
                </Link>
            ))}
    </>
    

);
}

export default RecipeList;