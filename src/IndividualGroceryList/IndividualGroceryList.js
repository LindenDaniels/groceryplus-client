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
        const { groceryListId } = this.props.match.params;
       
        const list = findList(this.props.store.groceryLists, groceryListId)
        
        
        
      
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