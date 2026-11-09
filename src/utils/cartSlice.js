import { createSlice } from "@reduxjs/toolkit";


const cartSlice=createSlice({
    name:'cart',
    initialState:{
        items:[],
        restaurantId: null,
        error: null,
    },
    reducers:{
        addItem:(state,action)=>{
            const{ item, restaurantId } = action.payload;
            // Prevent adding items from another restaurant
            // if(state.restaurantId !== null && state.restaurantId !== restaurantId){
            //     state.error="Your cart already contains items from another restaurant. Clear your cart to continue.";
            //     return;
            // }
            // Remember the restaurant for the first item    
            if(state.restaurantId===null ){
                state.restaurantId=restaurantId;
            }
            state.error=null;

            const existingItem = state.items.find((cartItem) => cartItem.card.info.id === item.card.info.id);
            //adding items to the cart ..if item already exist it adds quantity of item
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.items.push({...item,quantity: 1});
            }
        },
        removeItem:(state,action)=>{
            
            const existingItem=state.items.find(item => item.card.info.id === action.payload);

            if(existingItem){
                if(existingItem.quantity>1){
                    existingItem.quantity-=1;
                } else {
                     state.items = state.items.filter((item) => item.card.info.id !== action.payload) 
                }
            }
            if (state.items.length===0){
                state.restaurantId = null;
                state.error = null;
            }
        },
        clearCart:(state)=>{
            state.items.length = 0;
            state.restaurantId = null;
            state.error = null 
        },
    }
});

export const {addItem,removeItem,clearCart}=cartSlice.actions;

export default cartSlice.reducer;