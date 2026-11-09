import { useDispatch, useSelector } from 'react-redux';
import { addItem, clearCart, removeItem } from '../utils/cartSlice';
import { CDN_URL, EmptyCart_URL } from '../utils/constants';
import { Link } from 'react-router';

const Cartpage = () => {

    const {items:cartItems,restaurantId}=useSelector((store)=>store.cart);

    const dispatch=useDispatch();

    const handlePlusItem=(item)=>dispatch(addItem({item,restaurantId}));

    const handleRemoveItem=(item)=>dispatch(removeItem(item.card.info.id));

    const handleClearCart=()=>dispatch(clearCart());

    const totalPrice=cartItems.reduce((total,item)=>total+item.card.info.price/100 * item.quantity , 0);

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-8 sm:px-6 lg:px-8">
        <title>Cart Page</title>
        {/* Page Header */}
        <div className="max-w-6xl mx-auto mb-8">
            <p className="text-orange-500 font-semibold text-sm mb-1">Almost there 🍴</p>
            <div className="flex items-center justify-between">
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900"> Your Cart</h1>
                <span className="text-sm font-medium text-gray-500">
                    {cartItems.length} {cartItems.length === 1 ? "item" : "items"}</span>
            </div>
        </div>
        {/* Cart + Bill */}                                             {/*Conditional CSS */}
        <div className={`max-w-6xl mx-auto grid grid-cols-1 ${cartItems.length === 0 ? "lg:grid-cols-1" : "lg:grid-cols-3"}  gap-6 items-start`}>
            {/* Order Section */}
            <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
                <div className="px-5 py-4 border-b border-gray-200">
                    <h2 className="font-bold text-lg text-gray-900">🍽️ Your Order</h2>
                </div>
                {cartItems.length === 0 ? (
                    <div className="text-center py-12 px-4">
                        <img className="w-48 sm:w-56 h-auto mx-auto" src={EmptyCart_URL} alt="Empty cart"/>
                        <h2 className="text-xl font-bold text-gray-900 mt-5"> Your Cart Looks Empty</h2>
                        <p className="text-sm text-gray-500 mt-2"> You can go to the home page to view more restaurants</p>
                        <Link to="/"
                            className="inline-block mt-5 px-5 py-2.5 bg-orange-500 text-white font-semibold rounded-lg
                             hover:bg-orange-600 transition-colors" > Browse Restaurants</Link>
                    </div>
                ) : (
                    <>
                        {cartItems.map((item) => (
                            <div data-testid="foodItems" className="flex items-center gap-4 p-4 sm:p-5 border-b border-gray-200"
                                key={item.card.info.id}>
         {/* Food Image */}   <img className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-xl shrink-0"
                                    src={CDN_URL + item.card.info.imageId}  alt={item.card.info.name} />
         {/* Food Details */}   <div className="flex-1 min-w-0">
                                    <h3 className="text-sm sm:text-base font-semibold text-gray-900 truncate"> {item.card.info.name} </h3>
                                    <p className="text-sm text-gray-500 mt-1"> ₹ {item.card.info.price / 100} each </p>
                                    {/* Quantity */}
                                    <div className="inline-flex items-center mt-3 bg-green-50 border border-green-200 rounded-lg">
                                        <button className="px-3 py-1 text-lg font-semibold text-green-700 hover:bg-green-100 rounded-l-lg cursor-pointer"
                                            onClick={() => handleRemoveItem(item)} > − </button>
                                        <span className="px-3 text-sm font-bold text-gray-800"> {item.quantity} </span>
                                        <button className="px-3 py-1 text-lg font-semibold text-green-700 hover:bg-green-100 rounded-r-lg cursor-pointer"
                                            onClick={() => handlePlusItem(item)} > + </button>
                                    </div>
                                </div>
        {/* Item Total */}      <p className="font-bold text-gray-900 text-sm sm:text-base" 
                                     > ₹ {(item.card.info.price / 100) * item.quantity} </p>
                            </div>
                        ))}
                    </>
                )}
            </div>
            {/* Bill Details */}
            {cartItems.length > 0 && (
                <div className="lg:col-span-1">
                    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden sticky top-24">

                        <div className="px-5 py-4 border-b border-gray-200">
                            <h2 className="font-bold text-lg text-gray-900"> Bill Details </h2>
                        </div>
                        <div className="p-5 space-y-4">
                            <div className="flex justify-between text-sm text-gray-600">
                                <span>Item Total</span>
                                <span className="font-medium text-gray-900"> ₹ {totalPrice} </span>
                            </div>
                            <div className="flex justify-between text-sm text-gray-600">
                                <span>Delivery</span>
                                <span className="font-medium text-gray-900"> ₹ 40 </span>
                            </div>
                            <div className="flex justify-between text-sm text-gray-600">
                                <span>Taxes</span>
                                <span className="font-medium text-gray-900"> ₹ 29 </span>
                            </div>
                            <div className="border-t border-dashed border-gray-300 pt-4 flex justify-between">
                                <span className="font-bold text-gray-900"> To Pay </span>
                                <span className="font-bold text-xl text-gray-900"> ₹ {totalPrice + 40 + 29} </span>
                            </div>
                            <button className="w-full mt-2 py-3 bg-orange-500 text-white font-bold rounded-xl
                             hover:bg-orange-600 transition-colors cursor-pointer"  >Proceed to Checkout →</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
        {/* Clear Cart */}
        {cartItems.length > 0 && (
            <div className="max-w-6xl mx-auto flex justify-end mt-6">
                <button
                    className="px-4 py-2 text-sm font-semibold text-red-500 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors cursor-pointer"
                    onClick={handleClearCart}>🗑 Clear Cart</button>
            </div>
        )}
      </div>
)}

export default Cartpage;
