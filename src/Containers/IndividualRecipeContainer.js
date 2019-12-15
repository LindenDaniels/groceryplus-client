import React, { Component } from 'react'
import IndividualRecipe from '../IndividualRecipe/IndividualRecipe'
import RecipeService from '../Services/RecipeService'
import RecipeContext from '../Contexts/RecipeContext'

class ContainerIndividualGroceryRecipe extends React.Component {
    static contextType = RecipeContext;
    
    componentDidMount() {
      RecipeService.getRecipe(this.props.match.params.recipe_id)
        .then(recipe => this.context.setRecipe([recipe]))
        .catch(this.context.setError)
    }
  
    render() {
      const recipe = this.context.recipes.find(recipe => +recipe.id === +this.props.match.params.recipe_id)
      return <IndividualRecipe {...recipe} />
    }
  }

  export default ContainerIndividualGroceryRecipe;