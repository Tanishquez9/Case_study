const express = require('express');
const mongoose = require('mongoose');
const Registeruser = require('./model');
const Contacts = require('./model1');
const jwt = require('jsonwebtoken');
const middleware = require('./middleware');
const cors = require('cors');
const app = express();


mongoose.connect("mongodb+srv://sai:Bharadwaj008@cluster0.itlbcir.mongodb.net/?retryWrites=true&w=majority",{
    
}).then(
    () => console.log('DB Connected')
)

app.use(express.json());

app.use(cors({origin:"*"}));

app.post('/register',async (req, res) =>{
    try{
        const {username,email,password,confirmpassword} = req.body;
        let newUser = new Registeruser({
            username : 'Bharadwaj',
            email:'bhbonda@deloitte.com',
            password: 'Sai@123',
            confirmpassword :'Sai@123'
        })
        await newUser.save();
        res.status(200).send('Registered Successfully')

    }
    catch(err){
        console.log(err)
        return res.status(500).send('Internal Server Error')
    }
})

app.post('/login',async (req, res) => {
    try{
        const {email,password} = req.body;
        let exist = await Registeruser.findOne({email});
        if(!exist) {
            return res.status(400).send('User Not Found');
        }
        if(exist.password !== password) {
            return res.status(400).send('Invalid credentials');
        }
        let payload = {
            user:{
                id : exist.id
            }
        }
        jwt.sign(payload,'jwtSecret',{expiresIn:3600000},
          (err,token) =>{
              if (err) throw err;
              return res.json({token})
          }  
            )

    }
    catch(err){
        console.log(err);
        return res.status(500).send('Server Error')
    }
})

app.get('/myprofile',middleware,async(req, res)=>{
    try{
        let exist = await Registeruser.findById(req.user.id);
        if(!exist){
            return res.status(400).send('User not found');
        }
        res.json(exist);
    }
    catch(err){
        console.log(err);
        return res.status(500).send('Server Error')
    }
})
app.post('/add',async(req,res)=>{
    const {Name,Date_of_Birth,Address,City,Pincode,Mobile}=req.body;
    try{
        
        let addConatct= new Contacts({
            Name,Date_of_Birth,Address,City,Pincode,Mobile
            /*Name:'Sai',
            Date_of_Birth:'03-11-2000',
            Address:'32-11,Narendra Center',
            City:'Tanuku',
            Pincode:'534211',
            Mobile:'+91-8886542420'*/
            

        })
        await addConatct.save();
        res.status(200).send('Added Succesfully');
        return res.json(await addConatct.find())


    }
    catch(err){
        console.log(err);
        return res.status(500).send('internal error')

    }
    
})
app.get('/home',async(req,resp)=>{
    try{
        let data = await Contacts.find();
        
        resp.send(data)
        



    }
    catch(err){
        console.log(err)

    }
})
/*app.delete('/delete',async(req,resp)=>{
app.update/de
try{
    
}
    try{
         let 

    }
    catch(err){
        console.log(err);
    }

})*/
/*app.put('/update',async(req,res)=>{
    try{
        const {Name,Date_of_Birth,Address,City,Pincode,Mobile}=req.body;
        let editConatct= new Contacts({
            Name:'Sai',
            Date_of_Birth:'03-11-2000',
            Address:'32-11,Narendra Center,Velpur road',
            City:'Tanuku',
            Pincode:'534211',
            Mobile:'+91-8886542420'

        })
        await addConatct.save();
        res.status(200).send('Edited Succesfully')


    }
    catch(err){
        console.log(err);
        return res.status(500).send('internal error')

    }

}
)*/
app.listen(5000,()=>{
    console.log('Server running...')
})