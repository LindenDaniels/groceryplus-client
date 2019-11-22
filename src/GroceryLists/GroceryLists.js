import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import './GroceryLists.css'
import GroceryContext from '../Contexts/GroceryContext'
//import Recipe from '../Recipe/Recipe'
//import { getNotesForFolder } from '../NotesHelpers'



export default class GroceryLists extends Component {
  static defaultProps = {
    match: {
      params: {}
    }
  }

  static contextType = GroceryContext;

  render() {
    //const { folderId } = this.props.match.params
    //const { recipe =[] } = this.context
    //const notesForFolder = getNotesForFolder(notes, folderId)

    const groceryLists = this.props.store.groceryLists
    return (
        <>
        <header>
            <h2>Grocery Lists</h2>
        </header>
      <section className='GroceryLists'>
        <ul id="grocery__lists">
          {groceryLists.map(groceryList => 
            <li key={groceryList.id}>
              {groceryList.name}
              
            </li>
          )}
        </ul>
      </section>
      </>
    )
  }

}


GroceryLists.propType = {
  match: PropTypes.object.isRequired
};