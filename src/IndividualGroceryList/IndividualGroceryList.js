import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import './IndividualGroceryList.css'
import ListContext from '../Contexts/ListContext'
import ListService from '../Services/ListService'

export default class GroceryList extends Component {
 
  static contextType = ListContext;
  
  
  /*componentDidMount() {
    const listId = this.context;
    console.log(listId)
    ListService.getList(listId)
      .then(this.context.setList)
      .catch(this.context.setError)
  }*/
  
  render() {
    const { list = [] } = this.context;
    
    return ( 
      <Link to={`/lists/${list.id}`} className='individual-list'>
       <>
       <header>
           <h2>{list.name}</h2>
       </header>
        <section className='GroceryLists'> 
          <ul>
              <li key="{list.id}" className='groceryList-items'>
               {list.items}
              </li>
          </ul>
        </section>
        </>
        </Link>
   ) }
}

  
  
  GroceryList.propType = {
    match: PropTypes.object.isRequired
  };