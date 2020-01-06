import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';


export default class NavBar extends Component {

    render() {
  
      return (
        <div className='NavBar'>
            <NavLink
                className='nav-link'
                to='/'>
                  <img src="https://img.icons8.com/ultraviolet/40/000000/home.png" className="home-img"></img>
                  Home
            </NavLink>
          
            <NavLink
              className='nav-link'
              to='/add-recipe'>
                Add Recipe
            </NavLink>
            <NavLink
              className='nav-link'
              to='/add-folder'>
                Add Folder

            </NavLink>
            <NavLink
               className='nav-link'
               to='/recipes'>
                   Recipe List
            </NavLink>
            <NavLink
               className='nav-link'
               to='/create-grocery-list'>
                   Add Grocery List
            </NavLink>
            <NavLink
               className='nav-link'
               to='/lists'>
                   Grocery Lists
            </NavLink> 
          
        </div>

      )
    }
  }