import { CDN_URL, fallbackFood } from "../utils/constants";
const RestaurantCard=(props)=>{
  
    const {resData}=props;
    //console.log(resData);

    const {cloudinaryImageId,name,avgRating,cuisines,costForTwo}=resData?.info;

    const resName3="Spice Kingdom"; //image error of 4th resCard so replacing it

    return(
        <div data-testid="ResCard" className="res-card w-full bg-white rounded-2xl overflow-hidden 
                                              shadow-sm hover:shadow-lg hover:scale-102 duration-400 ">
            <img className="res-image w-full h-44 sm:h-48 object-cover " alt="res-image" 
            src={name===resName3 ? CDN_URL + fallbackFood : CDN_URL + cloudinaryImageId }></img>
            <h2 className="font-bold px-4 pt-4 text-base sm:text-lg text-gray-900 truncate">{name}</h2>
            <div className="px-4 mt-2">
             <span className="inline-flex items-center gap-1 bg-green-100 text-green-700
                              text-sm font-bold px-2.5 py-1 rounded-lg"> ⭐ {avgRating}</span>
            </div>
            <h4 className="px-4  mt-2 text-sm text-gray-500 leading-5 line-clamp-2">{cuisines.join(", ")}</h4>
            <h4 className="font-semibold px-4 pt-2 pb-4 text-sm text-gray-800">{costForTwo}</h4>
        </div>
    )
};


export const withVegLabel=(RestaurantCard)=>{
    return(props)=>{
        return(
            <div className="relative">
                <label className="absolute top-0 right-0 z-10  bg-green-600 text-white
                 text-xs font-bold px-3 py-2 rounded-tr-2xl rounded-bl-2xl shadow-md">🥗 VEG</label>
                <RestaurantCard {...props} />
            </div>
        )
    }
};
export default RestaurantCard;