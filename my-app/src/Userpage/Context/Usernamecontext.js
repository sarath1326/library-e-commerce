


import { createContext } from "react";
import { useState } from "react";


export const namecontext=createContext(null)





function Name({children}){

    const [nameuser,setnameuser]=useState({})
    
    
    
         return (
    
    
             <namecontext.Provider value={{nameuser,setnameuser}}>
    
              {children}
    
    
    
             </namecontext.Provider>
    
    
    
    
         )
    
    
    
    
    
       }
    
       export default  Name



