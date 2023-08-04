


const mongoos=require("mongoose")
const bcrypt=require("bcrypt")






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


            signup:(data)=>{

                const obj={}


                const signup=mongoos.model("user",user_signup_schema)

                return new Promise( async(resolve,reject)=>{

                    const item=data

                    item.password=await bcrypt.hash(item.password,10)

                    const adddata= new signup(item)

                    adddata.save().then((result)=>{

                        console.log(result)

                        if(result){

                            obj.flag=true
                            obj.data=result

                            resolve(obj)




                        }else{

                            resolve({flag:false})

                        }

                        

                       

                    })  




                    



                    





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

                            

                            responce.flag=true
                            responce.user=fetchdata

                            resolv(responce)



                        }else{

                            
                            resolv({flag:false})


                        }





                    })





                  }else{

                    
                    
                    resolv({flag:false})


                  }




                        

                })



            }

            






   }

        