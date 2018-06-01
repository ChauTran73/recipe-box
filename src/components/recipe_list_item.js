import React from 'react';
import {Panel, Button, ButtonToolbar} from 'react-bootstrap/lib';
import {RecipeDetails} from './recipe_details';

export const RecipeListItem = ({recipe,key,deleteRecipe, updateRecipe}) => {
    
    return (
        <Panel key={key}>
            <Panel.Heading>
              <Panel.Title toggle>{recipe.name}</Panel.Title>
            </Panel.Heading>
            <Panel.Body collapsible >
                <RecipeDetails ingredients ={recipe.ingredients}/>
                <ButtonToolbar>
                    <Button bsStyle="danger" onClick={() => deleteRecipe(key)}>Delete</Button>
                    <Button onClick={() => updateRecipe(key)}>Edit</Button>
                </ButtonToolbar>  
            </Panel.Body>
            
        </Panel>
        );
};
 