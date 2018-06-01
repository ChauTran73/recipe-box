import React , {Component} from 'react';
import {Modal} from 'react-bootstrap/lib';
import {Form, FormControl, FormGroup, ControlLabel, HelpBlock, Button} from 'react-bootstrap/lib';


function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}
export class FormInput extends Component{
   
    render(){
        //if the 'show' props is false, render nothing
        if(!this.props.show) {
      return null;
    }
        return(
            <div className="static-modal">
                <Modal.Dialog>
                    <Modal.Header>
                        <Modal.Title>Add Recipe</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <Form>
                            <FieldGroup
                                id="recipe_name"
                                type="text"
                                label="Recipe Name"
                                placeholder="Enter Recipe Name"
                                value = {this.props.name}
                                onChange={this.props.handleNameChange} 
                        
                            />
                             <FormGroup id="formControlsTextarea">
                                <ControlLabel>Ingredients</ControlLabel>
                                <FormControl id = "ing" 
                                value = {this.props.ingredients} 
                                onChange={this.props.handleIngChange}
                                componentClass="textarea" placeholder="Enter Ingredients, separated, by commas" />
                            </FormGroup>
    
                        </Form>
                    </Modal.Body>

                    <Modal.Footer>
                    <Button onClick={this.props.onClose}>Close</Button>
                    <Button onClick ={this.props.handleSaveChanges} bsStyle="primary">Save Changes</Button>
                    </Modal.Footer>
                </Modal.Dialog>
            </div>
            );
    }
}

