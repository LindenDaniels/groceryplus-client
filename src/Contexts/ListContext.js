import React, { Component } from 'react'

const ListContext = React.createContext({
  list: [],
  listId: '',
  error: null,
  setError: () => {},
  clearError: () => {},
  setList: () => {},
})
export default ListContext

export class ListProvider extends Component {
  state = {
    list: [],
    listId: '',
    error: null,
  };

  setList = list => {
    this.setState({ list })
      }

  setError = error => {
    console.error(error)
    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
  }

  render() {
    const value = {
      list: this.state.list,
      listId: this.state.listId,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setList: this.setList,
    }
    return (
      <ListContext.Provider value={value}>
        {this.props.children}
      </ListContext.Provider>
    )
  }
}