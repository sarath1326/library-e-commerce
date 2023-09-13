



const mongoos = require("mongoose");
const fs = require("fs");




const addproductsschema = new mongoos.Schema({



    filename: {
        type: String,
        unique: true,
        require: true
    },

    contentType: {
        type: String,
        require: true

    },

    imageBase64: {

        type: String,
        require: true

    },

    name: String,
    author: String,
    language: String,
    price: Number,
    publisher: String,
    cotegory: String,
    type: String,

})



module.exports.addproducts = (data) => {


    return new Promise((resolve, reject) => {




        const image = fs.readFileSync(data.img.path)
        const img = image.toString("base64")


        // console.log(img)
        // console.log(data.details)

        const finaldata = {


            filename: data.img.originalname,
            contentType: data.img.mimetype,
            imageBase64: img,
            name: data.details.name,
            author: data.details.author,
            language: data.details.language,
            price: data.details.price,
            publisher: data.details.publisher,
            cotegory: data.details.cotegory,
            type: data.details.type,

        }


        const dataadd = mongoos.model("products", addproductsschema)


        const final = new dataadd(finaldata)

        final.save().then((responce) => {

            console.log("data added")
            resolve(responce)


        }).catch(err => {

            console.log("filed" + err)

            reject(err)
        })


    })

}


module.exports.viewpro = () => {

    return new Promise(async (resolve, reject) => {


        const prodata = mongoos.model("products", addproductsschema)

        const result = await prodata.find().lean()

        if (result) {

            resolve(result)

        } else {

            reject("errr")

        }








    })

}


module.exports.onview = (proid) => {

    return new Promise(async (resolve, reject) => {

        try {

            const productsDb = mongoos.model("products", addproductsschema)

            const findData = await productsDb.findOne({ _id: proid })

            if (findData) {


                resolve({ flag: true, data: findData })

            } else {

                resolve({ flag: false })
                console.log("nodata")

            }



        } catch (error) {

            console.log(error)

            reject("err")



        }



    })




}


module.exports.edit_pro = (proid) => {


    return new Promise(async (resolve, reject) => {



        try {

            const productsDb = mongoos.model("products", addproductsschema)

            const finddata = await productsDb.findOne({ _id: proid })

            resolve({ data: finddata })


        } catch (error) {

            reject("err")

        }



    })



}


module.exports.edit_pro_post = (post_data) => {

    return new Promise((resolve, reject) => {

        const { file, data, status } = post_data

        const productsDB = mongoos.model("products", addproductsschema)


        try {

            if (status) {

                const image = fs.readFileSync(file.path)
                const img = image.toString("base64")


                productsDB.updateOne({ _id: data.proid }, {

                    $set: {

                        filename: file.originalname,
                        contentType: file.mimetype,
                        imageBase64: img,
                        name: data.name,
                        author: data.author,
                        language: data.language,
                        price: data.price,
                        publisher: data.publisher,
                        cotegory: data.cotegory,
                        type: data.type,

                    }

                }).then(() => {

                    resolve()

                }).catch(err => {

                    reject()
                })


            } else {


                productsDB.updateOne({ _id: data.proid }, {

                    $set: {

                        name: data.name,
                        author: data.author,
                        language: data.language,
                        price: data.price,
                        publisher: data.publisher,
                        cotegory: data.cotegory,
                        type: data.type,

                    }

                }).then(() => {


                    resolve()

                }).catch(err => {

                    reject()

                })



            }


        } catch (error) {

            reject()


        }


    })



}
