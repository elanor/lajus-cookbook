import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import RecipeItem from './RecipeItem';
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
      <Router>
        <main>
            <div className="container">
                <Link to="/recipe/1" className="tile" id="tile-1">
                    <h2>Meal name</h2>
                    <p>Краткое описание.</p>
                  </Link>
                
                <Link to="/recipe/2" className="tile" id="tile-2">
                    <h2>Meal name</h2>
                    <p> Краткое описание.</p>
                </Link>
                
            </div>
        </main>
      </Router>
      
      <Switch>
        <Route path="/recipe/:id" children={<RecipeItem />} />
      </Switch>

      <footer>
          <p>Marina Lajus © 2024</p>
      </footer>
    </div>
  );
}

export default App;
