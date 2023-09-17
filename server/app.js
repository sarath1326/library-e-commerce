


require('dotenv').config()
const express=require("express");
const app=express();
const userrouting=require("./Routering/userRouting/userrouter");
const dbconnecting=require("./MonoDb/DBconnecting")
const adminrouter=require("./Routering/adminRouting/adminrouter")
const cors=require("cors");
const cookiparser=require("cookie-parser");
const session=require("express-session");
const bodyparser =require ("body-parser");

const port=process.env.PORT




app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(bodyparser.urlencoded({extended:true}));
app.use(cors({
    
  origin:["http://localhost:3000"],
  methods:["GET","POST","DELETE"],
  credentials:true
}));




app.use(cookiparser());


  dbconnecting.dbconnecting();

   app.use("/user",userrouting);
   app.use("/admin",adminrouter);

   
  

  app.listen(port,()=>{

    console.log("server starting",port)

})



