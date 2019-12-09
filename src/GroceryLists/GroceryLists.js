import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types';
import './GroceryLists.css'
import ListContext from '../Contexts/ListContext'
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
    const { list } = this.props;

    return (
        <>
        <header>
            <h2>Grocery Lists</h2>
        </header>
      <section className='GroceryLists'>
        <ul id="grocery__lists"> 
            <li >
                <NavLink
                aria-controls="groceryList__list"
                className='groceryList__grocery-link'
                to={`/grocery-list/${list.id}`}
              >
                {list.name}
              </NavLink>
              
              
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