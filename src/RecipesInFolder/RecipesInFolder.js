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
      FolderService.getFolder(this.props.match.params.folder_id)
        .then(folder => this.context.setFolder([folder]))
        .catch(this.context.setError)

        RecipeService.getRecipes(this.props.match.params.folder_id)
        .catch(this.context.setError)
    }
  
    render() {
      const folder = this.context.folders.find(folder => +folder.id === +this.props.match.params.folder_id)
      const recipe = this.context.recipes.find(folder => +folder.id === +this.props.match.params.folder_id )
      return <DisplayRecipesInFolder {...folder} {...recipe} />
    }
  }

  export default RecipesInFolder;