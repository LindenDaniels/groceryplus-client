import React, { Component } from 'react'

const FolderContext = React.createContext({
  Folder: [],
  error: null,
  setError: () => {},
  clearError: () => {},
  setFolder: () => {},
})
export default FolderContext

export class FolderProvider extends Component {
  state = {
    Folder: [],
    error: null,
  };

  setFolder = Folder => {
    this.setState({ Folder })
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
      folder: this.state.folder,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setFolder: this.setFolder,
    }
    return (
      <FolderContext.Provider value={value}>
        {this.props.children}
      </FolderContext.Provider>
    )
  }
}