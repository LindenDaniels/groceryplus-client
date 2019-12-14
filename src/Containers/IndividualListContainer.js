import React, { Component } from 'react'
import GroceryList from '../IndividualGroceryList/IndividualGroceryList'
import ListService from '../Services/ListService'
import ListContext from '../Contexts/ListContext'

class ContainerIndividualGroceryList extends React.Component {
    static contextType = ListContext;
    
    componentDidMount() {
      ListService.getList(this.props.match.params.list_id)
        .then(list => this.context.setList([list]))
        .catch(this.context.setError)
    }
  
    render() {
      const list = this.context.lists.find(list => +list.id === +this.props.match.params.list_id)
      return <GroceryList {...list} />
    }
  }

  export default ContainerIndividualGroceryList;