import React from 'react';
let i=0;
const I=({ingredients}) =>{
    return(
    <ol>
        {ingredients.map(ingredient => (
            <li key={i++}>{ingredient.text}  ({ingredient.weight.toFixed(1)}grams)</li>
        ))}
    </ol>
    );
}
 export default I;