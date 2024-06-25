import React, { StrictMode } from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch, Link, Routes, BrowserRouter } from 'react-router-dom';
import RecipeItem from './RecipeItem';
import './App.css';
import RecipeList from './RecipeList';
import './index.css';

function App() {
  return (
    <div className="App">
        <header>

          <div className='header__menu'>
            <div className='header__menu-item'><a href="#home">LajusCook</a></div>
          </div>

          <div className='header__menu'>
            <div className='header__menu-item'><a href="#new-project">Новый рецепт</a></div>
            <div className='header__menu-item'><a href="#all-projects">Все рецепты</a></div>
        </div>

      </header>
      
        <main className='container'>
            {/* <div className="container"> */}
              
            
              <BrowserRouter>

                 <Routes>
                  <Route path="/recipe/:id" element={<RecipeItem />} />
                  <Route path="/" element={<RecipeList />} />
                </Routes>
      
                </BrowserRouter>          
              
            
        </main>

      <footer>
          <p>Marina Lajus © 2024</p>
      </footer>
    </div>
  );
}

export default App;
