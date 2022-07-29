import React from "react"
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react'

const Table =()=>{

  const [users, setUser] = useState([])
  const [name, setName] = useState("");
  const [dateofbirth,setDateofbirth] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState("");
  const [mobile, setMobile] = useState("");
  const [userId,setUserId]=useState(null)

  useEffect(() => {
    getUsers();
  }, [])
  function getUsers() {
    fetch("http://localhost:8000/posts").then((result) => {
      result.json().then((resp) => {
        // console.warn(resp)
        setUser(resp)
        setName(resp[0].name)
        setDateofbirth(resp[0].dateofbirth)
        setCity(resp[0].city)
        setPincode(resp[0].pincode)
        setMobile(resp[0].mobile)
        setAddress(resp[0].address)
        setUserId(resp[0].id)
      })
    })
  }

  function deleteUser(id) {
    fetch(`http://localhost:8000/posts/${id}`, {
      method: 'DELETE'
    }).then((result) => {
      result.json().then((resp) => {
        console.warn(resp)
        getUsers()
      })
    })
  }
  function selectUser(id)
  {
    let item=users[id-1];
        setName(item.name)
        setDateofbirth(item.dateofbirth)
        setAddress(item.address)
        setCity(item.city)
        setPincode(item.pincode)
        setMobile(item.mobile)
        setUserId(item.id)
  }
  function updateUser()
  {
     let item={name,dateofbirth,address,city,pincode,mobile}
     console.warn("item",item)
     fetch(`http://localhost:8000/posts/${userId}`, {
      method: 'PUT',
      headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
          },
          body:JSON.stringify(item)
    }).then((result) => {
      result.json().then((resp) => {
        console.warn(resp)
        getUsers()
      })
    })
  }
  function TestsFunction() {
    var T = document.getElementById("TestsDiv");
    T.style.display = "block";  
}
function HideEdit(){
  var a= document.getElementById("TestsDiv");
  a.style.display="none";
}

    return(
      <div>
      <div className="App">
      <h1>Contact Management System</h1>
      </div>
      <div>
      {/* <input type="text" className="seacrhBar" placeholder="Search User"/> */}
      <div className="searchButton">
      <Link to="/search"><button className="tablebutton " >Search</button></Link>
      <Link to="/Add"><button className="tablebutton">Add</button></Link>
      </div>
      <table className="table">
        <tbody>
          <tr className="tableheader">
            <td>ID</td>
            <td>Name</td>
            <td>Date Of Birth</td>
            <td>Address</td>
            <td>City</td>
            <td>Pincode</td>
            <td>Mobile</td>
            <td>Operations</td>
          </tr>
          {
            users.map((item, i) =>
              <tr key={i}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.dateofbirth}</td>
                <td>{item.address}</td>
                <td>{item.city}</td>
                <td>{item.pincode}</td>
                <td>{item.mobile}</td>
                <td><button className="buttonstyle" onClick={() => deleteUser(item.id)}>Delete</button>
                <div onClick={TestsFunction}><button className="buttonstyle" onClick={() => selectUser(item.id)}>Edit</button></div>
                </td>
              </tr>
            )
          }
        </tbody>
      </table>
      <div id="TestsDiv" className="AddBar">
        <p className="textStyle">Name:</p>
      <input type="text"  className="AddBar2" value={name} onChange={(e)=>{setName(e.target.value)}} /> <br /><br />
      <p className="textStyle">Date of Birth:</p>
      <input type="text"  className="AddBar2" value={dateofbirth} onChange={(e)=>{setDateofbirth(e.target.value)}} /> <br /><br />
      <p className="textStyle">Address:</p>
        <input type="text"  className="AddBar2" value={address} onChange={(e)=>{setAddress(e.target.value)}} /> <br /><br />
        <p className="textStyle">City:</p>
        <input type="text"  className="AddBar2" value={city} onChange={(e)=>{setCity(e.target.value)}} /> <br /><br />
        <p className="textStyle">Pincode:</p>
        <input type="text"  className="AddBar2" value={pincode} onChange={(e)=>{setPincode(e.target.value)}} /> <br /><br />
        <p className="textStyle">Mobile Number:</p>
        <input type="text"  className="AddBar2" value={mobile}  onChange={(e)=>{setMobile(e.target.value)}} /> <br /><br />
        <div onClick={HideEdit}><button className="tablebutton3" onClick={updateUser} >Update User</button></div>
      </div>
    </div>   
    </div>  
    )
};

export default Table;
