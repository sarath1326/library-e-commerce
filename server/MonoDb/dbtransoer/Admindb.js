



const mongoos = require("mongoose");
const fs = require("fs");




const addproductsschema = new mongoos.Schema({



    filename: {
        type: String,
        unique: true,
        require: true
    },

    contentType: {
        type: String,
        require: true

    },

    imageBase64: {

        type: String,
        require: true

    },

    name: String,
    author: String,
    language: String,
    price: Number,
    publisher: String,
    cotegory: String,
    type: String,

})


const place_oder_schema=new mongoos.Schema({

    userid:String,
     userAdress:Object,
     products:Array,
     pyment_method: String,
     totalAmount: Number,
     date: String,
     status: String,
     delevary_date:String,
     shiping:String


    })




module.exports.addproducts = (data) => {


    return new Promise((resolve, reject) => {




        const image = fs.readFileSync(data.img.path)
        const img = image.toString("base64")


        // console.log(img)
        // console.log(data.details)

        const finaldata = {


            filename: data.img.originalname,
            contentType: data.img.mimetype,
            imageBase64: img,
            name: data.details.name,
            author: data.details.author,
            language: data.details.language,
            price: data.details.price,
            publisher: data.details.publisher,
            cotegory: data.details.cotegory,
            type: data.details.type,

        }


        const dataadd = mongoos.model("products", addproductsschema)


        const final = new dataadd(finaldata)

        final.save().then((responce) => {

            console.log("data added")
            resolve(responce)


        }).catch(err => {

            console.log("filed" + err)

            reject(err)
        })


    })

}


module.exports.viewpro = () => {

    return new Promise(async (resolve, reject) => {


        const prodata = mongoos.model("products", addproductsschema)

        const result = await prodata.find().lean()

        if (result) {

            resolve(result)

        } else {

            reject("errr")

        }








    })

}


module.exports.onview = (proid) => {

    return new Promise(async (resolve, reject) => {

        try {

            const productsDb = mongoos.model("products", addproductsschema)

            const findData = await productsDb.findOne({ _id: proid })

            if (findData) {


                resolve({ flag: true, data: findData })

            } else {

                resolve({ flag: false })
                console.log("nodata")

            }



        } catch (error) {

            console.log(error)

            reject("err")



        }



    })




}


module.exports.edit_pro = (proid) => {


    return new Promise(async (resolve, reject) => {



        try {

            const productsDb = mongoos.model("products", addproductsschema)

            const finddata = await productsDb.findOne({ _id: proid })

            resolve({ data: finddata })


        } catch (error) {

            reject("err")

        }



    })



}


module.exports.edit_pro_post = (post_data) => {

    return new Promise((resolve, reject) => {

        const { file, data, status } = post_data

        const productsDB = mongoos.model("products", addproductsschema)


        try {

            if (status) {

                const image = fs.readFileSync(file.path)
                const img = image.toString("base64")


                productsDB.updateOne({ _id: data.proid }, {

                    $set: {

                        filename: file.originalname,
                        contentType: file.mimetype,
                        imageBase64: img,
                        name: data.name,
                        author: data.author,
                        language: data.language,
                        price: data.price,
                        publisher: data.publisher,
                        cotegory: data.cotegory,
                        type: data.type,

                    }

                }).then(() => {

                    resolve()

                }).catch(err => {

                    reject()
                })


            } else {


                productsDB.updateOne({ _id: data.proid }, {

                    $set: {

                        name: data.name,
                        author: data.author,
                        language: data.language,
                        price: data.price,
                        publisher: data.publisher,
                        cotegory: data.cotegory,
                        type: data.type,

                    }

                }).then(() => {


                    resolve()

                }).catch(err => {

                    reject()

                })



            }


        } catch (error) {

            reject()


        }


    })



}


module.exports.pro_delete=(proid)=>{

       return new Promise((resolve,reject)=>{

        try {

            const productsDB = mongoos.model("products", addproductsschema)

            productsDB.deleteOne({_id:proid}).then(()=>{
    
                resolve()
    
            }).catch(err=>{

                reject()
            })

            
        } catch (error) {

            reject()
            
        }





       })

}


module.exports.get_all_oders=()=>{

    return new Promise( async(resolve,reject)=>{

        try {

            const place_oder_DB=mongoos.model("placoder",place_oder_schema)


              const finddata= await place_oder_DB.find()

                if(finddata){

                    resolve({flag:true,data:finddata})

                }else(

                    resolve({flag:true})
                )
            
            } catch (error) {

                reject()
            
        }

         


          

    })

}


module.exports.shiping=(data)=>{

        const{oderid,date}=data

           return new Promise(async(resolve,reject)=>{

            try {

                const place_oder_DB=mongoos.model("placoder",place_oder_schema)
    
                const findData= await place_oder_DB.updateOne({_id:oderid},{

                    $set:{

                        status:"shipping",
                        delevary_date:date,
                        shiping:"true"
                    
                    }

                }).then(()=>{
                    
                    console.log("update")
                    resolve()

                }).catch(err=>{

                    console.log("update errr");
                    reject()

                })
    
                
               } catch (error) {
    
                console.log("update err");
                  reject()
    
                
               }


                 
           })


    }



    module.exports.oder_pro=(oderid)=>{

        const oderis_obj=new mongoos.Types.ObjectId(oderid)

          return new Promise( async(resolve,reject)=>{

            try {


                const place_oder_DB=mongoos.model("placoder",place_oder_schema)

                const prolist= await place_oder_DB.aggregate([

                     {
                        $match:{_id:oderis_obj}
                     },
                     {
                        $unwind:"$products"
                     },
                     {
                        $project:{
                           
                            item:"$products.item",
                            quantity:"$products.quantity"
                        }
                     
                    },
                    {

                        $lookup:{

                            from:"products",
                            foreignField:"_id",
                            localField:"item",
                            as:"prodata"

                        }




                },
                
                {

                    $project:{

                        item:1,quantity:1,prodata:{$arrayElemAt:["$prodata",0]}

                    }


                }



                ])

               
                
                resolve({data:prolist})

              


                
            } catch (error) {

                reject()
                
            }





          })

        
    }