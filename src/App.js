import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import AddRecipe from './Forms/AddRecipeForm/AddRecipeForm';
import RecipeList from './RecipeList/RecipeList';
import LandingPage from './LandingPage/LandingPage';
import NavBar from './NavBar/NavBar';
import STORE  from './STORE'
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
      
      <div className='App'>
        <NavBar />
        <header className='App-header'>
          <h1>Grocery Plus</h1>
        </header>
        
       
        <div className='content' aria-live='polite'>
          <Route
            path='/add-recipe'
            render={() => <AddRecipe
                           store={STORE}
            />}
          />
          <Route
            exact
            path='/'
            render={() => <LandingPage 
          />}
          />
          <Route
            path='/recipe-list'
            render={() => <RecipeList
                           store={STORE}/>}
          />
        </div>
      </div>
      
    );
  }
}

export default App;