import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class SignUp extends Component {
    render() {
        return(
         <div>
         <Heading/>
         <SignUpDetails/>   
         </div>   
        );
    }
}

//heading (child) class element
class Heading extends Component {
    render() {
        var HeadingStyle = {
            margin:15,
            height:40,
            textAlign:'center',
            backgroundColor: 'Pink'
        }
        return(
            <div style={HeadingStyle}>
         <h1>Customer Management System</h1>
        </div>
        );
    }
}

 //login details (child) class element
class SignUpDetails extends Component {

    handleSubmit (event) {
        alert('User has registered');
        event.preventDefault();
    }

    render() {
        var SignUpStyle = {
        display:'inline-block',
        margin:80,
        marginLeft: 425,
        height:420,
        width:400,
        padding:0,
        textAlign:'center',
        backgroundColor:"#FFF",
        WebkitFilter: "drop-shadow(0px 0px 5px #555)",
        filter: "drop-shadow(0px 0px 5px #555)"
        }

        return(
            <form style={SignUpStyle} onSubmit = {this.handleSubmit}>
         <h2>Thank you for signing up!</h2>
         <p>Enter Name</p>
         <input type="text" required/>
         <p>Enter Username</p>
         <input type="text" required/>
         <p>Enter Email Id</p>
         <input type="email" required/>
         <p>Enter Password</p>
         <input type="password" required/>
         <br/><br/>
         <input type="submit" value="Sign Up"/>
         </form>
        );
    }
}

export default SignUp;