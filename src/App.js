import React from 'react';
import logo from './logo.svg';
import './App.css';

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

      <main>
          <div className="container">
              <div className="tile" id="tile-1">
                  <h2>Meal name</h2>
                  <p>Краткое описание.</p>
                </div>
              
              <div className="tile" id="tile-2">
                  <h2>Meal name</h2>
                  <p> Краткое описание.</p>
              </div>
              
          </div>
      </main>

      <footer>
          <p>Marina Lajus © 2024</p>
      </footer>
    </div>
  );
}

export default App;
