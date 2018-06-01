import React, {Component} from 'react';
import {PanelGroup} from 'react-bootstrap/lib';
import {RecipeListItem} from './recipe_list_item';


export class RecipeList extends Component {
    deleteRecipe(key){
       this.props.deleteRecipe(key);
   }
   updateRecipe(recipe){
       this.props.updateRecipe(recipe);
   }
   render(){
    const recipeItems = this.props.recipes.map((recipe,i) => {
        return <RecipeListItem key={i} recipe ={recipe} deleteRecipe={this.deleteRecipe.bind(this,recipe)}
            updateRecipe = {this.updateRecipe.bind(this, i)}
        />;
    });
    return (
        <PanelGroup accordian="true" id={1}> 
            {recipeItems}
        </PanelGroup>
    );
}
}



