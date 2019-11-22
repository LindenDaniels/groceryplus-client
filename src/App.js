import React, { Component } from 'react';
import { Route, Link, withRouter} from 'react-router-dom';
import AddRecipe from './Forms/AddRecipeForm/AddRecipeForm';
import CreateGroceryList from './Forms/CreateGroceryList/CreateGroceryList';
import RecipeList from './RecipeList/RecipeList';
import GroceryLists from './GroceryLists/GroceryLists';
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
          <Route
            path='/grocery-lists'
            render={() => <GroceryLists
                           store={STORE}/>}
          />
          <Route
            path='/create-grocery-list'
            render={() => <CreateGroceryList
                           store={STORE}/>}
          />
        </div>
      </div>
      
    );
  }
}

export default App;