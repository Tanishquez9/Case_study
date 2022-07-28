import React, {useState} from 'react';
import { Link } from "react-router-dom";

function Add() {

    const [name, setName]=useState("");
    const [dateofbirth, setDateofbirth]=useState("");
    const [address, setAddress]=useState("");
    const [city, setCity]=useState("");
    const [pincode, setPincode]=useState("");
    const [mobile, setMobile]=useState("");
    
    function saveUser() {
        console.warn({name, dateofbirth, address, city, pincode, mobile});
        let data={name,dateofbirth, address, city, pincode, mobile}

  fetch("http://localhost:8000/posts", {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body:JSON.stringify(data)
  }).then((resp)=>{
    
    resp.json().then((result)=>{
      console.warn("result",result)
    })
  })
}
    return (
        <div>
                <div className="App">
                  <h1>Contact Management System</h1>
                </div>
                <div className="AddBar">       
          <input type="text" className="AddBar2" value={name} placeholder="Enter name" onChange={(e) => {setName(e.target.value)}} name="name" required/> <br /> <br />
          <input type="text" className="AddBar2" value={dateofbirth} placeholder="Enter date of birth" onChange={(e) => {setDateofbirth(e.target.value)}} name="date of birth"/> <br /> <br />
          <input type="text" className="AddBar2" value={address} placeholder="Enter address" onChange={(e) => {setAddress(e.target.value)}} name="address"/> <br /> <br />
          <input type="text" className="AddBar2" value={city} placeholder="Enter city" onChange={(e) => {setCity(e.target.value)}} name="city"/> <br /> <br />
          <input type="text" className="AddBar2" value={pincode} placeholder="Enter pincode" onChange={(e) => {setPincode(e.target.value)}} name="pincode"/> <br /> <br />
          <input type="text" className="AddBar2" value={mobile} placeholder="Enter mobile number" onChange={(e) => {setMobile(e.target.value)}} name="mobile"/> <br /> <br />
          <div className="addbuttonsave">
          <Link to="/table"><button type="button" className="tablebutton2" onClick={saveUser}>Save New User</button></Link>
          <Link to="/table"><button type="button" className="tablebutton2">Back</button></Link>
          </div>
          </div>
        </div>
      );

}
export default Add;
