


const mongoos=require("mongoose")
const bcrypt=require("bcrypt")
const { promises } = require("nodemailer/lib/xoauth2")






const viewproductschema=new mongoos.Schema({



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
    price:String,
    publisher:String,
    cotegory:String,
    type:String,

})





    const user_signup_schema= new mongoos.Schema({

        name:String,
        mobile:String,
        email:String,
        password:String


    })



   const otp_schema=new mongoos.Schema({

       
      otp:{
        type:String,
        unique:true
      },
     
      name:String,
      
      mobile:String,
      
      email:{
        type:String,
        unique:true
      },

      password:String
    
    })

    const cart_schema= new mongoos.Schema({

        user:{
            type:String,
            

        },

        
        products:Array

    })


    const place_oder_schema=new mongoos.Schema({

       userid:String,
        userAdress:Object,
        products:Array,
        pyment_method: String,
        totalAmount: Number,
        date: String,
        status: String


       })






   module.exports={


          viewpro_lit:(limit)=>{

            return new Promise( async(resolve,reject)=>{

                

                const obj={}

                const viewprolit=mongoos.model("products",viewproductschema)


                    
                
                
                const result = await  viewprolit.find({cotegory:"literacher"}).limit(limit)


                    


                 



                 

                   
                  
                 if (result){

                    obj.flag=true
                    obj.data=result
                   
                    resolve(obj)

                 
                 }else{
                    
                   resolve({flag:false})
                 
                }

              })

            },

            viewpro_edu:(limit)=>{


                return new  Promise (async(resolve,reject)=>{

                    const obj={}

                       
                    const viewproedu=mongoos.model("products",viewproductschema)

                    const result= await  viewproedu.find({cotegory:"education"}).limit(limit)

                    if(result){

                       obj.flag=true
                        obj.data=result

                        resolve(obj)

                    }else{

                        resolve({flag:false})
                    }

                 })

            },

            view_gen:(limit)=>{

                return new Promise( async(resolve,reject)=>{

                    const obj={}


                    const viewprogen=mongoos.model("products",viewproductschema)

                    const result= await viewprogen.find({cotegory:"genarl" }).limit(limit)

                    
                    if(result){

                        obj.flag=true
                        obj.data=result

                        resolve(obj)



                    }else{

                        resolve({flag:false})

                    }





                })



            },


            oneview:(proid)=>{

                const obj={}

                return new Promise (async(resolve,reject)=>{

                    const prodectes=mongoos.model("products",viewproductschema)

                    const result= await prodectes.findOne({_id:proid})

                    

                  if(result) {

                    obj.flag=true
                    obj.data=result

                    resolve(obj)


                  }else{

                    resolve({flag:false})


                  }



                })




            },

            bestchoise:(protype)=>{


                return new Promise( async(resolve,reject)=>{

                    const prodectes=mongoos.model("products",viewproductschema)

                    const result=await prodectes.find({type:protype})

                   resolve(result)


                })


              



            },


            emailexist:(email)=>{

                return new Promise(async(resolve ,reject)=>{

                    const signup=mongoos.model("user",user_signup_schema);

                    const result= await signup.findOne({email:email})

                    if(result){

                        resolve({exsist:true});
                    }else{

                        resolve({exsist:false});
                    }




                });



            },



            otpData:(data)=>{

               return new Promise( async(resolve,reject)=>{


                const otpDb=mongoos.model("otp",otp_schema)

              const dataUplode={

                  otp:data.sendotp,
                  name:data.userDetailes.name,
                  mobile:data.userDetailes.mobile,
                  email:data.userDetailes.email,
                  password:data.userDetailes.password

                 }





                const final= new  otpDb(dataUplode)

                final.save().then(()=>{


                }).catch(err=>{
                    console.log("otpData uplding err" + err)
                        
                })

                





               })




            },


            otpVarification:(otp)=>{

                return new Promise( async(resolve,reject)=>{

                    const otpDb=mongoos.model("otp",otp_schema)

                  const result= await otpDb.findOne({otp:otp})

                  console.log(result)

                  
                  if(result){

               
                     otpDb.deleteOne({otp: otp}).then(()=>{})
                  
                    const signup=mongoos.model("user",user_signup_schema)

                    result.password= await   bcrypt.hash(result.password,10)

                    const signupData={

                        name:result.name,
                        email:result.email,
                        mobile:result.mobile,
                        password:result.password

                    }

                    const final= new signup(signupData)

                    final.save().then(()=>{

                        resolve({flag:true})

                    })
                
                }else{

                   resolve({flag:false})

                }




                })




            },
            
            
            login:(data)=>{

                const responce={}


                const userdata=mongoos.model("user",user_signup_schema)


                return new Promise ( async (resolv,reject)=>{


                  const fetchdata= await userdata.findOne({email:data.email})


                  if(fetchdata){

                    bcrypt.compare(data.password,fetchdata.password).then((result)=>{

                        
                        if(result){

                            console.log("login sucss");

                            responce.flag=true
                            responce.user=fetchdata

                            resolv(responce)



                        }else{

                            console.log("password wong");
                            
                            resolv({flag:false})


                        }





                    })






                  }else{

                    
                    console.log("username invalig");
                    resolv({flag:false})


                  }




                        

                })



            },

            add_cart:(proid,userid)=>{


              const  pro_objid= new mongoos.Types.ObjectId(proid)
              
              
              const data={

                    item:pro_objid,
                    quantity:1
                
                }


              return new Promise(async(resolve,reject)=>{


              const cartDB=mongoos.model("cart",cart_schema)

                 const findUser= await cartDB.findOne({user:userid})

                 if (findUser){

                    
              let proExist=findUser.products.findIndex(docObj=>docObj.item==proid)

                if(proExist !=-1){

                    resolve({proexit:true})


                }else{


                    cartDB.updateOne({user:userid},{

                        $push:{

                            products:data
                            
                        }
                    
                    }).then( async(result)=>{


                        const findData= await  cartDB.findOne({user:userid})

                        const arrya= findData.products

                        const count= arrya.length

                         resolve({update:true,count:count})



                    }).catch(err=>{

                        console.log("errr", err);
                    })
                
                }
            
            
            }else{

                   
                const addData={

                    user:userid,
                    products:[data]
                
                }


               const final= new cartDB(addData)

               final.save().then(async()=>{

              const findData  =  await cartDB.findOne({user:userid})

              const cartArrya=findData.products


              const count= cartArrya.length

              console.log(count)


                resolve({flag:true,count:count})

                 }).catch(err=>{

                reject({flag:false})

               })

           
           
            }



              })


            


               







            },

            get_Cartcount:(userid)=>{

                

                

                return new Promise(async(resolve,reject)=>{

                    console.log("inn")

                    let  count = 0
                   

                    const cartDB=mongoos.model("cart",cart_schema)

                    const cartData= await cartDB.findOne({user:userid})

                



                    if(cartData){

                        console.log("call")


                        const arrya= cartData.products  

                         count = arrya.length 

                        console.log(count)

                        resolve({cartCount:count})
                     
            
                    }else{

                        console.log("helooo")

                        resolve({cartCount:count})


             }
            
            })
        
        },

        show_cart:(userid)=>{


            return new Promise( async(resolve,reject)=>{

                const cartDB=mongoos.model("cart",cart_schema)


                const findUser= await cartDB.findOne({user:userid})

                if(findUser){


                    let cartlist= await cartDB.aggregate([

                        {
                           $match:{user:userid}

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
                                localField:"item",
                                foreignField:"_id",
                                as:"cartitems"
                                

                            }

                         },
                         
                         {
                            
                            $project:{

                                item:1,quantity:1,cartitems:{$arrayElemAt:["$cartitems",0]}

                            }
                       
                       
                         }
                        
                        ])

                    // console.log(cartlist)

                    resolve({flag:true,cartdata:cartlist})


                    }else{

                    console.log("user not fount")

                    resolve({flag:false})
               
               
                }




                    

            })
        
        
        
        },

        cart_count_change:(userid,proid,count)=>{

            const countnum=parseInt(count)

            const proid_obj=new mongoos.Types.ObjectId(proid)
              





            return new Promise( async(resolv,reject)=>{

                const cartDB=mongoos.model("cart",cart_schema)

                const  userfind= await cartDB.findOne({user:userid})

                if(userfind){

                    cartDB.updateOne({user:userid,"products.item":proid_obj},{

                        $inc:{"products.$.quantity":countnum}



                    }).then(()=>{

                        resolv({flag:true})

                   
                    }).catch(err=>{

                        console.log("cart cgange err")

                        reject(err)

                    })



                }else{

                    resolv({flag:false})

                }


              





            })




        },

        cart_total_price:(userid)=>{

            return new Promise( async(resolve,reject)=>{

                const cartDB=mongoos.model("cart",cart_schema)


                const userfind= await cartDB.findOne({user:userid})

                if(userfind){

                    const cartdata= await cartDB.aggregate([

                        {
                            $match :{user:userid}
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
                                localField:"item",
                                foreignField:"_id",
                                as:"cartitems"
                                

                            }

                         },

                         {
                            
                            $project:{

                                item:1,quantity:1,cartitems:{$arrayElemAt:["$cartitems",0]}

                            }
                       
                       
                         },

                         {

                            $group:{
                               _id:null,
                               total:{$sum:{$multiply:["$quantity","$cartitems.price"]}}
                            }



                         }











                    ])

                    resolve({total_price:cartdata[0].total})


                    
                   }else{

                    console.log(" cart total user not fount")


                   }











            })

        },


        place_oder_cart:(data)=>{

            return new Promise( async(resolve,reject)=>{

                const {userid,detailes}= data

                const { addrss,pyment, payprice    }=detailes


                 //user cart data find

                 const cartDB=mongoos.model("cart",cart_schema)

                 const findData= await cartDB.findOne({user:userid})

                 if(findData){

                    const addproducts= findData.products

                    console.log("user cart data:" ,addproducts)

                    const date = new Date();



                 let shortdate = date.toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: '2-digit',
                      day: '2-digit',
                    
                    
                    })

                    const status= pyment ==="cod" ? "placed(cod)" : "pending"







                    const savedata={

                        userAdress:{

                            name:addrss.name,
                            adress:addrss.adress,
                            pincode:addrss.pincode,
                            landmark:addrss.landmark,
                            mobile:addrss.mobile
                        
                        },

                        userid:userid,
                        products:addproducts,
                        pyment_method:pyment,
                        totalAmount:payprice,
                        data:shortdate,
                        status:status
                    
                    
                    }



                    const place_oder_DB=mongoos.model("placoder",place_oder_schema)


                    const final = new place_oder_DB(savedata)

                    final.save().then((responce)=>{

                        resolve({flag:true,oderid:responce._id,total:payprice})

                    }).catch(err=>{

                      

                       reject(err)

                    })
                
                
                
                
                }else{

                    resolve({flag:true})

                }





            })





        }

            






   }

        