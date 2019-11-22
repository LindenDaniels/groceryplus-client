import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import './AddRecipeForm.css';


 class AddRecipe extends React.Component {
    
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
        
        if ((name === 'name') || (name === 'ingredients') || (name === 'instructions')) {
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
            console.log('form validation')
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
        const { name, instructions, ingredients} = this.state;
        
        const recipe = {
            name: name,
            instructions: instructions,
            ingredients: ingredients,
           
        }
        const STORE = this.props.store;
        const recipes = this.props.store.recipes
        
        recipes.push(recipe);
        this.props.history.push('/recipe-list');

        this.setState({error: null})
    };


    render() {
       
        return (
            <>
            <header>
                <h2>Add Recipe</h2>
            </header>
            
            <form 
                className="addrecipe-form"
                onSubmit={e => this.handleSubmit(e)}>
                <h2 className="title">Add Recipe</h2>
                <div className="form-section">
                  <label htmlFor="name">Recipe Name</label>
                  <input 
                    type="text" 
                    className="field"
                    name="name" 
                    id="name" 
                    aria-label="name"
                    aria-required="true"
                    placeholder="Tacos"
                    onChange={e => this.updateFormEntry(e)}
                    />
                </div>
                
                <div className="form-section">
                   <label htmlFor="instructions">Instructions</label>
                   <textarea
                        rows="15"
                        className="field"
                        name="instructions" 
                        id="instructions"
                        aria-label="Instructions"
                        aria-required="false"
                        onChange={e => this.updateFormEntry(e)}/>
                </div>
                <div className="form-section">
                  <label htmlFor="ingredients">Ingredients</label>
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
            </>
        )
    }
    }

    export default withRouter(AddRecipe);

