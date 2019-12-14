import React, { Component } from 'react'
import GroceryList from '../IndividualGroceryList/IndividualGroceryList'
import ListService from '../Services/ListService'
import ListContext from '../Contexts/ListContext'

class ContainerIndividualGroceryList extends React.Component {
    static defaultProps = {
        match: {
          params: {
              listId: this.props.lists.id
          }
        }
      }
    componentDidMount() {
      ListService.getList(this.props.match.params.listId)
        .then(this.context.setList)
        .catch(this.context.setError)
    }
  
    render() {
      const list = this.context.lists.find(list => +list.id === +this.props.match.params.listId)
      return <GroceryList {...list} />
    }
  }

  export default ContainerIndividualGroceryList;