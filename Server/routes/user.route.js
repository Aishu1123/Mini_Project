const express = require("express")
const {userModel} = require("../model/user.model")
const bcrypt = require("bcrypt")
const userRouter = express.Router()
const jwt = require("jsonwebtoken")
// All User Data
userRouter.get("/users", async (req, res) => {
  try {
   
    const users = await userModel.find();
    res.status(200).send({ msg: "All User's Data", users });
  
  } catch (err) 
  {
    res.status(400).send({ msg: err });
  }
});

// Registration a new user
userRouter.post("/register" , (req,res)=>{
   const {username ,email,DOB, role,location,password }=req.body
  try{ 
    bcrypt.hash(password,4, async (err, hash)=> {
      if(err){
        res.status(400).send({ msg: "Internal Server Error" });
      }else{
        const user = new userModel({username, email, DOB, role, location, password:hash});
        await user.save();
        res.status(200).send({ msg: "New user has been registered" });
      }
  });
   } catch (err) 
  {
    res.status(400).send({ msg: "Internal Server Error" });
  }
})

// Authenticating the existing user

userRouter.post("/login" , async(req,res)=>{
  const{email,password} = req.body
  try{ 
    const user = await userModel.findOne({email});
    bcrypt.compare(password,user.password,(err, result)=> {
      // result == true
      if(result){
        res.status(200).send({ msg: "Login Sucessfully..","token": jwt.sign({ project: 'mini' }, 'masai') })
      }else{
        res.status(400).send({ msg: "User does not exits, please register" });
      }
  });
   } catch (err) 
 {
   res.status(400).send({ msg: "Internal Server Error" });
 }
})

// restricted routes
userRouter.get("/products",(req,res)=>{
  const{token} =req.query
  jwt.verify(token, 'masai',(err,decoded)=>{
      if(decoded){
          res.send({"msg":"Product Data"})  
      }else{
          res.send({"msg":"You are not authorised !"})  
      }
  });
})

userRouter.get("/series",(req,res)=>{
  const{token} =req.query
  jwt.verify(token, 'masai',(err,decoded)=>{
      if(decoded){
          res.send({"msg":"Series Data"})  
      }else{
          res.send({"msg":"You are not authorised !"})  
      }
  });
  
})
module.exports={
    userRouter
}