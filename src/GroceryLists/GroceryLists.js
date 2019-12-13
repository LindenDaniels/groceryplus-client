import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types';
import './GroceryLists.css'
import ListContext from '../Contexts/ListContext'
import GroceryList  from '../IndividualGroceryList/IndividualGroceryList'
import ListService from '../Services/ListService';


export default class GroceryLists extends Component {
  
  static contextType = ListContext;
  
  componentDidMount() {
    const { lists = [] } = this.props
    const list_id = this.context;
    
    
    ListService.getLists()
      .then(this.context.setList)
      .catch(this.context.setError)
      
  }
  
  render() {
    const { lists = [] } = this.context;
   
    
    
  
    return ( 
      
      //lists.map(grocery_list =>
                <GroceryList
                id={lists.id}
                name={lists.name}
                aria-controls="groceryList__list"
                className='groceryList__grocery-link'
                />
               
                
    //)
    )} 
  
}