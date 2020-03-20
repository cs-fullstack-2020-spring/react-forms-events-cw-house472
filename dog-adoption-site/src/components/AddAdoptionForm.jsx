import React, {Component} from 'react'
class AddAdoptionForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            dogName:"",
            dogAge: "",
            dogBreed: "",
            // pottyTrained : false,
            dogColor: ""
         }
    }
    handleSubmission = (event) => {
        event.preventDefault();
        this.props.updateDogArray(this.state)
        
        this.setState({
            dogName:"",
            dogAge: "",
            dogBreed: "",
            // pottyTrained : false,
            dogColor: ""
        })
    }
  
    handleChange = (event) => {
        if(event.target.name == "dogName"){
            this.setState({dogName : event.target.value})
        }
        else if (event.target.name == "dogAge"){
            this.setState({dogAge : event.target.value})
        }
         else if(event.target.name == "dogBreed"){
            this.setState({dogBreed : event.target.value})
        }
        // else if(event.target.name == "pottyTrained"){
        //     this.setState({pottyTrained : event.target.value})
        // }
        else if(event.target.name == "dogColor"){
            this.setState({dogColor : event.target.value})
        }
    
    
    
    
    
    
    
    }
    render() { 
        return ( 
            <div id = "adoption">
                {/* TOFIX FORM FIELD NOT ALLOWING TYPING */}
                <form action="">
                    <fieldset>
                        <legend>Adoption Form</legend>

                        <label htmlFor="">Dog Name</label>
                        <input type="text" name="dogName" id="dogName" onClick = {this.handleChange} value = {this.state.dogName}/>

                        <label htmlFor="">Dog Age</label>
                        <input type="text" name="dogAge" id="dogAge"onClick = {this.handleChange} value = {this.state.dogAge}/>

                        <label htmlFor="">Dog Breed</label>
                        <input type="text" name="dogBreed" id="dogBreed"onClick = {this.handleChange} value = {this.state.dogBreed}/>

                        {/* <label htmlFor="">Potty Trained</label>
                        <input type="checkbox" name="pottyTrained" id="pottyTrained"onClick = {this.handleChange} value = {this.state.pottyTrained}/> */}

                        <label htmlFor="">Dog Color</label>
                        <select name="color" id="color" onClick = {this.handleChange} value = {this.state.dogColor}>
                            <option value="">--</option>
                            <option value="brown">Brown</option>
                            <option value="black">Black</option>
                            <option value="other">Other</option>
                        </select>
                        <button onClick ={this.handleSubmission} >Submit</button>
                    </fieldset>
                </form>
                
            </div>
         );
    }
}
 
export default AddAdoptionForm;