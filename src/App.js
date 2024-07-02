import React, { StrictMode } from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch, Link, Routes, BrowserRouter } from 'react-router-dom';
import RecipeItem from './RecipeItem';
import './App.css';
import RecipeList from './RecipeList';
import './index.css';

function AddRecipe() {
  return (
    <div id="newrecipepopover" popover>Popover content</div>
  )
}

function App() {
  return (
    <div className="App">
        <header>

          <div className='header__menu'>
            <div className='header__menu-item'><a href="#home">LajusCook</a></div>
          </div>

          <div className='header__menu'>
            <button className='header__menu-item' popovertarget="newrecipepopover">Новый рецепт</button>
            <div className='header__menu-item'><a href="#all-projects">Все рецепты</a></div>
        </div>

      </header>
      
        <main>
      
            <div className="container-wide">
            {/* <div className='container-wide inline-grid gap-10 grid-cols-3'> */}
            

              <BrowserRouter>

                 <Routes>
                  <Route path="/recipe/:id" element={<RecipeItem />} />
                  <Route path="/" element={<RecipeList />} />
                </Routes>
      
                </BrowserRouter>          
              </div>
            
        </main>

      <footer>
          <p>Marina Lajus © 2024</p>
      </footer>
    </div>
  );
}

export default App;
