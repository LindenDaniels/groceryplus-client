import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import './IndividualRecipe.css'
import RecipeContext from '../Contexts/RecipeContext'

export default class IndividualRecipe extends Component {
    static defaultProps = {
      match: {
        params: {}
      }
    }
  
    static contextType = RecipeContext;
  
    render() {
        const findRecipe = (recipes=[], recipeId) =>
  recipes.find(recipe => recipe.id.toString() === recipeId)
        const { recipeId } = this.props.match.params;
        const recipe = findRecipe(this.props.store.recipes, recipeId)
        
      return (
          
       <>
       <header>
           <h2>{recipe.name}</h2>
       </header>
        <section className='recipe'>
          <ul>
              <li key="{recipe.id}">
               {recipe.ingredients}
               <br />
               {recipe.instructions}
              </li>
          </ul>
        </section>
        </>
   ) }
}

  
  
  IndividualRecipe.propType = {
    match: PropTypes.object.isRequired
  };