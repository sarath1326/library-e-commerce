


const mongoos=require("mongoose");
const bcrypt=require("bcrypt");


const viewproductschema=new mongoos.Schema({     // products schema

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


const user_signup_schema= new mongoos.Schema({ //user schema

        name:String,
        mobile:String,
        email:String,
        password:String


    })


const otp_schema=new mongoos.Schema({    //otp schema

       
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

const cart_schema= new mongoos.Schema({  //cart schma 

        user:{
            type:String,
            

        },

        
        products:Array

    })


 const place_oder_schema=new mongoos.Schema({    //place oder schma

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






   module.exports={


          viewpro_lit:(limit)=>{  //lit pro get query

            return new Promise( async(resolve,reject)=>{
                
                const obj={};

                const viewprolit=mongoos.model("products",viewproductschema);

                 const result = await  viewprolit.find({cotegory:"Literacher"}).limit(limit);
                 
                 if (result){

                    obj.flag=true
                    obj.data=result
                   
                    resolve(obj); 

                 
                 }else{
                    
                   resolve({flag:false});
                 
                }

              });

            },

            viewpro_edu:(limit)=>{    // edu pro get query 


                return new  Promise (async(resolve,reject)=>{

                    const obj={};
                    
                    const viewproedu=mongoos.model("products",viewproductschema);

                    const result= await  viewproedu.find({cotegory:"Education"}).limit(limit);

                    if(result){

                       obj.flag=true
                        obj.data=result

                        resolve(obj);

                    }else{

                        resolve({flag:false});
                    }

                 })

            },

            view_gen:(limit)=>{   // gen pro get query

                return new Promise( async(resolve,reject)=>{
                    const obj={};
                    
                    const viewprogen=mongoos.model("products",viewproductschema);

                    const result= await viewprogen.find({cotegory:"Genarl" }).limit(limit);
                    
                    if(result){

                        obj.flag=true
                        obj.data=result

                        resolve(obj);
                    }else{

                        resolve({flag:false});

                    }
                })
            
            },


            oneview:(proid)=>{   // pro one view query

                const obj={};

                return new Promise (async(resolve,reject)=>{

                    const prodectes=mongoos.model("products",viewproductschema);

                    const result= await prodectes.findOne({_id:proid});
                    
                    if(result) {

                    obj.flag=true
                    obj.data=result

                    resolve(obj);
                
                }else{

                    resolve({flag:false});
                 }
                
                })
            },

            bestchoise:(protype)=>{    //bst choice products get query

                 return new Promise( async(resolve,reject)=>{

                    const prodectes=mongoos.model("products",viewproductschema);

                    const result=await prodectes.find({type:protype});

                   resolve(result);
                });
            
            },


            emailexist:(email)=>{   //email exist query

                return new Promise(async(resolve ,reject)=>{

                    const signup=mongoos.model("user",user_signup_schema);

                    const result= await signup.findOne({email:email});

                    if(result){

                        resolve({exsist:true});
                    }else{

                        resolve({exsist:false});
                    }
                   });
                
                },



            otpData:(data)=>{  //otp query

               return new Promise( async(resolve,reject)=>{


                const otpDb=mongoos.model("otp",otp_schema);

              const dataUplode={

                  otp:data.sendotp,
                  name:data.userDetailes.name,
                  mobile:data.userDetailes.mobile,
                  email:data.userDetailes.email,
                  password:data.userDetailes.password

                 }
                 const final= new  otpDb(dataUplode);

                final.save().then(()=>{


                }).catch(err=>{
                    console.log("otpData uplding err" + err)
                        
                })

            })
        
         },


            otpVarification:(otp)=>{  //otp veification query

                return new Promise( async(resolve,reject)=>{

                    const otpDb=mongoos.model("otp",otp_schema);

                  const result= await otpDb.findOne({otp:otp});

                 if(result){

               
                     otpDb.deleteOne({otp: otp}).then(()=>{});
                  
                    const signup=mongoos.model("user",user_signup_schema);

                    result.password= await   bcrypt.hash(result.password,10);

                    const signupData={

                        name:result.name,
                        email:result.email,
                        mobile:result.mobile,
                        password:result.password

                    }

                    const final= new signup(signupData)

                    final.save().then(()=>{

                        resolve({flag:true});

                    })
                
                }else{

                   resolve({flag:false});

                }
            
            })
        
        },
            
            
            login:(data)=>{ //login query

                const responce={};

             const userdata=mongoos.model("user",user_signup_schema);

               return new Promise ( async (resolv,reject)=>{

                  const fetchdata= await userdata.findOne({email:data.email});
                  if(fetchdata){

                    bcrypt.compare(data.password,fetchdata.password).then((result)=>{

                        if(result){

                           responce.flag=true
                            responce.user=fetchdata

                            resolv(responce);
                         }else{

                        resolv({flag:false});
                    }
                    })
                 }else{
                    
                    resolv({flag:false});
                }
                 })



            },

            add_cart:(proid,userid)=>{ ///add cart query


              const  pro_objid= new mongoos.Types.ObjectId(proid);
              
              const data={

                    item:pro_objid,
                    quantity:1
                
                }

             return new Promise(async(resolve,reject)=>{

                  const cartDB=mongoos.model("cart",cart_schema);
              
                  const findUser= await cartDB.findOne({user:userid});

                 if (findUser){

                    
              let proExist=findUser.products.findIndex(docObj=>docObj.item==proid);

                if(proExist !=-1){

                    resolve({proexit:true});
                 }else{
                    
                    cartDB.updateOne({user:userid},{

                        $push:{

                            products:data
                            
                        }
                    
                    }).then( async(result)=>{


                        const findData= await  cartDB.findOne({user:userid});

                        const arrya= findData.products

                        const count= arrya.length

                         resolve({update:true,count:count})
                        
                        }).catch(err=>{
                            reject()

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

            get_Cartcount:(userid)=>{ // cart count get query
                
                return new Promise(async(resolve,reject)=>{
                    
                    let  count = 0
                   const cartDB=mongoos.model("cart",cart_schema);

                    const cartData= await cartDB.findOne({user:userid});
                    
                    if(cartData){
                        
                        const arrya= cartData.products  
                        count = arrya.length 
                         resolve({cartCount:count});
                         }else{
                            
                            resolve({cartCount:count});


             }
            
            })
        
        },

        show_cart:(userid)=>{  // show cart get query


            return new Promise( async(resolve,reject)=>{

                const cartDB=mongoos.model("cart",cart_schema)


                const findUser= await cartDB.findOne({user:userid})




            if(findUser){

                if(findUser.products.length===0){

                    resolve({flag:false})



                }else{




                


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

                }


                    }else{

                    console.log("user not fount")

                    resolve({flag:false})
               
               
                }




                    

            })
        
        
        
        },

        cart_count_change:(userid,proid,count)=>{  //cart count change query

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

        cart_total_price:(userid)=>{  // cart total price get queri

            return new Promise( async(resolve,reject)=>{

                const cartDB=mongoos.model("cart",cart_schema)


                const userfind= await cartDB.findOne({user:userid})

                if(userfind){

                    if(userfind.products.length===0){

                        resolve({empty:true})

                        console.log("cart empty")


                    }else{
                        
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

                }


                    
                   }else{

                    console.log(" cart total user not fount")


                   }











            })

        },


        place_oder_cart:(data)=>{    //place oder query

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
                        date:shortdate,
                        status:status,
                        delevary_date:"plz wait...",
                        shiping:""

                        
                    
                    
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





        },

        single_buy:(data)=>{   //single buy query

            const { userid,detailes}=data

            const { addrss,pyment, payprice ,proid   }=detailes

            const proid_obj_id=new mongoos.Types.ObjectId(proid)

            const date=new Date()

            let shortdate = date.toLocaleDateString('en-US', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
              
              
              })



            return new Promise((resolve,reject)=>{

                
                

                  const status= pyment ==="cod" ? "placed(cod)" : "pending"


                 const  addproducts=[
                    {
                        item: proid_obj_id,
                        quantity:1

                    }
                 ]



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
                    date:shortdate,
                    status:status,
                    delevary_date:"plz wait..."
                
                
                }


             
                const place_oder_DB=mongoos.model("placoder",place_oder_schema)

                            console.log("db save starting")
                           const final = new place_oder_DB(savedata)

                           final.save().then((responce)=>{

                              console.log("single ok")  
                           
                              resolve({flag:true,oderid:responce._id,total:payprice})


                           }).catch(err=>{

                            console.log("single err")

                            reject(err)

                           
                        })







            
            
                })





        },


        place_oder_status_change:(order)=>{  //place oder status change queri

            const orderid=order.receipt

            return new Promise(async(resolve,reject)=>{

                const place_oder_DB=mongoos.model("placoder",place_oder_schema)

               place_oder_DB.updateOne({_id:orderid},{
               
                $set:{

                    status:"placed(online)"

                }

               }).then(()=>{

                 console.log("online status updated")
                resolve()

              
            }).catch(err=>{

                console.log("online status update err")

               
            })

                     




            })




        },
        
        
        my_oder:(userid)=>{  //my oder get query

            return new Promise( async(resolve,reject)=>{

                
            const place_oder_DB= mongoos.model("placoder",place_oder_schema)

            const result= await place_oder_DB.find({userid:userid})

            if(result){

                if(result.length===0){

                    resolve({flag:false})
                
                }else{

                    resolve({flag:true,data:result})

                }

             }else{

                resolve({flag:false})

                console.log("my oder empty")
            
            }


            

            
        
        })





        },

        plce_products:(odertid)=>{     //place products query

            const oderid_obj= new mongoos.Types.ObjectId(odertid)

            return new Promise(async(resolve,reject)=>{

                
           const place_oder_DB= mongoos.model("placoder",place_oder_schema)

           const findoder= await place_oder_DB.findOne({_id:oderid_obj})

           if(findoder){

           const oderilst= await place_oder_DB.aggregate([

            {
                $match:{_id:oderid_obj}
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
                    as:"prodata"

                }
            },


            {

                $project:{
                    item:1,quantity:1,prodata:{$arrayElemAt:["$prodata",0]}
                }
            }
      
      
      
        ])

        resolve({flag:true,data:oderilst})
    
    
        }else{
            
            resolve({flag:false})
        
        }


              




            })

        },

        cart_delete:(proid,userid)=>{   // cart delete

         const  proid_obj= new mongoos.Types.ObjectId(proid)

            return new Promise(async(resolve,reject)=>{

                const cartDB=mongoos.model("cart",cart_schema)

                const cartfind= await cartDB.findOne({user:userid})

                if(cartfind){


                    cartDB.updateOne({user:userid},{

                        $pull:{"products":{item:proid_obj}}

                    }).then(()=>{

                        console.log('delete cart')
                        resolve()

                    }).catch(err=>{

                        console.log("delete cart err")

                    })

                    





                }







            })



        },

        cart_full_delete:(userid)=>{    // cart full delete 

            return new Promise((resolve,reject)=>{

                const cartDB=mongoos.model("cart",cart_schema)

                cartDB.deleteOne({user:userid}).then(()=>{

                    console.log(userid)

                    console.log("cart full delete")
                    resolve()
               
                }).catch(err=>{

                    console.log("cart full delet err")

                })



            })

        }

            
}




 

                                                        //end  

        