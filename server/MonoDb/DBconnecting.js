

const mongoose=require("mongoose")
require('dotenv').config()




module.exports.dbconnecting=()=>{

   const atlas="mongodb+srv://sarathsarath93366:sarath1937@cluster0.dsvkevb.mongodb.net/?retryWrites=true&w=majority"


mongoose.connect(atlas)
  
   .then(() => console.log("mongoDB connecting ok")
   
   ).catch(err=>{

      console.log("monogoDB connecting err",err)
   })


}


