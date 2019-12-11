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
import ListProvider from './Contexts/ListContext';

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
      lists: this.state.notes,
      folders: this.state.folders,
      recipes: this.state.recipes

    };
    
    return (
      <ListProvider value={contextValue}>
      
      <div className='App'>
        <NavBar
         className = 'nav-bar' />
    
        <div className='content' aria-live='polite'>
          <Route
            path='/add-recipe'
            render={() => <AddRecipe/>}
          />
          <Route
            exact
            path='/'
            render={() => <LandingPage 
          />}
          />
      
          <Route
            path='/lists'
            render={() => <GroceryLists
                         />}
          />
          <Route
            path='/create-grocery-list'
            render={() => <CreateGroceryList
                           />}
          />
          <Route
            path='/grocery-list/:groceryListId'
            render={(props) => <GroceryList {...props} />}               
          />
          <Route
            path='/recipe/:recipeId'
            render={(props) => <IndividualRecipe {...props}  />}               
          />
          
        </div>
      </div>
      </ListProvider>
    );
  }
}

export default App;