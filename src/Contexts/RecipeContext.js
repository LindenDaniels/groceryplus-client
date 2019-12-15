import React, { Component } from 'react'

export const nullRecipe = {
  author: {},
  tags: [],
}

const RecipeContext = React.createContext({
  Recipe: nullRecipe,
  reviews: [],
  error: null,
  setError: () => {},
  clearError: () => { },
  setRecipe: () => {},
  clearRecipe: () => {},
  addRecipe: () => {},
})

export default RecipeContext

export class RecipeProvider extends Component {
  state = {
    Recipe: nullRecipe,
    error: null,
  };

  setError = error => {
    console.error(error)
    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
  }

  setRecipe = recipe => {
    this.setState({ recipe })
  }

  clearRecipe = () => {
    this.setRecipe(nullRecipe)
    this.setReviews([])
  }

  render() {
    const value = {
      recipe: this.state.recipe,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setRecipe: this.setRecipe,
      clearRecipe: this.clearRecipe,
    }
    return (
      <RecipeContext.Provider value={value}>
        {this.props.children}
      </RecipeContext.Provider>
    )
  }
}