

import {createContext} from "react"

import { useState } from "react"


export const viewcontext=createContext(null)
// export const username=createContext(null)





  function View ({children}){


    const [data,setdata]=useState()



        return(

            <viewcontext.Provider value={{data,setdata}}>


             {children}






            </viewcontext.Provider>






        )




  }

  export default View 






//    function name({children}){

// const [name,setname]=useState('')



//      return (


//          <username.Provider value={{name,setname}}>

//           {children}



//          </username.Provider>




//      )





//    }

//    export  name