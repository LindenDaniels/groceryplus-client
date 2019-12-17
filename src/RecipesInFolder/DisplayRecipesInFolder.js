import React, { Component } from 'react'
import RecipeContext from '../Contexts/RecipeContext'
import RecipesInFolder from './RecipesInFolder'
import RecipeService from '../Services/RecipeService';
import FolderService from '../Services/FolderService';
import FolderContext from '../Contexts/FolderContext'

export default class RecipeList extends Component {
  
  static contextType = RecipeContext;
  static contextType = FolderContext;
  
  componentDidMount() {
    FolderService.getFolders()
    .then(this.context.setFolder)
    .catch(this.context.setError) 
  
    RecipeService.getRecipes()
      .then(this.context.setRecipe)
      .catch(this.context.setError) 
  }
  
  render() {
    const { recipes = [], folders = [] } = this.context;
   
    return ( 
      
      recipes.map(recipe =>
                <RecipesInFolder
                folder_id={folders.id}
                id={recipe.id}
                key={recipe.id}
                name={recipe.name}
                //ingredients={recipe.ingredients}
                //instructions={recipe.instructions}
                aria-controls="groceryRecipe__recipe"
                className='groceryRecipe__grocery-link'
                />        
                
    )
    )} 
  
}