

const express=require("express");
const router=express.Router();
const db=require("../../MonoDb/dbtransoer/Userdb")



router.get("/view/lit",(req,res)=>{

    let num=req.query.limit

   db.viewpro_lit( num ? num : null  ).then((respo)=>{

        if(respo.flag){
            
            res.json(respo.data) 
       
        }else{
           
            res.sendStatus(404)
        
        }

        })


    })



    router.get("/view/edu",(req,res)=>{

        let num= req.query.limit

        

       
        db.viewpro_edu( num ? num : null ).then((respo)=>{

            if(respo.flag){
                
                res.json(respo.data)
            
            }else{
                
                res.sendStatus(404)
           
            }

           

        })

     })


     router.get("/view/gen",(req,res)=>{

        let num=req.query.limit

        db.view_gen(num ? num : null).then((respo)=>{

            if(respo.flag){

                res.json(respo.data)
            
            }else{

                res.sendStatus(404)
 

            }

        })


          })


          













module.exports=router;