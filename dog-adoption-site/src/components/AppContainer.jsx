import React, {Component} from 'react'
import AvailableDogs from './AvailableDogs'
import AddAdoptionForm from './AddAdoptionForm'
class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            dogArray : []
        }
    }
    
    //callback function
    updateDogArray = (array) =>{
        
        this.state.dogArray.push(array)
        this.setState({dogArray :this.state.dogArray})
        
    }
   
    render() { 
        return ( 
            <div id = "AppContainer">

            <AvailableDogs  dogArray = {this.state.dogArray}/>
            <AddAdoptionForm updateDogArray = {this.updateDogArray}/>
            
            </div>
         );
    }
}
 
export default AppContainer;