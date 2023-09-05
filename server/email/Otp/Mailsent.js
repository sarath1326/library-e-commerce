

const nodemailer=require("nodemailer");
const mailgen=require ('mailgen');



              //sent otp  signup time

  


  module.exports.varifi_mail=(data)=>{

              console.log(data);

            return new Promise((resolve,reject)=>{


                let config={

                    service:"gmail",
                    auth:{
                        user:"sarathsarath93366@gmail.com",
                        pass:"bqszytogqedtrxtz"
                    }
                };
    
    
                let transporter=nodemailer.createTransport(config);
    
    
    
                let mailGenarator=new mailgen({
    
                    theme:"default",
                    product:{
                        name:"mailgen",
                        link:"https://mailgen.js/"
                    }
    
                });
    
    
                let responces={
                    body:{
                        name:`${data.user.name}`,
                        intro: `your email varification code is ${data.sendotp}`
    
                    }
                }
    
    
                let mail=mailGenarator.generate(responces);
    
                let message={
    
                    from:"sarathsarath93366@gmail.com",
                    to:`${data.user.email}`,
                    subject:"email verification",
                    html:mail
                };
    
    
                transporter.sendMail(message).then(()=>{
    
                    console.log("mailsent sucssfully");
                    
                    resolve({emailsend:true});
                
                }).catch(err=>{
    
                    console.log(" mail sent filled",err)
                   
                    resolve({emailsend:false});
    
                });

              });

 };





   