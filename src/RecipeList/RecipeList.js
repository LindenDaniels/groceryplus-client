import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import './RecipeList.css'
import ListContext from '../Contexts/ListContext'


export default class RecipeList extends Component {
  static defaultProps = {
    match: {
      params: {}
    }
  }

  static contextType = ListContext;

  render() {
    const { folderId } = this.props.match.params
    const { recipe =[] } = this.context
    return (
        <>
        <header>
            <h1>Recipe List</h1>
        </header>
      <section className='RecipeList'>
        <ul id="recipe__list">
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