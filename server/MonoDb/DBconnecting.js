

const mongoose=require("mongoose")


module.exports.dbconnecting=()=>{

mongoose.connect('mongodb://127.0.0.1:27017/libraryDB')
  
   .then(() => console.log("DB connecting"));


}


