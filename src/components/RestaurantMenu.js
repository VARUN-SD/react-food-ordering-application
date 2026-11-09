import { useState } from 'react';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import RestaurantCategory from './RestaurantCategory';
import { useParams } from 'react-router';
import Spinner from './Spinner';
const RestaurantMenu = () => {

  const [activeIndex,setActiveIndex]=useState(0);

   const {resId}=useParams();

   const resInfo=useRestaurantMenu(resId);

    if (resInfo===null) return <Spinner/>;
    
    const {name,costForTwo,cuisines}=resInfo?.cards[2]?.card?.card?.info;

    const categories=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.slice(1);
    //console.log(categories);

  return (
    <div className='min-h-screen bg-slate-50 py-8'>
      <div className="w-full max-w-3xl mx-auto p-4 sm:p-6 mb-6 bg-white rounded-2xl shadow-sm border border-gray-200">
        <title>{`${name} Menu`}</title>
        <h1 className='font-bold text-2xl sm:text-3xl text-gray-900 mb-3'>{name}</h1>
        <p className='text-sm sm:text-base text-gray-600 mb-2 '>{cuisines.join(", ")}</p>
        <p className="font-semibold text-gray-800">{costForTwo}</p>
      </div>
      <div >
       {categories.map((category,index)=> 
       <RestaurantCategory key={category.card.card.title}
       showItems={activeIndex===index ? true : false } 
       setActiveIndex={()=>setActiveIndex(activeIndex===index ? null : index)}
        data={category.card.card} resId={resId} />)}
      </div  >
    </div>
  )
}

export default RestaurantMenu;
