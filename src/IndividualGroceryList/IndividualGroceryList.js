import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import './IndividualGroceryList.css'
import ListContext from '../Contexts/ListContext'
import ListService from '../Services/ListService'

export default class GroceryList extends Component {
 
  static contextType = ListContext;
  
  render() {
    const { name, id, items } = this.props
    
    return (
      <Link to={`/lists/${id}`} className='list-item'> */
       <>
       <header>
           <h2>{name}</h2>
       </header>
        <section className='GroceryLists'> 
          <ul>
              <li key={id} className='groceryList-items'>
               {items}
              </li>
          </ul>
        </section>
        </>
        </Link>  
   )}
}

  
  GroceryList.propType = {
    match: PropTypes.object.isRequired
  };