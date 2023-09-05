


import * as Yup from "yup" ;



export const Signupschema=Yup.object({

    name:Yup.string().min(3,"*enter more 3 char").required("*this filed is required"),
    
    email:Yup.string().email("*enter valid email id").required("*this filed is required"),

    mobile: Yup.string().min(10,"enter valid number").max(10,"enter valid number").required("*this filed is required"),
    
    password:Yup.string().min(4,"*enter minimum 4 char").required("*this filed is required"),
    
    
})

