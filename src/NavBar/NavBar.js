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
                className='nav-link'
                to='/'>
                    Home
            </NavLink>
          
            <NavLink
              className='nav-link'
              to='/add-recipe'>
                Add Recipe
            </NavLink>
            <NavLink
               className='nav-link'
               to='/recipe-list'>
                   Recipe List
            </NavLink>
            <NavLink
               className='nav-link'
               to='/create-grocery-list'>
                   Create a Grocery List
            </NavLink>
            <NavLink
               className='nav-link'
               to='/grocery-lists'>
                   Grocery Lists
            </NavLink>
            
            
          
        </div>

      )
    }
  }//<body>
    //<nav role="navigation">Nav</nav>