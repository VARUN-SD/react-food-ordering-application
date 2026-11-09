import ItemList from './ItemList';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const RestaurantCategory = ({data,showItems,setActiveIndex,resId}) => {

    const handleClick=()=>{
      setActiveIndex()
    }
  return (
    <div className="w-full max-w-3xl mx-auto my-3 sm:my-4 px-2 sm:px-0 bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">         
      <div  className=' flex items-center justify-between gap-4 px-6 sm:px-5 py-4 cursor-pointer
                           hover:bg-gray-50 transition-colors' onClick={handleClick}>
        <span className='flex-1 min-w-0 font-semibold text-gray-800 '>{data.title} ({data.itemCards.length})</span>
        <span className='shrink-0 text-gray-500'>{showItems ? <FaChevronUp/> : <FaChevronDown/>}</span>
      </div >
        {showItems && <ItemList items={data.itemCards} restaurantId={resId}/>}
    </div>
  )
}

export default RestaurantCategory;
