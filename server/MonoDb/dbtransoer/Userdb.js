


const mongoos=require("mongoose")






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

            view_gen:()=>{

                return new Promise( async(resolve,reject)=>{

                    const obj={}


                    const viewprogen=mongoos.model("products",viewproductschema)

                    const result= await viewprogen.find({cotegory:"genarl" }).limit(12)

                    
                    if(result){

                        obj.flag=true
                        obj.data=result

                        resolve(obj)



                    }else{

                        resolve({flag:false})

                    }





                })



            }






   }

        