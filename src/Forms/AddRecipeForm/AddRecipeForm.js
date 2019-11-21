import React from 'react';

import { get } from 'http';
export default class AddRecipe extends React.Component {
    state = {
        name: "",
        ingredients: "",
        instructions: "",
        formValid: false,
        nameValid: false,
        ingredientsValid: false,
        instructionsValid: false,
        validationMessage: null
    }

updateFormEntry(e) {       
        const name = e.target.name;
        const value = e.target.value;
        
        /*if (e.target.selectedOptions) {
            id = e.target.selectedOptions[0].id;
            this.setState({
                'folderId': id 
            })
        }*/
        this.setState({
            [e.target.name]: e.target.value,
            
        }, () => {this.validateEntry(name, value)});
    }

    validateEntry(name, value) {
        let hasErrors = false;

        value = value.trim();
        
        if ((name === 'recipe-name') || (name === 'ingredients') || (name === 'instructions')) {
            if (value.length < 1) {
                hasErrors = true
            } 

            else {
                hasErrors = false
            }
        }
        
        this.setState({
            [`${name}Valid`]: !hasErrors,
        }, this.formValid );
    }

    formValid() {
        const { nameValid, ingredientsValid, instructionsValid } = this.state;
        if (nameValid && ingredientsValid && instructionsValid === true){
            this.setState({
                formValid: true,
                validationMessage: null
            });
        }
        else {this.setState({
            formValid: !this.formValid,
            validationMessage: 'All fields are required.'
        })}
      }

   /* handleSubmit(e) {
        e.preventDefault();
        const { name, instructions, ingredients  } = this.state;
        const recipe = {
            name: name,
            instructions: instructions,
            ingredients: ingredients,
            //modified: new Date()
        }

        this.setState({error: null})


        GET(STORE), {
            method: 'POST',
            body: JSON.stringify(recipe),
            headers: {
                'content-type': 'application/json'
            }
        }
        .then(res => {
            if (!res.ok) {
                return res.json().then(err => {
                    console.log(`Error is: ${err}`)
                    throw err
                })
            }
            return res.json()
        }
        .then(data => {
            this.goBack()
            this.context.addRecipe(data)
        })
        .catch(err => {
            this.setState({ err })
        });
    };*/

    handleSubmit(e) {
        e.preventDefault();
        const { recipe_name, instructions, ingredients} = this.state;
        const recipe = {
            name: recipe_name,
            instructions: instructions,
            ingredients: ingredients,
           
        }
        const STORE = this.props.store;
        
        STORE.recipes.map.then(recipe =>
            this.props.store.push(recipe));
        this.setState({error: null})
    };


    render() {
       
        return (
            
            <form 
                className="addrecipe-form"
                onSubmit={e => this.handleSubmit(e)}>
                <h2 className="title">Add Recipe</h2>
                <div className="form-group">
                  <label htmlFor="recipe-name">Recipe Name</label>
                  <input 
                    type="text" 
                    className="field"
                    name="recipe-name" 
                    id="recipe-name" 
                    aria-label="recipe-name"
                    aria-required="true"
                    placeholder="Tacos"
                    onChange={e => this.updateFormEntry(e)}/>
                </div>
                <div className="form-group">
                   <label htmlFor="instructions">Instructions</label>
                   <textarea 
                        className="field"
                        name="instructions" 
                        id="instructions"
                        aria-label="Instructions"
                        aria-required="false"
                        onChange={e => this.updateFormEntry(e)}/>
                </div>
                <div className="form-group">
                  <label htmlFor="ingredients">Ingredient</label>
                  <input 
                    type="text" 
                    className="field"
                    name="ingredients" 
                    id="ingredients" 
                    aria-label="ingredients"
                    aria-required="true"
                    placeholder="Almond Milk"
                    onChange={e => this.updateFormEntry(e)}/>
                    <input 
                    type="text" 
                    className="field"
                    name="ingredients" 
                    id="ingredients-1" 
                    aria-label="ingredients"
                    aria-required="true"
                    placeholder="Almond Milk"
                    onChange={e => this.updateFormEntry(e)}/>
                    <input 
                    type="text" 
                    className="field"
                    name="ingredients" 
                    id="ingredients-2" 
                    aria-label="ingredients"
                    aria-required="true"
                    placeholder="Almond Milk"
                    onChange={e => this.updateFormEntry(e)}/>
                    <input 
                    type="text" 
                    className="field"
                    name="ingredients" 
                    id="ingredients-3" 
                    aria-label="ingredients"
                    aria-required="true"
                    placeholder="Almond Milk"
                    onChange={e => this.updateFormEntry(e)}/>
                    <input 
                    type="text" 
                    className="field"
                    name="ingredients" 
                    id="ingredients-4" 
                    aria-label="ingredients"
                    aria-required="true"
                    placeholder="Almond Milk"
                    onChange={e => this.updateFormEntry(e)}/>
                </div>
                <div className="buttons">
                 <button 
                    type="button" 
                    className="button"
                    //onClick={()=> this.goBack()}
                    >
                     Cancel
                 </button>
                 <button 
                    type="submit" 
                    className="button"
                    disabled={!this.state.formValid}>
                     Save
                 </button>
                </div>
            </form> 
        )
    }
    }

