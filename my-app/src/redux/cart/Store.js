





import { configureStore} from "@reduxjs/toolkit"


   import cartReducer from "../cart/Cart"


     export const store= configureStore({

        reducer:{
            
            count:cartReducer
        
       
        }

      })

