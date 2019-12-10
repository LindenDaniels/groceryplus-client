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
  
 

  static contextType = ListContext;

  componentDidMount() {
    this.context.clearError()
    ListService.getLists()
      .then(this.context.setList)
      .catch(this.context.setError)
  }
  render() {
    const { list = [] } = this.context;

    return ( 
      list.map(list =>
                <GroceryList
                id={list.id}
                name={list.name}
                items={list.items}
                aria-controls="groceryList__list"
                className='groceryList__grocery-link'
                />
                
    )
    )}
}