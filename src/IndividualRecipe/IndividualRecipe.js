import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import './IndividualRecipe.css'
import RecipeContext from '../Contexts/RecipeContext'
import RecipeService from '../Services/RecipeService'

export default class IndividualRecipe extends Component {
 
  static contextType = RecipeContext;
  
  
  render() {
    const { name, id, folder_id, ingredients, instructions } = this.props
    
    return (
      <Link to={`/recipes/${folder_id}/${id}`} className='recipe-name'> 
       <>
       <header>
           <h2>{name}</h2>
       </header>
        <section className='recipes'> 
          <ul>
              <li key={id} className='recipe-items'>
               {ingredients}
               {instructions}
              </li>
          </ul>
        </section>
        </>
        </Link>
        
   ) }
}

  
  
  IndividualRecipe.propType = {
    match: PropTypes.object.isRequired
  };