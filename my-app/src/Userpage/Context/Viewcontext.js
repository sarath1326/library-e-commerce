

import {createContext} from "react"

import { useState } from "react"


export const viewcontext=createContext(null)





  function View ({children}){


    const [data,setdata]=useState()



        return(

            <viewcontext.Provider value={{data,setdata}}>


             {children}






            </viewcontext.Provider>






        )




  }

  export default View