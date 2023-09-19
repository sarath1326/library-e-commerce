

const mongoose=require("mongoose")
require('dotenv').config()




module.exports.dbconnecting=()=>{

   const atlas="mongodb+srv://sarathpm:Mx4R45dxG5NvZuP2@cluster0.dsvkevb.mongodb.net/?retryWrites=true&w=majority"

   const connectingParams={
      useNewUrlParser:true,
      useUnifiedTopology:true
   }


mongoose.connect(atlas,connectingParams)
  
   .then(() => console.log("mongoDB connecting ok")
   
   ).catch(err=>{

      console.log("monogoDB connecting err",err)
   })


}


