import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import './RecipeList.css'
import GroceryContext from '../Contexts/GroceryContext'
//import Recipe from '../Recipe/Recipe'
//import { getNotesForFolder } from '../NotesHelpers'



export default class RecipeList extends Component {
  static defaultProps = {
    match: {
      params: {}
    }
  }

  static contextType = GroceryContext;

  render() {
    //const { folderId } = this.props.match.params
    //const { recipe =[] } = this.context
    //const notesForFolder = getNotesForFolder(notes, folderId)

    const recipes = this.props.store.recipes
    return (
        <>
        <header>
            <h1>Recipe List</h1>
        </header>
      <section className='RecipeList'>
        <ul id="recipe__list">
          {recipes.map(recipe => 
            <li key={recipe.id}>
                <NavLink
                aria-controls="recipe__list"
                className='recipe__recipe-link'
                to={`/recipe/${recipe.id}`}
              >
                {recipe.name}
              </NavLink>
              
              
            </li>
          )}
        </ul>
      </section>
      </>
    )
  }

}


RecipeList.propType = {
  match: PropTypes.object.isRequired
};