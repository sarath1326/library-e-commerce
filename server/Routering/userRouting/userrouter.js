

const express = require("express");
const router = express.Router();
const db = require("../../MonoDb/dbtransoer/Userdb")
const otp = require("../../email/Otp/Otpgenerate")
const jwt = require("jsonwebtoken")

const Razorpay=require("../../Razorpay/genarate_oder")









const verifiLogin = (req, res, next) => {

    const token = req.headers["jwt-token"]

    if (!token) {

        res.json({ authfaild: true })
        console.log("mmmmmm")

    } else {

        jwt.verify(token, "sarath1937", (err, result) => {

            if (result) {

                console.log("hiii");

                next()

            } else {

                res.json({ authfaild: true })

                console.log("oooo");

            }

        })




    }




}








router.get("/view/lit", (req, res) => {

    let num = req.query.limit

    db.viewpro_lit(num ? num : null).then((respo) => {

        if (respo.flag) {

            res.json({ data: respo.data, litefill: true })

        } else {

            res.sendStatus(404)

        }

    })


})



router.get("/view/edu", (req, res) => {

    let num = req.query.limit




    db.viewpro_edu(num ? num : null).then((respo) => {

        if (respo.flag) {

            res.json({ data: respo.data, edufill: true })

        } else {

            res.sendStatus(404)

        }



    })

})


router.get("/view/gen", (req, res) => {

    let num = req.query.limit

    db.view_gen(num ? num : null).then((respo) => {

        if (respo.flag) {

            res.json({ data: respo.data, gen: true })

        } else {

            res.sendStatus(404)


        }

    })


})


router.get("/oneview", (req, res) => {

    let proid = req.query.proid

    db.oneview(proid).then((respo) => {

        if (respo.flag) {


            db.bestchoise(respo.data.type).then((bestdata) => {


                const result = {

                    oneview: respo.data,
                    subdata: bestdata
                }

                res.json(result)

            })

        } else {

            res.sendStatus(404)


        }
    })

})


router.post("/signup", (req, res) => {

    const data = req.body;


    if (data) {

        db.emailexist(data.email).then((respo) => {

            if (respo.exsist) {



                res.json({ flag: false });

            } else {


                otp.otpsend(data).then((respo) => {

                    if (respo.flag) {

                        res.json({ flag: true })


                    } else {

                        res.json({ flag: false })
                    }



                }).catch(err => {

                    res.status(500).send("somthing worng...!" + err)

                })
            }

        })

    }
})


router.post("/otp", (req, res) => {

    const oto = req.body.otp

    db.otpVarification(oto).then((respo) => {

        if (respo.flag) {

            res.json({ flag: true })
        } else {

            res.json({ flag: false })

        }

    })



})











router.post("/login", (req, res) => {

    const data = req.body

    db.login(data).then((result) => {

        if (result.flag) {

            // req.session.loginok = true
            // req.session.user = result.user

            // // console.log(req.session.user)

            const { name, _id } = result.user


            const token = jwt.sign({ name: name, id: _id }, "sarath1937", { expiresIn: 300 })



            res.json({ flag: true, jwtToken: token })

        } else {

            res.json({ flag: false })

        }


    })

})



router.get("/navbar/username", (req, res) => {

    const token = req.headers["jwt-token"]





    if (!token) {

        res.json({ login: false })


    } else {

        jwt.verify(token, "sarath1937", (err, result) => {

            if (result) {



                db.get_Cartcount(result.id).then((respo) => {




                    res.json({ login: true, user: result, count: respo.cartCount })

                    console.log(result.name)



                })










            } else {

                res.json({ login: false })
            }


        })
    }



})


router.get("/cart", verifiLogin, (req, res) => {


    const token = req.headers["jwt-token"]

    jwt.verify(token,"sarath1937",(err,result)=>{

            const userid=result.id

           db.show_cart(userid).then((respo)=>{

            if(respo.flag){

                db.cart_total_price(userid).then((result)=>{


                    const total= result.total_price 


                    res.json({flag:true,cartdata:respo.cartdata,total_price:total})




                })

               
           
           
           
           
            }else{

                res.json({flag:false})

            }


           }).catch(err=>{

            res.send("somthing worng.....!",err)
           
        
        })






    })












    


})



router.get("/add_cart", verifiLogin, (req, res) => {

    const proid = req.query.proid
    const token = req.headers["jwt-token"]

    jwt.verify(token, "sarath1937", (err, result) => {

        const userid = result.id

        console.log("proid:", proid)
        console.log("userid:", userid)

        db.add_cart(proid, userid).then((respo) => {


            if (respo.proexit) {

                res.json({ proexit: true })

                return

            } else if (respo.update) {

                res.json({ update: true, count: respo.count })

            }

            if (respo.flag) {

                res.json({ flag: true, count: respo.count })

            } else {

                res.send("somthing worng")

            }

        }).catch(err => {

            console.log("errr", err)


        })


    })


})




    router.post("/cart_count_change",(req,res)=>{

        

        const token= req.body.userid

        jwt.verify(token,"sarath1937",(err,result)=>{

            const userid=result.id
            const proid=req.body.proid
            const count=req.body.count

            db.cart_count_change(userid,proid,count).then((result)=>{

                if(result.flag){

                    db.cart_total_price(userid).then((result)=>{

                        const total= result.total_price 

                        
                        res.json({flag:true ,total_price:total})



                    })



                  

                }else{

                    res.json({flag:false})

                   
                }

            }).catch(err=>{

                console.log("cart incriment err",err)

            })
          





        })





    })

    router.delete("/cart_delete",(req,res)=>{

        const proid= req.query.proid;
        const token=req.query.userid

        jwt.verify(token,"sarath1937",(err,result)=>{

            if(result){

                const userid= result.id

                db.cart_delete(proid,userid).then(()=>{

                  db.cart_total_price(userid).then((respo)=>{

                    if(respo.empty){

                        res.json({empty:true})

                    }else{


                        const total=respo.total_price

                        console.log(total)

                        res.json({empty:false,total:total})


                    }

                    

                  })

                     
                  




                })

                



            }

        })

       
        



    })





        router.post("/place_oder",(req,res)=>{

                console.log(req.body)

                const token= req.body.userid;
                
                jwt.verify(token,"sarath1937",(err,result)=>{

                    console.log(result.id)

                    const id= result.id

                    const data={
                        detailes:req.body,
                        userid:id
                    }

                   
                    db.place_oder_cart(data).then((result)=>{

                        if(result.flag){

                            const pyment_method=req.body.pyment

                            if(pyment_method==="cod"){

                                 

                                
                                db.cart_full_delete(id).then(()=>{})

                                res.json({cod:true})
                                console.log("cod")

                                


                            
                            }else{

                                 


                                Razorpay.generateRazorpay(result.oderid,result.total).then((order)=>{


                                    res.json({razorpay_order:order})

                                //    console.log(order);
    
                                   


                                }).catch(err=>{

                                    console.log("razorpay err");

                                })




                             


                            }

                           

                        }else{

                            res.json({flag:false})
                        }



                    }).catch(err=>{

                        console.log("place oder err ", err)

                    })












                })



       
       
       
            })





    router.post("/verify_pyment",(req,res)=>{

        const {token}=req.body
        

        

        Razorpay.pyment_verify(req.body).then(()=>{

            jwt.verify(token,"sarath1937",(err,reslt)=>{

                const id= reslt.id 

                db.cart_full_delete(id).then(()=>{})

                res.json({flag:true})



            })

           



        }).catch(err=>{

            console.log("pyment err:",err)
           
            res.json({flag:false})

        })
    
    
    })



   router.get("/myorder",verifiLogin,(req,res)=>{

    const token = req.headers["jwt-token"]

    jwt.verify(token,"sarath1937",(err,result)=>{

        if(result){



            db.my_oder(result.id).then((respo)=>{

                if(respo.flag){

                    res.json({flag:true,data:respo.data})

                }else{

                    res.json({flag:false})

                    console.log("no data")
                }

           
            }).catch(err=>{

                console.log("my oder errr")
            })

        
        
        
        
        
        }else{

            console.log("err");

        }

    })



})



router.get("/plcepro",async(req,res)=>{

    
    console.log(req.query.cartid)

    const result=await db.plce_products(req.query.cartid)

    if(result.flag){

        res.json({flag:true,data:result.data})


    }else{
        
        res.json({flag:false})
    
    }


    

})







   



      
    





















module.exports = router;