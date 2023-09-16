

const express = require("express");

const router = express.Router();
const store = require("../../image/multer");
const db = require("../../MonoDb/dbtransoer/Admindb");
const jwt =require("jsonwebtoken");



 const verifiLogin= (req,res,next)=>{    // login veification midilware //

           const token= req.headers["token"]

           if(token){

            jwt.verify(token,"sarath1937admin",(err,result)=>{
              if(result){
               
                next();
              
              }else{
                res.json({login_failed:true});
              }

            });


           }else{
            res.json({login_failed:true});
           }

 
          }


 router.get("/getname",(req,res)=>{    //  navbar name get api //

  const token= req.headers["token"] ;


   jwt.verify(token,"sarath1937admin",(err,result)=>{

    if(result){

      res.json({name:result.name});

    }else{
      
      res.json({not_login:true});
    
    }

  });

})


router.post("/master/login",(req,res)=>{   //master login api //

  const data=req.body ;

  db.veryfi_master(data).then((respo)=>{

    if(respo.flag){

        res.json({flag:true});
    
      }else if(respo. nomaster){

        res.json({nomaster:true});
 

    }else{
     
      res.json({flag:false});
    
    }

  }).catch(err=>{

    res.json({err:true});

  })

})


  router.post("/signup",(req,res)=>{  //signup api

    const data=req.body ;

    db.signup(data).then((respo)=>{

      if(respo.flag){
       
        res.json({flag:true});
      
      }else if(respo.email_exit){

        res.json({exist:true});

      }

    }).catch(err=>{

      res.json({err:true});

    })


})

router.post("/login",(req,res)=>{   //login api

      const data= req.body ;

      db.login(data).then((respo)=>{

        if(respo.flag){

          const {_id,name}=respo.data;

           const token= jwt.sign({id:_id,name:name},"sarath1937admin",{expiresIn:300}) ;

            res.json({flag:true, jwt:token ,admin:name}) ;
          
          }else{

            res.json({flag:false});

          }


      }).catch(err=>{

        res.json({err:true});

      })

})





router.post("/addproducts",verifiLogin, store.single("image"), (req, res) => {  //add products api

   const data = {
    img: req.file,
    details: req.body

  }

  if (data) {

    db.addproducts(data).then((respo) => {

      res.json("data added sucssfully");

    }).catch(err => {

      res.json("filed" + err);
    })
  } else {

    res.json("data not receved in server");
  }

})


router.get("/viewproadmin", (req, res) => {  //product view api

  db.viewpro().then((responce) => {

    res.json(responce);

  }).catch(err => {

    console.log("err");

  });

});




router.get("/oneview", (req, res) => {   //products details view api 

  const proid = req.query.proid ;
  db.onview(proid).then((responce) => {

    if (responce.flag) {

      res.json({ flag: true, data: responce.data });

    } else {
      
      req.json({ flag: false }); 
    }

  }).catch(err => {

    res.json({ err: true });

   });


});


router.get("/edit_pro",verifiLogin, (req, res) => {    //edit products get data api

  const proid = req.query.proid ;

  db.edit_pro(proid).then((respo) => {

    res.json({ flag: true, data: respo.data }) ;

  }).catch(err => {

    res.json({ flag: false }) ;

  })

})


router.post("/edit_pro", store.single("image"), (req, res) => {  //edit products post api 

  let flag = "" ;

  const status = req.body.image_status  ;

  if (status === "true") {

    flag = true ;

  } else {

    flag = false ;

  }
  const data = {

    file: req.file,
    data: req.body,
    status: flag

  }
  db.edit_pro_post(data).then(() => {
 
    res.json({flag:true});
    
  }).catch(err => {

    res.json({flag:false});
    })

})



  router.delete("/pro_delete",verifiLogin,(req,res)=>{  //delete products api

    const proid=req.query.proid ;
    
    db.pro_delete(proid).then(()=>{

        res.json({flag:true}) ;

        }).catch(err=>{

          res.json({flag:false}) ;

        })


      


  })




   router.get("/all_oders",verifiLogin,(req,res)=>{  //all oders view api 

           db.get_all_oders().then((respo)=>{

            if(respo.flag){

              res.json({flag:true,data:respo.data}) ;

            }else{
              
              res.json({flag:false}) ;
            
            }

           }).catch(err=>{

              res.json({err:true}) ;

           })

   })



     router.post("/shiping",(req,res)=>{   //shiping markng api 

            const data= req.body ;

            db.shiping(data).then((respo)=>{

              res.json({flag:true}) ;

               }).catch(err=>{

                res.json({flag:false}) ;

               })

    
          })




          router.get("/oder_pro",(req,res)=>{   // oder products show 

              const oderid= req.query.oderid ;
              
              db.oder_pro(oderid).then((respo)=>{

              res.json({flag:true,data:respo.data}) ;
            
            }).catch(err=>{

             res.json({flag:false});

             })
            
            })


          router.get("/report",verifiLogin,(req,res)=>{  // report api 

            console.log('jh[[[[[') ;

             db.collect_report().then((respo)=>{

              res.json({data:respo}) ;

             }).catch(err=>{

              res.json({err:true}) ;
            }) ;

          }) ;




                                                            //end 








module.exports = router;
