import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import './IndividualGroceryList.css'
import ListContext from '../Contexts/ListContext'
import ListService from '../Services/ListService'

export default class GroceryList extends Component {
 
  static contextType = ListContext;
  
  
  componentDidMount() {
    const { list = [] } = this.props
    const listId = list.id;
    ListService.getList(listId)
      .then(this.context.setList)
      .catch(this.context.setError)
  }
  
  render() {
    const { list = [] } = this.props
    return ( 
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
        
   ) }
}

  
  
  GroceryList.propType = {
    match: PropTypes.object.isRequired
  };