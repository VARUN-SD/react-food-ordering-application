import { useDispatch, useSelector } from 'react-redux';
import { CDN_URL } from '../utils/constants';
import { addItem, clearCart, clearCartError } from '../utils/cartSlice';
import { useState } from 'react';

const ItemList = ({items,restaurantId}) => {

  const {items:cartItems,restaurantId:cartRestaurantId}=useSelector((store)=>store.cart);

  const dispatch=useDispatch();

  const [showPopup,setShowPopup]=useState(false);
  const [selectedItem,setSelectedItem]=useState(null);

  const handleAddItem=(item)=>{
    if(cartItems.length >0 && cartRestaurantId !==restaurantId){
      setSelectedItem(item);
      setShowPopup(true);
      return;
    }
    dispatch(addItem({item, restaurantId}));
  };

  const handleCancel=()=>{
    setSelectedItem(null);
    setShowPopup(false);
  };

  const handleClearCartAndAdd=()=>{
    dispatch(clearCart());
    dispatch(addItem({item:selectedItem,restaurantId}));
    setSelectedItem(null);
    setShowPopup(false);
  };
    
  return (
    <div  >
      {items.map((item)=> (
      <div data-testid="foodItems" className="text-left flex justify-between p-3 sm:p-4 gap-3 sm:gap-4 border-b border-gray-200" 
          key={item.card.info.id}>
        <div className="flex-1 min-w-0">
            <h3 className="text-sm sm:text-base font-semibold text-gray-800" >{item.card.info.name}</h3>
            <p className="mt-1 text-sm font-medium text-gray-700">₹ {item.card.info.price/100}</p>
            <p className="mt-2 text-sm line-clamp-2 text-gray-500">{item.card.info.description}</p>
        </div>
        <div className="relative w-20 sm:w-24 shrink-0"> 
            <img className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl object-cover" src={CDN_URL+item.card.info.imageId}></img>
            <button className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-3 sm:px-4 py-1 bg-white text-green-600 font-bold 
                                 shadow-md border border-gray-200 rounded-lg hover:bg-green-50 transition-colors cursor-pointer" 
            onClick={()=>handleAddItem(item)}>ADD</button>
        </div>
      </div>
    ))}

    {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div role="dialog" aria-modal="true" aria-labelledby="cart-dialog-title"
            className="w-full max-w-md rounded-xl bg-white p-6 shadow-xl" >
            <h2 id='cart-dialog-title' className="text-xl font-bold text-gray-800"> Replace cart items? </h2>
            <p className="mt-3 text-sm leading-6 text-gray-600">
              Your cart contains items from another restaurant.
              Would you like to clear your cart and add this item?
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <button className="flex-1 rounded-lg border border-gray-300 px-4 py-3 font-semibold text-gray-700 hover:bg-gray-100"
                onClick={handleCancel}> Cancel</button>
              <button className="flex-1 rounded-lg bg-orange-500 px-4 py-3 font-semibold text-white hover:bg-orange-600"
                onClick={handleClearCartAndAdd} >  Clear cart &amp; add </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ItemList;
