import { createSlice, configureStore } from '@reduxjs/toolkit'

const initialState={
  items:[],
  totalQuantity:10,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add:(state,action)=>{
      state.items.push(action.payload);
      state.totalQuantity++;
    },
    remove:(state,action)=>{
      state.items = state.items.filter(item=> item.id !== action.payload);
      state.totalQuantity--;
    }
  }
})

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer
