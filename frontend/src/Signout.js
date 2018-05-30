import React, {Component} from 'react';
import './App.css';
import { Button } from 'reactstrap';



class SignOutButton extends Component {
	constructor(props) {
		super(props);

		// this.handleClick = this.handleClick.bind(this);

		function handleClick(e) {
			e.preventDefault();
			console.log("Logout button clicked");
		}
	}	
	render(){
		return(
		  <Button 
		  	type="submit"
		    className="navbut"
		    onClick={this.handleClick}
		  >
		    Sign Out
		  </Button>
		)
	}	  
}  

export default SignOutButton;