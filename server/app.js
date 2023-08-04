



const express=require("express");

const app=express();
const userrouting=require("./Routering/userRouting/userrouter");
const dbconnecting=require("./MonoDb/DBconnecting")
const adminrouter=require("./Routering/adminRouting/adminrouter")
const cors=require("cors")
const cookiparser=require("cookie-parser")
const session=require("express-session")




app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors())
app.use(cookiparser())
app.use(session({secret:"key", cookie:{maxAge:120000}}))         


  dbconnecting.dbconnecting()

   app.use("/user",userrouting)
   app.use("/admin",adminrouter)
  












app.listen(3001,()=>{

    console.log("server starting")

})



