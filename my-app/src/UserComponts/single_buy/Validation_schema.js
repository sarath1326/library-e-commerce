


import * as Yup from "yup" ;




export const validationSchema= Yup.object({

    name:Yup.string().min(3,"*enter more 3 char").required("*this filed is required"),
    
    adress:Yup.string().required("*this filed is required"),

    pincode:Yup.string().min(6,"*enter valid pincode").max(6,"*enter valid pincode").required("*this filed is required"),

    landmark:Yup.string().required("*this filed is required"),
   
    mobile:Yup.string().min(10,"*enter valid mobile number").max(10,"*enter valid mobile number ").required("*this filed is required")













})