



const mongoos = require("mongoose");
const fs = require("fs");
const bcrypt = require("bcrypt");





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

});


const place_oder_schema = new mongoos.Schema({

    userid: String,
    userAdress: Object,
    products: Array,
    pyment_method: String,
    totalAmount: Number,
    date: String,
    status: String,
    delevary_date: String,
    shiping: String


});

const user_signup_schema = new mongoos.Schema({

    name: String,
    mobile: String,
    email: String,
    password: String


});


const master_schema = new mongoos.Schema({

    email: {
        type: String,
        unique: true
    },
    password: {
        type: String,
        unique: true
    },
    name: String
});


const signup_Admin_schema = new mongoos.Schema({

    name: String,
    email: {
        type: String,
        unique: true
    },
    password: String

});









module.exports.veryfi_master = (data) => {     //master verification  Qurey

    return new Promise(async (resolve, reject) => {


        try {


            const masterDB = mongoos.model("master", master_schema);

            const findMaster = await masterDB.findOne({ email: data.email });

            if (findMaster) {

                bcrypt.compare(data.password, findMaster.password).then((result) => {


                    if (result) {

                        resolve({ flag: true });

                    } else {

                        resolve({ flag: false })

                    }

                })

            } else {

                resolve({ nomaster: true });

            }

        } catch (error) {

            reject();

        }

    });

}


module.exports.signup = (data) => {         //signup Query

    return new Promise(async (resolve, reject) => {

        const signupDB = mongoos.model("Admin", signup_Admin_schema);

        const email_exist = await signupDB.findOne({ email: data.email });

        if (email_exist) {

            resolve({ email_exit: true });
            return

        } else {

            data.password = await bcrypt.hash(data.password, 10);

            const final = new signupDB(data);

            final.save().then(() => {

                resolve({ flag: true });

            }).catch(err => {

                reject();

            });

        }

    });

}

module.exports.login = (data) => {       // login Query

    return new Promise(async (resolve, reject) => {

        try {

            const signupDB = mongoos.model("Admin", signup_Admin_schema);

            const findData = await signupDB.findOne({ email: data.email });

            if (findData) {

                bcrypt.compare(data.password, findData.password).then((respo) => {

                    if (respo) {

                        resolve({ flag: true, data: findData });
                    } else {

                        resolve({ flag: false })

                    }

                });


            } else {

                resolve({ flag: false });

            }

        } catch (error) {

            reject();

        }

    });


}





module.exports.addproducts = (data) => {     //addproducts query  


    return new Promise((resolve, reject) => {

        const image = fs.readFileSync(data.img.path);
        const img = image.toString("base64");

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


        const dataadd = mongoos.model("products", addproductsschema);


        const final = new dataadd(finaldata);

        final.save().then((responce) => {

            resolve(responce);

        }).catch(err => {

            reject(err);
        });


    });

}


module.exports.viewpro = () => {      //viewpro query

    return new Promise(async (resolve, reject) => {

        const prodata = mongoos.model("products", addproductsschema);

        const result = await prodata.find().lean();

        if (result) {

            resolve(result);

        } else {

            reject("errr");

        }

    });

}


module.exports.onview = (proid) => {   //onview query

    return new Promise(async (resolve, reject) => {

        try {

            const productsDb = mongoos.model("products", addproductsschema);

            const findData = await productsDb.findOne({ _id: proid });

            if (findData) {


                resolve({ flag: true, data: findData });

            } else {

                resolve({ flag: false });
            }

        } catch (error) {

            reject("err");

        }

    });


}


module.exports.edit_pro = (proid) => {   //edit products  get  query


    return new Promise(async (resolve, reject) => {



        try {

            const productsDb = mongoos.model("products", addproductsschema);

            const finddata = await productsDb.findOne({ _id: proid });

            resolve({ data: finddata });


        } catch (error) {

            reject("err");

        }

    });

}


module.exports.edit_pro_post = (post_data) => {   //edit products post query

    return new Promise((resolve, reject) => {

        const { file, data, status } = post_data;

        const productsDB = mongoos.model("products", addproductsschema);


        try {

            if (status) {

                const image = fs.readFileSync(file.path);
                const img = image.toString("base64");


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

                    resolve();

                }).catch(err => {

                    reject();
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


                    resolve();

                }).catch(err => {

                    reject();

                });
            }


        } catch (error) {

            reject();
        }


    });



}


module.exports.pro_delete = (proid) => {   //products delete query

    return new Promise((resolve, reject) => {

        try {

            const productsDB = mongoos.model("products", addproductsschema);

            productsDB.deleteOne({ _id: proid }).then(() => {

                resolve();

            }).catch(err => {

                reject();
            })


        } catch (error) {

            reject();

        }

    })

}


module.exports.get_all_oders = () => {   //all oders query

    return new Promise(async (resolve, reject) => {

        try {

            const place_oder_DB = mongoos.model("placoder", place_oder_schema);


            const finddata = await place_oder_DB.find();

            if (finddata) {

                resolve({ flag: true, data: finddata });

            } else (

                resolve({ flag: true })
            )

        } catch (error) {

            reject();

        }

    });

}


module.exports.shiping = (data) => {   //shiping add query

    const { oderid, date } = data;

    return new Promise(async (resolve, reject) => {

        try {

            const place_oder_DB = mongoos.model("placoder", place_oder_schema);

            const findData = await place_oder_DB.updateOne({ _id: oderid }, {

                $set: {

                    status: "shipping",
                    delevary_date: date,
                    shiping: "true"

                }

            }).then(() => {

                resolve();

            }).catch(err => {

                reject();

            })

        } catch (error) {

            reject();


        }

    });


}



module.exports.oder_pro = (oderid) => {   // oder products show query

    const oderis_obj = new mongoos.Types.ObjectId(oderid);

    return new Promise(async (resolve, reject) => {

        try {


            const place_oder_DB = mongoos.model("placoder", place_oder_schema);

            const prolist = await place_oder_DB.aggregate([

                {
                    $match: { _id: oderis_obj }
                },
                {
                    $unwind: "$products"
                },
                {
                    $project: {

                        item: "$products.item",
                        quantity: "$products.quantity"
                    }

                },
                {

                    $lookup: {

                        from: "products",
                        foreignField: "_id",
                        localField: "item",
                        as: "prodata"

                    }




                },

                {

                    $project: {

                        item: 1, quantity: 1, prodata: { $arrayElemAt: ["$prodata", 0] }

                    }


                }



            ])



            resolve({ data: prolist });

        } catch (error) {

            reject();

        }

    })


}



module.exports.collect_report = () => {  // report get query 

    return new Promise(async (resolve, reject) => {

        try {


            const place_oder_DB = mongoos.model("placoder", place_oder_schema);

            const productsDB = mongoos.model("products", addproductsschema);

            const userdata = mongoos.model("user", user_signup_schema);


            const plceoder_count = await place_oder_DB.countDocuments();
            const products_count = await productsDB.countDocuments();
            const users_count = await userdata.countDocuments();




            const data = {

                plceoder_count,
                products_count,
                users_count

            }

            resolve(data);

        } catch (error) {

            reject();


        }

    });

}



                                                              //end 