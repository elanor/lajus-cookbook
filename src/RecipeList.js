import React from 'react';
// import './RecipeList.css';
import { Link } from 'react-router-dom';

function RecipeList() {
  return (
    <>
                <Link to="/recipe/1" className="tile" id="tile-1">
                    <h2>Meal name</h2>
                    <p>Краткое описание.</p>
                  </Link>
                
                <Link to="/recipe/2" className="tile" id="tile-2">
                    <h2>Meal name</h2>
                    <p> Краткое описание.</p>
                </Link>
    </>
    

);
}

export default RecipeList;