import React from 'react';
import {useState} from 'react';
import I from './in.js';
const Recipe = ({title, calories, ingredients, image, time, more}) => {
    
    if(time===0)
        time="__";
    let [state,setState]=useState(false);
    // var animateButton = function(e) {

    //     e.preventDefault();
    //     //reset animation
    //     e.target.classList.remove('animate');
        
    //     e.target.classList.add('animate');
    //     setTimeout(function(){
    //       e.target.classList.remove('animate');
    //     },700);
    //   };
      
    // const f1=(e)=>{
    //     // var classname = document.getElementsByClassName("bubbly-button");
    //     // document.getElementsByClassName("confetti-button").addEventListener('click', animateButton, false);
    //     // animateButton(e);
    //     b(e);
    // }
    const f2=()=>{
        setState(!state);
    }
    // const f=(e)=>{
    //     b(e);
    //     f2();
    // }
        return (
        <div className="main">
            <h1>{title}</h1>
            <p><b><span>Total Time-{time}min</span>  calories-{calories.toFixed(2)}Kcal</b></p>
            <div>
                <button className="confetti-button"  onClick={f2}>Ingredients</button>
                { state && <I ingredients={ingredients}/>}
                <img id="src" src={image} alt=""/>
            </div>
            <div><a id="more" href={more} target="_blank" rel="noopener noreferrer">View Recipe</a></div>
        </div>
    );
}

export default Recipe;