import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import './IndividualRecipe.css'
import GroceryContext from '../Contexts/GroceryContext'

export default class IndividualRecipe extends Component {
    static defaultProps = {
      match: {
        params: {}
      }
    }
  
    static contextType = GroceryContext;
  
    render() {
        const findList = (groceryLists=[], groceryListId) =>
  groceryLists.find(groceryList => groceryList.id.toString() === groceryListId)
        const groceryLists = this.props.store.groceryLists
        const { recipeId } = this.props.match.params;
        //const { groceryListId } = getGroceryListId.toString();
        const recipe = findList(this.props.store.recipes, recipeId)
        console.log("Here's the list", recipe)
        //const groceryListId = this.props.store.groceryLists.id
        //const groceryList = this.props.store.groceryLists.find(groceryList => groceryListId);
        
      //const { recipe =[] } = this.context
      //const notesForFolder = getNotesForFolder(notes, folderId)
  
      //const groceryLists = this.props.store.groceryLists
      return (
          
       
        <section className='GroceryLists'>
          <ul>
              <li key="{list.id}">
               {recipe.name}<br />
               {recipe.ingredients}
               {recipe.instructions}
              </li>
          </ul>
        </section>
   ) }
}

  
  
  IndividualRecipe.propType = {
    match: PropTypes.object.isRequired
  };