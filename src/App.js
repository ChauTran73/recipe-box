import React, { Component } from 'react';
import {FormInput} from './components/form';
import {RecipeList} from './components/recipe_list';
import {Button} from 'react-bootstrap/lib';
import './App.css';




class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      recipes:[{name:'Pumpkin Pie',ingredients:['Pumpkin Puree','Condensed Milk','Egg','Pumpkin Spice Pie','Pie Crust']},
      {name:'Spaghetti',ingredients:['Noodle','Tomato Sauce','Meatballs']},
      {name:'Onion Pie',ingredients:['Onions','Pie Crust']}],
      isOpen: false,
      curName : "",
      curIng : [],
      curIndex: -1
     
      };
    this.deleteRecipe = this.deleteRecipe.bind(this);
    this.updateRecipe = this.updateRecipe.bind(this);
    this.addNewRecipe = this.addNewRecipe.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleIngChange = this.handleIngChange.bind(this);
    this.handleSaveChanges = this.handleSaveChanges.bind(this);
    
  }
  
  
  toggleModal= (index,open) => {
    const indexExist = index > -1;
    this.setState({
      isOpen: open,
      curIndex: index,
      curName: indexExist ? this.state.recipes[index].name : '',
      curIng: indexExist ? this.state.recipes[index].ingredients : [],
    });
    
  }
  
  addNewRecipe(name, ingredients){
    
    //add a new recipe object to the existing array
    this.state.recipes.push({name,ingredients});
  
  //update the state
    this.setState({
    recipes: this.state.recipes
    });
  
   
  }
  
  deleteRecipe(key){
      this.setState(prevState => ({
          recipes: prevState.recipes.filter(recipe => recipe !== key )
      }));
   }
   
   updateRecipe(index){
   this.toggleModal(index, true);
  }

  handleNameChange(e){
    this.setState({curName: e.target.value});
  }

  handleIngChange(e){
    this.setState({curIng: e.target.value.replace(/\s/g,' ').split(",")});
  }

  handleSaveChanges(){
    const index = this.state.curIndex;
    const indexExist = index > -1;
    const name = this.state.curName;
    const ing = this.state.curIng;
    //if a blank form, then add new recipe
    if(!indexExist) this.addNewRecipe(name, ing)
    else{ //otherwise populate the form with the existing recipe object
      const recipes = this.state.recipes.slice();
      recipes[index] = {
        name: this.state.curName,
        ingredients: this.state.curIng,
      }
      this.setState({
        recipes: recipes,
      })
    }
    this.toggleModal(-1, false);
    }
   
   
  
  render() {
    return (
      <div className="container">
        <header className="jumbotron">
            <h1>Your Recipe Box </h1>
        </header>
        <RecipeList recipes = {this.state.recipes} deleteRecipe={this.deleteRecipe} 
        updateRecipe = {this.updateRecipe}/>
        <Button onClick = {()=>{this.toggleModal(-1,true)}} bsStyle="primary"> Add Recipe </Button>
        <FormInput show={this.state.isOpen} 
          handleNameChange={this.handleNameChange}
          handleIngChange={this.handleIngChange}
          handleSaveChanges={this.handleSaveChanges}
          onClose={()=> this.toggleModal(-1, false)} 
          onAddRecipe={this.addNewRecipe}
          name={this.state.curName}
          ingredients={this.state.curIng}/>
      </div> 
    );
  }
}

export default App;

