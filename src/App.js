import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import AddRecipe from './Forms/AddRecipeForm/AddRecipeForm';
import CreateGroceryList from './Forms/CreateGroceryList/CreateGroceryList';
import GroceryLists from './GroceryLists/GroceryLists';
import GroceryList from './IndividualGroceryList/IndividualGroceryList';
import LandingPage from './LandingPage/LandingPage';
import NavBar from './NavBar/NavBar';
import IndividualRecipe from './IndividualRecipe/IndividualRecipe';
//import config from './config';
import './App.css';
import { ListProvider } from './Contexts/ListContext';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
      folders: [],
      lists: [],
      errorBoundaryKey: 0
    };
  }
  render() {
    const contextValue = {
      lists: this.state.lists,
      folders: this.state.folders,
      recipes: this.state.recipes

    };
    
    return (
        <Switch>
      
      <div className='App'>
        <NavBar
         className = 'nav-bar' />

          <Route
            exact 
            path={'/'}
            component={LandingPage}
          />
    
        <div className='content' aria-live='polite'>
          <Route
            path='/add-recipe'
            component={AddRecipe}
          />
          
      
          <Route
            path='/lists'
            component={GroceryLists}
                         
          />
          <Route
            path='/create-grocery-list'
            component={CreateGroceryList}
          />
          <Route
            path='/lists/:list_id'
            component={GroceryList}               
          />
          <Route
            path='/recipe/:recipeId'
            component={IndividualRecipe}               
          />
          
        </div>
      </div>
      </Switch>
      
    );
  }
}

export default App;