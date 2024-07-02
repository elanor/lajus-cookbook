import React, { StrictMode, useState } from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch, Link, Routes, BrowserRouter, NavLink } from 'react-router-dom';
import RecipeItem from './RecipeItem';
import './App.css';
import RecipeList from './RecipeList';
import './index.css';
import NewRecipe from './NewRecipe';

// const [recipes, setRecipes] = useState([...]); // your initial recipes array

//   const addRecipe = (newRecipe) => {
//     setRecipes([...recipes, { ...newRecipe, id: recipes.length + 1 }]);
//   };

function App() {
const [isOpenNewRecipe, setIsOpenNewRecipe] = useState( false );

  const openNewRecipe = () => {
    console.log("click");
    setIsOpenNewRecipe ( true );
  }

  return (
    <BrowserRouter>
    <div className="App">
        <header>
        
          <div className='header__menu'>
          
            <NavLink className='header__menu-item' to="/">LajusCook</NavLink>
          
          </div>

          <div className='header__menu'>
            {/* <button className='header__menu-item' popovertarget="newrecipepopover" onClick={openNewRecipe}>New Recipe</button> */}
            <button popovertarget="opennewrecipe" popovertargetaction="show">New Recipe</button>
            <NavLink className='header__menu-item' to="/">All recipes</NavLink>
        </div>
        
      </header>
      
        <main>
      
            <div className="container-wide">
            {/* <div className='container-wide inline-grid gap-10 grid-cols-3'> */}
            


                 <Routes>
                  <Route path="/recipe/:id" element={<RecipeItem />} />
                  <Route path="/" element={<RecipeList />} />
                </Routes>
       

                {/* <NewRecipe addRecipe={addRecipe} />   */}
              </div>
            
        </main>

      <footer>
          <p>Marina Lajus © 2024</p>
      </footer>
    </div>

    {/* {isOpenNewRecipe? <NewRecipe className="new-recipe__popover" /> : null } */}
    <div id="opennewrecipe" popover="" className="new-recipe"><NewRecipe /></div>
    

    
    </BrowserRouter>
  );
}

export default App;
