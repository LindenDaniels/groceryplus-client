import React, { Component } from 'react'
import { Route, Link, NavLink, withRouter } from 'react-router-dom';
import GroceryContext from '../Contexts/GroceryContext'
import AddRecipe from '../Forms/AddRecipeForm/AddRecipeForm';

export default class NavBar extends Component {
    //static contextType = GroceryContext;
  
  
    render() {
      //const { recipes=[] } = this.context
  
      return (
        <div className='NavBar'>
          
            <NavLink
              to='/add-recipe'>
                Add Recipe
            </NavLink>
            <NavLink
               to='/recipe-list'>
                   Recipe List
            </NavLink>
            <NavLink
               to='/create-grocery-list'>
                   Create a Grocery List
            </NavLink>
            <NavLink
               to='/grocery-lists'>
                   Grocery Lists
            </NavLink>
          
        </div>

      )
    }
  }//<body>
    //<nav role="navigation">Nav</nav>