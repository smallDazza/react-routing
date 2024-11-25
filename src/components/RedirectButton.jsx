import React, {Component} from "react";
import { Navigate } from "react-router-dom";

export default class RedirctButton extends Component {
    constructor(props){
        super(props);

        this.state = {
            shouldRedirect: false
        }
    }

    toggleShouldRedirect = () => {
        this.setState({shouldRedirect: !this.state.shouldRedirect});
    }
    
    render(){
        return(
            <>
                <button onClick={this.toggleShouldRedirect}>Go to the Home Page</button>
                {this.state.shouldRedirect && <Navigate to={"/"} />}
            </>
            

        )
    }
}

