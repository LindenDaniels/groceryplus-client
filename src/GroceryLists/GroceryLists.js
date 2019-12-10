import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types';
import './GroceryLists.css'
import ListContext from '../Contexts/ListContext'
import  GroceryList  from '../IndividualGroceryList/IndividualGroceryList'
import ListService from '../Services/ListService';

//import Recipe from '../Recipe/Recipe'
//import { getNotesForFolder } from '../NotesHelpers'



export default class GroceryLists extends Component {
  static defaultProps = {
    match: {
      params: {}
    }
  }

  static contextType = ListContext;
  render() {
    const { listId } = this.props.match.params;
    const { lists=[] } = this.context;
    const groceryLists = ListService.getLists();
    console.log(groceryLists);

    return (
      
        <>
        <header>
            <h2>Grocery Lists</h2>
        </header>
      <section className='GroceryLists'>
        <ul id="grocery__lists">
          {groceryLists.map(list =>
            <li key={list.id}>
                <GroceryList
                id={list.id}
                name={list.name}
                items={list.items}
                aria-controls="groceryList__list"
                className='groceryList__grocery-link'
                
              />
              
              
              
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