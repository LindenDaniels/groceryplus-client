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
   
    ListService.getLists()
      //.then(this.context.setList)
      .then(responseJson => {
        console.log("hopefully this gets logged");
        console.log(responseJson);
    })
      .catch(this.context.setError)
  }
  render() {
    const { list = [] } = this.context;

    return ( 
      list.map(list =>
                <GroceryList
                id={list.id}
                name={list.name}
                aria-controls="groceryList__list"
                className='groceryList__grocery-link'
                />,
                //console.log(list.id, list.name, list)
                
    )
    )}
}