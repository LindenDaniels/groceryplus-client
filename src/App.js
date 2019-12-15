import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import AddRecipe from './Forms/AddRecipeForm/AddRecipeForm';
import CreateGroceryList from './Forms/CreateGroceryList/CreateGroceryList';
import GroceryLists from './GroceryLists/GroceryLists';
import FolderList from './FolderList/FolderList';
import ContainerIndividualGroceryList from './Containers/IndividualListContainer'
import LandingPage from './LandingPage/LandingPage';
import NavBar from './NavBar/NavBar';
import IndividualRecipe from './IndividualRecipe/IndividualRecipe';
import './App.css';
import { ListProvider } from './Contexts/ListContext';
import IndividualFolderContainer from './Containers/IndividualFolderContainer';


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
            component={ContainerIndividualGroceryList}               
          />
          <Route
            path='/recipes/:recipe_id'
            component={IndividualRecipe}               
          />

          <Route
            path='/recipes'
            component={IndividualFolderContainer}
            />
          
        </div>
      </div>
      </Switch>
      
    );
  }
}

export default App;