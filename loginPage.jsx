import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class LoginPage extends Component {
    render() {
        return(
         <div>
         <Heading/>
         <LoginDetails/>   
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
class LoginDetails extends Component {

    handleSubmit (event) {
        alert('User has logged in');
        event.preventDefault();
    }

    handlebuttonSignup() {
        alert ("User wants to register");
    }

    render() {
        var LoginStyle = {
        display:'inline-block',
        margin:80,
        marginLeft: 425,
        height:350,
        width:400,
        padding:0,
        textAlign:'center',
        backgroundColor:"#FFF",
        WebkitFilter: "drop-shadow(0px 0px 5px #555)",
        filter: "drop-shadow(0px 0px 5px #555)"
        }

        return(
            <form style={LoginStyle} onSubmit = {this.handleSubmit}>
         <h2>Welcome Back!</h2>
         <p>Username</p>
         <input type="text" required/>
         <p>Password</p>
         <input type="password" required/>
         <br/><br/>
         <input type="submit" value="Login"/>
         <p>Are you new here?</p>
         <button onClick = {this.handlebuttonSignup}>Sign Up</button>
         </form>
        );
    }
}

//export default LoginPage;