import React from 'react';
import './LandingPage.css';

export default function LandingPage() {
    return (
 
  <>
    
    
    <section className = "landing-section">
      <header className="landing-header">
        <h1>Grocery Plus</h1>
        <h2>The grocery list with a twist.</h2>
        <img src="https://i.ibb.co/PmZ6PNr/food-1932466.jpg" alt="food"></img>
      </header>
    </section>
      <section className="landing-section">
        <header>
            <h3>Meal Planning and a Grocery List</h3>
        </header>
        <img src="https://i.ibb.co/xg5wT8x/Screen-Shot-2020-01-05-at-9-00-19-PM.png" alt="recipe interface"/>
        <p>Grocery Plus allows you to add recipes, and add grocery and non-grocery items to a grocery list.</p>
      </section>
      <section className="landing-section">
        <header>
            <h3>All-In-One Grocery List</h3>
        </header>
        <img src="https://i.ibb.co/5kq45CJ/Screen-Shot-2020-01-05-at-9-02-44-PM.png" alt="a grocery list"></img>
        <p>Now you can do all your shopping without having to switch apps!</p>
      </section>
      <section className="landing-section">
        <header>
            <h3>Add Your Own Recipes</h3>
        </header>
        <img src="https://i.ibb.co/Rjx7mrx/Screen-Shot-2020-01-05-at-8-53-14-PM.png" alt="Add recipe interface"></img>
        <p>Add your own recipes!</p>
      </section>

    </>

  )}