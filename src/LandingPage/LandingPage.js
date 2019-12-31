import React from 'react';
import './LandingPage.css';

export default function LandingPage() {
    return (
 
  <>
    
    
    <section className = "landing-section">
      <header className="landing-header">
        <h1>Grocery Plus</h1>
        <h2>The grocery list with a twist.</h2>
      </header>
    </section>
      <section className="landing-section">
        <header>
            <h3>Meal Planning and a Grocery List</h3>
        </header>
        <p>[<em>placeholder for screenshot of a recipe</em>]</p>
        <p>Grocery Plus allows you to schedule meals, add recipes, and add grocery and non-grocery items to a grocery list.</p>
      </section>
      <section className="landing-section">
        <header>
            <h3>All-In-One Grocery List</h3>
        </header>
        <p>[<em>placeholder for screenshot of grocery list interface</em>]</p>
        <p>Now you can do all your shopping without having to switch apps!</p>
      </section>
      <section className="landing-section">
        <header>
            <h3>Add Your Own Recipes</h3>
        </header>
        <p>[<em>placeholder for screenshot of recipe adding form</em>]</p>
        <p>Add your own recipes!</p>
      </section>

    </>

  )}