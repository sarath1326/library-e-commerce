

const express=require("express");

const router=express.Router();
const store=require("../../image/multer")
const db=require("../../MonoDb/dbtransoer/Admindb")




router.post("/addproducts",store.single("image"),(req,res)=>{

     console.log("hello")
    console.log(req.file)

    const data={
        img:req.file,
        details:req.body

      }

      if (data){
    
        db.addproducts(data).then((respo)=>{

            res.json("data added sucssfully")
    
        }).catch(err=>{
    
            res.json("filed"+err)
        })
      } else{
     
        res.json("data not receved in server")
      }

    })


    router.get("/viewproadmin",(req,res)=>{

        db.viewpro().then((responce)=>{

            res.json(responce)

        }).catch(err=>{

            res.sendStatus(404)

            

        })



    })


   






module.exports=router ;
