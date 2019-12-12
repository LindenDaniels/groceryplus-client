import React, { Component } from 'react'

const ListContext = React.createContext({
  lists: [],
  error: null,
  setError: () => {},
  clearError: () => {},
  setList: () => {},
})
export default ListContext

export class ListProvider extends Component {
  state = {
    lists: [],
    error: null,
  };

  setList = lists => {
    this.setState({ lists })
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
      lists: this.state.lists,
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