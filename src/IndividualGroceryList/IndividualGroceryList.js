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
      //const { folderId } = this.props.match.params
      //const { recipe =[] } = this.context
      //const notesForFolder = getNotesForFolder(notes, folderId)
  
      const groceryLists = this.props.store.groceryLists
      return (
          (Object.keys(groceryLists)),
        <section className='GroceryLists'>
          <ul>
            

            
              <li key={groceryLists.id}>
                {groceryLists.name}
                {groceryLists.items}
              </li>
    }
              
            )}
          </ul>
        </section>
      )
    }
  
  }
  
  
  GroceryList.propType = {
    match: PropTypes.object.isRequired
  };