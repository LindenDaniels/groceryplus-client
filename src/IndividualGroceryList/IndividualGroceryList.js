import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import './IndividualGroceryList.css'
import ListContext from '../Contexts/ListContext'
import ListService from '../Services/ListService'

export default class GroceryList extends Component {
 
  static contextType = ListContext;
  
  
  componentDidMount() {
    const { lists = [] } = this.props
    const listId = lists.id;
    ListService.getList(this.props.id)
    
      .then(this.context.setList)
      .catch(this.context.setError)
      console.log(lists, lists.id)
  }
  
  render() {
    const { lists = [] } = this.props
    return ( 
       <>
       <header>
           <h2>{lists.name}</h2>
       </header>
        <section className='GroceryLists'> 
          <ul>
              <li key={lists.id} className='groceryList-items'>
               {lists.items}
              </li>
          </ul>
        </section>
        </>
        
   ) }
}

  
  
  GroceryList.propType = {
    match: PropTypes.object.isRequired
  };