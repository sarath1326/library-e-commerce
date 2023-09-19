

const express = require("express");
const router = express.Router();
const db = require("../../MonoDb/dbtransoer/Userdb");
const otp = require("../../email/Otp/Otpgenerate");
const jwt = require("jsonwebtoken");
const Razorpay = require("../../Razorpay/genarate_oder");









const verifiLogin = (req, res, next) => {    //user login verification 

    const token = req.headers["jwt-token"];

    if (!token) {

        res.json({ authfaild: true });


    } else {

        jwt.verify(token, "sarath1937", (err, result) => {

            if (result) {

                next();

            } else {

                res.json({ authfaild: true });



            }

        })




    }




}








router.get("/view/lit", (req, res) => {    // lit products get api 

    let num = req.query.limit

    db.viewpro_lit(num ? num : null).then((respo) => {

        if (respo.flag) {

            res.json({ data: respo.data, litefill: true })

        } else {

            res.json({ flag: false });

        }

    }).catch(err => {

        res.json({ err: true });


    })


})



router.get("/view/edu", (req, res) => {   //edu products get api 

    let num = req.query.limit

    db.viewpro_edu(num ? num : null).then((respo) => {

        if (respo.flag) {

            res.json({ data: respo.data, edufill: true })

        } else {

            res.json({ flag: false });

        }

    }).catch(err => {

        res.json({ err: true });



    })

})


router.get("/view/gen", (req, res) => {  //gen products get api   

    let num = req.query.limit

    db.view_gen(num ? num : null).then((respo) => {

        if (respo.flag) {

            res.json({ data: respo.data, gen: true })

        } else {

            res.json({ flag: false });

        }

    }).catch(err => {

        res.json({ err: true });
    })
})


router.get("/oneview", (req, res) => {  // products oneview api 

    let proid = req.query.proid;

    db.oneview(proid).then((respo) => {

        if (respo.flag) {

            db.bestchoise(respo.data.type).then((bestdata) => {


                const result = {

                    oneview: respo.data,
                    subdata: bestdata
                }

                res.json(result);
            })

        } else {

            console.log("err")

        }
    }).catch(err => {

        res.json({ err: true });

    })

})


router.post("/signup", (req, res) => {   //signup api

    const data = req.body;


    if (data) {

        db.emailexist(data.email).then((respo) => {

            if (respo.exsist) {

                res.json({ exit: true });

            } else {


                otp.otpsend(data).then((respo) => {

                    if (respo.flag) {

                        res.json({ flag: true });

                    } else {

                        res.json({ flag: false });
                    }

                }).catch(err => {

                    res.json({ err:true });
                })
            }

        })

    } else {
        res.json({ flag: false });
    }
})


router.post("/otp", (req, res) => {  //otp api

    const oto = req.body.otp;

    db.otpVarification(oto).then((respo) => {

        if (respo.flag) {

            res.json({ flag: true });
        } else {

            res.json({ flag: false });

        }

    }).catch(err => {

        res.json({ err: true });

    })



})





router.post("/login", (req, res) => {  // login api

    const data = req.body;

    db.login(data).then((result) => {

        if (result.flag) {

            const { name, _id } = result.user;

            const token = jwt.sign({ name: name, id: _id }, "sarath1937", { expiresIn: 36000  });

            res.json({ flag: true, jwtToken: token });

        } else {

            res.json({ flag: false });
        }

    }).catch(err => {

        res.json({ err: true });

    })

})



router.get("/navbar/username", (req, res) => {   //navbar user name get api

    const token = req.headers["jwt-token"]

    if (!token) {

        res.json({ login: false })

    } else {

        jwt.verify(token, "sarath1937", (err, result) => {

            if (result) {
                db.get_Cartcount(result.id).then((respo) => {

                    res.json({ login: true, user: result, count: respo.cartCount })

                }).catch(err=>{
                    res.json({err:true})
                })
            } else {

                res.json({ login: false })
            }


        })
    }



})


router.get("/cart", verifiLogin, (req, res) => { //cart api


    const token = req.headers["jwt-token"] ;

    jwt.verify(token, "sarath1937", (err, result) => {

        const userid = result.id ;

        db.show_cart(userid).then((respo) => {

            if (respo.flag) {

                db.cart_total_price(userid).then((result) => {

                  const total = result.total_price

                 
   
                  res.json({ flag: true, cartdata: respo.cartdata, total_price: total })

                  return
                
                })
            
             } else {

                res.json({ flag: false })
                return

            }


        }).catch(err => {

           res.json({err:true});

        })






    })















})



router.get("/add_cart", verifiLogin, (req, res) => { //add cart api

    const proid = req.query.proid;
    const token = req.headers["jwt-token"];

    jwt.verify(token, "sarath1937", (err, result) => {

        const userid = result.id;

       db.add_cart(proid, userid).then((respo) => {


            if (respo.proexit) {

                res.json({ proexit: true });

                return

            } else if (respo.update) {

                res.json({ update: true, count: respo.count });
                return

            }

            if (respo.flag) {

                res.json({ flag: true, count: respo.count });
                return

            } else {

                res.send("somthing worng");
                return

            }

        }).catch(err => {

            res.json({err:true});

        })


    })


})




router.post("/cart_count_change", (req, res) => { //cart count change api 



    const token = req.body.userid;

    jwt.verify(token, "sarath1937", (err, result) => {

        const userid = result.id;
        const proid = req.body.proid;
        const count = req.body.count;

        db.cart_count_change(userid, proid, count).then((result) => {

            if (result.flag) {

                db.cart_total_price(userid).then((result) => {

                    const total = result.total_price ;
                    res.json({ flag: true, total_price: total });
                
                })
            
            } else {

                res.json({ flag: false });
            }

        }).catch(err => {

           res.json({err:true});
        })






    })





})

router.delete("/cart_delete", (req, res) => {   //cart delete api

    const proid = req.query.proid;
    const token = req.query.userid

    jwt.verify(token, "sarath1937", (err, result) => {

        if (result) {

            const userid = result.id ;

            db.cart_delete(proid, userid).then(() => {

                db.cart_total_price(userid).then((respo) => {

                    if (respo.empty) {

                        res.json({ empty: true });

                    } else {
                         const total = respo.total_price;
                         
                         res.json({ empty: false, total: total });
                        
                        }
                     })
                    
                    }).catch(err=>{

                        res.json({err:true});
                    })
                }
             })
            
            
            })





router.post("/place_oder", (req, res) => {  //place oder api 

   
    const token = req.body.userid;

    jwt.verify(token, "sarath1937", (err, result) => {

        console.log(result.id);

        const id = result.id;

        const data = {
            detailes: req.body,
            userid: id
        }


        db.place_oder_cart(data).then((result) => {

            if (result.flag) {

                const pyment_method = req.body.pyment 

                if (pyment_method === "cod") {

                     db.cart_delete(id).then(() => { })

                    res.json({ cod: true });
                 } else {
                    
                    Razorpay.generateRazorpay(result.oderid, result.total).then((order) => {
                        
                        res.json({ razorpay_order: order });

                        }).catch(err => {

                        res.json({err:true});
                    })
                }
             } else {

                res.json({ flag: false });
            }
        
        }).catch(err => {

            res.json({err:true});
        })












    })






})





router.post("/verify_pyment", (req, res) => {  //verify online pyment api

    const { token, order } = req.body




    Razorpay.pyment_verify(req.body).then(() => {

        jwt.verify(token, "sarath1937", (err, reslt) => {

            const id = reslt.id

            db.cart_full_delete(id).then(() => { }).catch(err => {

                console.log("cart cler err")

            })


            db.place_oder_status_change(order).then(() => { }).catch(err => {

                console.log("place oder status change err")

            })


            res.json({ flag: true })



        })





    }).catch(err => {

        console.log("pyment err:", err)

        res.json({ err:true })

    })


})





router.post("/single_buy", (req, res) => { //single buy api 

    
    const token = req.body.userid

    jwt.verify(token, "sarath1937", (err, result) => {

        if (result) {

            const id = result.id

            const data = {
                detailes: req.body,
                userid: id
            }

            console.log("db connecting")

            db.single_buy(data).then((result) => {

                if (result.flag) {

                    const pyment_method = req.body.pyment

                    if (pyment_method === "cod") {

                         res.json({ cod: true })
                        console.log("cod")
                    
                    } else {
                        
                        Razorpay.generateRazorpay(result.oderid, result.total).then((order) => {
                    
                             res.json({ razorpay_order: order })
                            }).catch(err => {

                            console.log("razorpay err");

                        })
                    }
                } else {

                    res.json({ flag: false })
                }

            }).catch(err => {

                res.json({err:true})

            })





        }

    })


})


router.post("/single_buy/verify_pyment", (req, res) => {  //singil buy verify pyment api 


    Razorpay.pyment_verify(req.body).then(() => {

        const { order } = req.body

        db.place_oder_status_change(order).then(() => {


            res.json({ flag: true })


        }).catch(err => {

            console.log("online pyment status change err")

        })



    }).catch(err => {

        console.log("pyment err:", err)

        res.json({ flag: false })

    })






})



router.get("/myorder", verifiLogin, (req, res) => {    // my oder show page 

    const token = req.headers["jwt-token"] ;

    jwt.verify(token, "sarath1937", (err, result) => {

        if (result) {



            db.my_oder(result.id).then((respo) => {

                if (respo.flag) {

                    res.json({ flag: true, data: respo.data });

                } else {

                    res.json({ flag: false });
                
                }


            }).catch(err => {

                res.json({err:true});
            
            })
        
        } else {

            res.json({err:true});
        }
    })

})



router.get("/plcepro", async (req, res) => {   //plac pro view 
    
    const result = await db.plce_products(req.query.cartid);

    if (result.flag) {

        res.json({ flag: true, data: result.data });


    } else {

        res.json({ flag: false }); 

    }

})





                                                              //end 


































module.exports = router;