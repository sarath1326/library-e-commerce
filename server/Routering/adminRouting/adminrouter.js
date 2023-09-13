

const express = require("express");

const router = express.Router();
const store = require("../../image/multer")
const db = require("../../MonoDb/dbtransoer/Admindb")




router.post("/addproducts", store.single("image"), (req, res) => {

  console.log("hello")
  console.log(req.file)

  const data = {
    img: req.file,
    details: req.body

  }

  if (data) {

    db.addproducts(data).then((respo) => {

      res.json("data added sucssfully")

    }).catch(err => {

      res.json("filed" + err)
    })
  } else {

    res.json("data not receved in server")
  }

})


router.get("/viewproadmin", (req, res) => {

  db.viewpro().then((responce) => {

    res.json(responce)

  }).catch(err => {

    res.sendStatus(404)



  })



})




router.get("/oneview", (req, res) => {

  const proid = req.query.proid
  db.onview(proid).then((responce) => {

    if (responce.flag) {

      res.json({ flag: true, data: responce.data })

    } else {
      console.log("no data ")
      req.json({ flag: false })
    }


  }).catch(err => {

    res.json({ err: true })

    console.log("err find")

  })


})


router.get("/edit_pro", (req, res) => {

  const proid = req.query.proid

  db.edit_pro(proid).then((respo) => {

    res.json({ flag: true, data: respo.data })

  }).catch(err => {

    res.json({ flag: false })

  })

})


router.post("/edit_pro", store.single("image"), (req, res) => {

  let flag = ""

  const status = req.body.image_status

  if (status === "true") {

    flag = true

  } else {

    flag = false

  }


  const data = {

    file: req.file,
    data: req.body,
    status: flag

  }


  db.edit_pro_post(data).then(() => {


    res.json({flag:true})

     

  }).catch(err => {

    res.json({flag:false})

       
  })





})









module.exports = router;
