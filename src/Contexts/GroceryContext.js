import React from 'react'

const GroceryContext = React.createContext({
    recipes: [],
    groceryItems: [],
    toggle: false,
    API: 'STORE.js',
    /*deleteNote: () => {},
    deleteFolder: () => {},*/
    addRecipe: () => {},
    createGroceryList: () => {},
    toggleErrors: () => {},
    throwError: () => {},
    /*back: () => {}*/
})

export default GroceryContext