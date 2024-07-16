import React, { StrictMode, useState } from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch, Link, Routes, BrowserRouter, NavLink } from 'react-router-dom';
import RecipeItem from './RecipeItem';
import './App.css';
import RecipeList from './RecipeList';
import './index.css';
import NewRecipe from './NewRecipe';

function App() {
const [isOpenNewRecipe, setIsOpenNewRecipe] = useState( false );

  // const openNewRecipe = () => {
  //   console.log("click");
  //   setIsOpenNewRecipe ( true );
  // }

  return (
    <BrowserRouter>
    <div className="App">
        <header className='hover:bg-sky-700'>
        
          <div className='header__menu mobile:text-sm'>
          
            <NavLink className='header__menu-item' to="/">LajusCook</NavLink>
          
          </div>

          <div className='header__menu'>
            {/* <button className='header__menu-item' popovertarget="newrecipepopover" onClick={openNewRecipe}>New Recipe</button> */}
            <button popovertarget="opennewrecipe" popovertargetaction="show">New Recipe</button>
            <NavLink className='header__menu-item' to="/">All recipes</NavLink>
        </div>
        
      </header>
      
        <main>
      
            <div className="container-wide px-8"> 

                 <Routes>
                  <Route path="/recipe/:id" element={<RecipeItem />} />
                  <Route path="/" element={<RecipeList />}/>
                </Routes>
       
              </div>
            
        </main>

      <footer>
          <p>Marina Lajus © 2024</p>
      </footer>
    </div>

    {/* {isOpenNewRecipe? <NewRecipe className="new-recipe__popover" /> : null } */}
    <div id="opennewrecipe" popover="" className="new-recipe">
        <button className="new-recipe-form__close close-btn"
                    popovertarget="opennewrecipe"
                    popovertargetaction="hide">
                <span className="text-2xl">&times;</span>
                <span className="sr-only">Close</span>

        </button>
      <NewRecipe />
    </div>
    

    
    </BrowserRouter>
  );
}

export default App;
