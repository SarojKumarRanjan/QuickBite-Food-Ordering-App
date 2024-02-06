import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
  name:"cart",
  initialState:{
    item:["hello","name"],


  },
  reducers:{
    addItem : (state,action) => {
       state.item.push(action.payload)

    },
    clearCart:(state) => {
        // eslint-disable-next-line no-unused-vars
        state.item = [];
    },
    removeItem:(state) => {
        state.item.pop();
    }
  }
})

export const {addItem,clearCart,removeItem} = cartSlice.actions
export default cartSlice.reducer;