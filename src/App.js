import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import AddRecipe from './Forms/AddRecipeForm/AddRecipeForm';
import RecipeList from './RecipeList/RecipeList';
import LandingPage from './LandingPage/LandingPage';
import NavBar from './NavBar/NavBar';
//import config from './config';
import './App.css';

class App extends Component {
  static defaultProps = {
    store: {
      recipes: [],
    }
  };
  render() {
    
    return (
      <main className='App'>
        <header className='App-header'>
          <h1>Grocery Plus</h1>
        </header>
        <NavBar />
        <div className='content' aria-live='polite'>
          <Route
            path='/add-recipe'
            render={() => <AddRecipe
            />}
          />
          <Route
            exact
            path='/'
            render={() => <LandingPage
              
            />}
          />
        </div>
      </main>
    );
  }
}

export default App;