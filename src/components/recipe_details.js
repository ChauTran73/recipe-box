import React from 'react';
//display the ingredients here

export const RecipeDetails = (recipe) => {
    return (
        <ul>
            {recipe.ingredients.map((item, i) => (
                <li key={i}>{item}</li> 
            ))}
          
           
        </ul>
        );
};
