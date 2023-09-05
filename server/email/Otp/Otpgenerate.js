

const { otpGen } = require('otp-gen-agent');
const db=require("../../MonoDb/dbtransoer/Userdb")

const emailSend=require ("./Mailsent")

    







module.exports.otpsend=(userdata)=>{

  return new Promise( async(resolve,reject)=>{


    const otp = await otpGen();

    const finalotp=otp

    const user_name_email={email:userdata.email, name:userdata.name}

    const data={sendotp:finalotp,user:user_name_email}

       
    emailSend.varifi_mail(data).then((respo)=>{

                   if(respo.emailsend){

                     
                    const saveData={
                      sendotp: finalotp,
                      userDetailes:userdata
                    }

                    db.otpData(saveData) ;

                    resolve({flag:true})
                    
                    }else{

                      resolve({flag:false})
                    
                    }

    }).catch(err=>{
        
       console.log("mailsent time err" +err)
    })






       

  })


}