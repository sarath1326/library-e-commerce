



const mongoos=require("mongoose");
const fs=require("fs");




const addproductsschema=new mongoos.Schema({



    filename:{
        type: String,
        unique:true,
        require: true
    },

    contentType:{
        type: String,
        require: true

    },

    imageBase64:{

        type: String,
        require: true

    },

    name:String,
    author:String,
    language:String,
    price:Number,
    publisher:String,
    cotegory:String,
    type:String,

})



module.exports.addproducts=(data)=>{


          return new Promise((resolve,reject)=>{

          


    const image=fs.readFileSync(data.img.path)
    const img= image.toString("base64")


    // console.log(img)
    // console.log(data.details)

    const finaldata={


        filename:data.img.originalname,
        contentType:data.img.mimetype,
        imageBase64:img,
        name:data.details.name,
        author:data.details.author,
        language:data.details.language,
        price:data.details.price,
        publisher:data.details.publisher,
        cotegory:data.details.cotegory,
        type:data.details.type,

      }


    const dataadd=mongoos.model("products",addproductsschema)


    const final=new dataadd(finaldata)

    final.save().then((responce)=>{

        console.log("data added")
        resolve(responce)


    }).catch(err=>{

        console.log("filed"+err)
       
        reject(err)
    })


})

}


module.exports.viewpro=()=>{

    return new Promise ( async(resolve,reject)=>{

             
              const prodata=mongoos.model("products",addproductsschema)

              const result= await prodata.find().lean()

              if(result){

                   resolve(result)

              }else{
               
                reject("errr")
              
            }


              



          

    })

}