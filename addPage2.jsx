import React, {Component} from 'react';
import ReactDOM from 'react-dom';


class AddPage extends Component {
    render() {
        return(
         <div>
         <Heading/>
         <AddPageDetails/>   
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
class AddPageDetails extends Component {

    handleSubmit (event) {
        alert('User has registered');
        event.preventDefault();
    }

    render() {
        var AddPageStyle = {
        display:'inline-block',
        margin:60,
        marginLeft: 425,
        height:500,
        width:400,
        padding:0,
        textAlign:'center',
        backgroundColor:"#FFF",
        WebkitFilter: "drop-shadow(0px 0px 5px #555)",
        filter: "drop-shadow(0px 0px 5px #555)",
        }

        return(
            <form style={AddPageStyle} onSubmit = {this.handleSubmit}>
         <p>Name</p>
      <input type="text"></input><br></br>
      <p>Date of Birth</p>
      <input type="date"></input><br></br>
      <p>Address Line</p>
      <input type="text"></input><br></br>
      <p>City</p>
      <input type="text"></input><br></br>
      <p>PinCode</p>
      <input type="text"></input><br></br>
      <p>Mobile</p>
      <input type="text"></input><br></br><br></br>
      <button type="submit">Create User</button>
         </form>
        );
    }
}

export default AddPage;