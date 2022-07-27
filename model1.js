const mongoose = require('mongoose');

let Contacts = new mongoose.Schema({
    Name :{
        type : String,
        required : true,
    },
    Date_of_Birth :{
        type : Date,
        required : true,
        
    },
    Address :{
        type : String,
        required:true,
    },
    City : {
        type : String,
        required : true,
    },
    Pincode:{
        type :String,
        required : true, 
    },
    Mobile :{
        type : String,
        required :true,
        unique: true,
    },
    Is_Deleted :{
        type : String,
        default : 0,
    },
})

module.exports = mongoose.model('Contacts',Contacts)