const express =require("express")
const { connection } = require("./config/db")
const { userRouter } = require("./routes/user.route")
require("dotenv").config()
const cors = require("cors")


const app = express()
app.use(express.json())
app.use(cors())
app.use("/", userRouter)

app.get("/about",(req,res)=>{
    res.send({"msg":"About Us"})
})


app.listen(process.env.PORT,async()=>{
    try{
        await connection
        console.log(`Server is running at http://localhost:${process.env.PORT}`)
      console.log("Database is Connected")
    }
    catch(err){
     console.log("error:",err)
    }
   
})