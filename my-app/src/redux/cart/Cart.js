



import {createSlice} from "@reduxjs/toolkit"







const INITALL_STATE={
    cartcount:0
}


const cartSlice=createSlice({


    name:"cart",
    initialState:INITALL_STATE,
    reducers:{

        AddCart:(state,count)=>{

            

          state.cartcount = count.payload

            

           

        }

    }

    

})


export const {AddCart} = cartSlice.actions


export default cartSlice.reducer