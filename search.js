import React, {Component} from 'react';
import { Link } from "react-router-dom";

class SearchCustomer extends Component {
    constructor() {
        super()
        this.state = {
            searchData:null,
            noData:false

        }
    }
    search(key)
    {
        console.warn(key);
        fetch ("http://localhost:8000/posts?q="+key).then ((data)=>{
            data.json().then((resp)=> {
                console.warn("resp",resp)
                if (resp.length>0)
                {
                    this.setState({searchData:resp, noData:false})
                }
                else{
                    this.setState({noData:true, searchData:null})
                }
                
            })
        })
    }
   
    render() {
        return (
        <div>
           <div className="App">
            <h1>Contact Management System</h1>
            </div>
            <input type = "text" className="seacrhBar" placeholder="Search Contact" onChange={(e) => this.search(e.target.value)}/>
           <Link to="/table"> <button className="tablebutton">Back</button></Link>
         <div>
            {
                this.state.searchData?
                <div>
                    {
                        this.state.searchData.map((item)=>
                        <div>
                            <table className="table">
                            <tbody>
          <tr className="tableheader">
            <td>ID</td>
            <td>Name</td>
            <td>Date_Of_Birth</td>
            <td>Address</td>
            <td>City</td>
            <td>PinCode</td>
            <td>Mobile</td>
            
          </tr>
                           <td> {item.id}</td>
                           <td> {item.name}</td>
                           <td> {item.dateofbirth}</td>
                           <td> {item.address}</td>
                           <td> {item.city}</td>
                           <td> {item.pincode}</td>
                           <td> {item.mobile}</td>
                            </tbody>
                            </table>
                        </div>)
                    }
                </div>
                :" "
            }
            {
                this.state.noData?<h3>No Data available</h3>:null
            }
         </div>
           </div>
        );
    }
}

export default SearchCustomer;
