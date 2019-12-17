import React, { Component } from 'react'
import DisplayRecipesInFolder from './DisplayRecipesInFolder'
import FolderService from '../Services/FolderService'
import FolderContext from '../Contexts/FolderContext'
import RecipeContext from '../Contexts/RecipeContext'
import RecipeService from '../Services/RecipeService'

class RecipesInFolder extends React.Component {
    static contextType = FolderContext;
    static contextType = RecipeContext;
    
    componentDidMount() {
        RecipeService.getRecipes(this.props.match.params.folder_id)
        .then(recipe => this.context.setRecipe([recipe]))
        .catch(this.context.setError)
    }
  
    render() {
        const recipes = this.context.recipes.filter(recipe => +recipe.folderid === +this.props.match.params.folder_id )
        return recipes.map(recipe =>  <DisplayRecipesInFolder {...recipe} /> )
      }
  }

  export default RecipesInFolder;