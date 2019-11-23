import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import './IndividualGroceryList.css'
import GroceryContext from '../Contexts/GroceryContext'

export default class GroceryList extends Component {
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
        const groceryListId = this.props.store.groceryLists.id.toString()
        const list = findList(groceryLists, groceryListId)
        //const groceryListId = this.props.store.groceryLists.id
        //const groceryList = this.props.store.groceryLists.find(groceryList => groceryListId);
        console.log(list)
      //const { recipe =[] } = this.context
      //const notesForFolder = getNotesForFolder(notes, folderId)
  
      //const groceryLists = this.props.store.groceryLists
      return (
       
        <section className='GroceryLists'>
          <ul>
              <li>
                
              </li>
          </ul>
        </section>
   ) }
}

  
  
  GroceryList.propType = {
    match: PropTypes.object.isRequired
  };