import React, { Component } from 'react'
import RecipeContext from '../Contexts/RecipeContext'
import RecipesInFolder from './RecipesInFolder'
import RecipeService from '../Services/RecipeService';
import FolderService from '../Services/FolderService';
import FolderContext from '../Contexts/FolderContext'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

export default class DisplayRecipesInFolder extends Component {
  
  static contextType = RecipeContext;
  static contextType = FolderContext;
  
  render() {
    const { name, id, folder_id} = this.props
    
    return (
      <Link to={`/recipes/${folder_id}`} className='recipe-name'> 
       <>
       <header>
           <h2>{name}</h2>
       </header>
        </>
        </Link>
        
   ) }
}

  
  
  DisplayRecipesInFolder.propType = {
    match: PropTypes.object.isRequired
  };