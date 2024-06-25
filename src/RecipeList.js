import React from 'react';
// import './RecipeList.css';
import { Link } from 'react-router-dom';
// import './index.css';


function RecipeList() {
  return (
    <div className='container'>
                <Link to="/recipe/1" className="tile" id="tile-1">
                    <h2 className='text-3xl font-bold underline'>Meal name</h2>
                    <p>Краткое описание.</p>
                  </Link>
                
                <Link to="/recipe/2" className="tile" id="tile-2">
                    <h2>Meal name</h2>
                    <p> Краткое описание.</p>
                </Link>
    </div>
    

);
}

export default RecipeList;