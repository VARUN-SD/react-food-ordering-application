import RestaurantCard, { withVegLabel } from "./RestaurantCard";
import { useEffect, useState } from "react";
import { ResListAPI } from "../utils/constants";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import { IoMdCloseCircle } from "react-icons/io";
import Shimmer from "./Shimmer";
 const Body=()=>{
    const [ListofRestaurants,setListofRestaurants]=useState([]);

    const [filteredRestaurant,setFilteredRestaurants]=useState([]);

    const [searchText,setSearchText]=useState("");

    const [topRated,setTopRated]=useState("Top Rated Restaurants");

    const[loading,setLoading]=useState(true);

    const onlineStatus=useOnlineStatus();   //Custom Hook

    const VegRestaurantCard=withVegLabel(RestaurantCard);  //HOC

    useEffect(()=>{
        fetchResList()
    },[]);
  

    const fetchResList = async () => {
      try {
        const response = await fetch(ResListAPI);
        const json = await response.json();
        const restaurants =json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

        if (restaurants.length === 0) {
          throw new Error("No restaurant data available");
        }

        setListofRestaurants(restaurants);  //Original api data
        setFilteredRestaurants(restaurants);  //displayed data

      } catch (error) {
        console.error("Failed to fetch restaurants:", error);
      } finally {
        setLoading(false);
      }
    };

    if (onlineStatus === false) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50">
          <div className="text-center">
            <span className="text-6xl mb-4">📡</span>
            <h1 className="text-2xl font-bold text-slate-800"> Looks like You're Offline! </h1>
            <p className="text-slate-500 mt-2"> Please check your Internet connection </p>
          </div>
        </div>
      );
    }

    if (loading) return <Shimmer/>;

    return (
      <div className="min-h-screen bg-slate-50">

      {/* HERO SECTION */}
      <section className="bg-linear-to-r from-orange-500 via-orange-400 to-amber-400">
        <div className="max-w-7xl mx-auto px-6 py-14 text-center">
          <p className="text-orange-100 font-medium mb-2"> Hungry? We've got you covered 🍴 </p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white"
           > Discover Your Next <span className="block">Favourite Meal</span> </h1>
          <p className="text-orange-50 mt-4 max-w-xl mx-auto"
            >  Explore the best restaurants and delicious food around you.  </p>

          {/* SEARCH */}
          <div className="max-w-2xl mx-auto mt-8 flex bg-white rounded-2xl p-2 shadow-xl">
            <span className="flex items-center px-1 text-xl"> 🔍 </span>
            <input type="text" data-testid="SearchInput" name="search" placeholder="Search for restaurants..."
              className="flex-1 px-2 py-3 outline-none text-slate-700" value={searchText}
              onChange={(e) => setSearchText(e.target.value)} />
            <button className="bg-slate-900 text-white px-2 sm:px-6 py-3 rounded-xl font-semibold
                         hover:bg-slate-800 transition-all duration-200 hover:scale-105 cursor-pointer"
              onClick={() => {
                const searchedRestaurant = ListofRestaurants.filter((res) =>
                  res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
                setFilteredRestaurants(searchedRestaurant);
              }}> Search </button>
        {searchText && <button  className="px-2 hover:text-orange-500 cursor-pointer"
           onClick={() => {
              setSearchText("");
              setFilteredRestaurants(ListofRestaurants);
              setTopRated("Top Rated Restaurants");
        }} > <IoMdCloseCircle size={25}/> </button>}
          </div>
        </div>
      </section>

      {/* FILTER SECTION */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-slate-800" >  Restaurants </h2>
            <p className="text-slate-500 text-sm mt-1" > Discover something delicious today  </p>
            </div>
          <button className="bg-white border border-slate-200 px-5 py-3 rounded-xl font-semibold text-slate-700 cursor-pointer
                       shadow-sm hover:shadow-md hover:border-orange-400 hover:text-orange-500 transition-all duration-200"
            onClick={() => {
              if (topRated === "Top Rated Restaurants") {
                const filteredList = ListofRestaurants.filter((res) => res.info.avgRating > 4.5);
                setFilteredRestaurants(filteredList);
                setTopRated("View All Restaurants");
              } else {
                setFilteredRestaurants(ListofRestaurants);
                setTopRated("Top Rated Restaurants");
              }
            }} > ⭐ {topRated} </button>
        </div>
      </div>

      {/* RESTAURANT GRID */}
      <div className="max-w-7xl mx-auto px-6 pb-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7" >
        {filteredRestaurant.map((restaurant) => (
          <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id} >
            {restaurant.info.veg ? <VegRestaurantCard resData={restaurant} /> : <RestaurantCard resData={restaurant} /> }
          </Link>
        ))}
         {filteredRestaurant.map((restaurant) => (
          <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id} >
            {restaurant.info.veg ? <VegRestaurantCard resData={restaurant} /> : <RestaurantCard resData={restaurant} /> }
          </Link>
        ))}
      </div>

      {/* NO RESULTS */}
      {filteredRestaurant.length === 0 && (
        <div className="text-center py-20">
          <div className="text-6xl mb-4">🍽️</div>
          <h2 className="text-2xl font-bold text-slate-800"> No restaurants found </h2>
          <p className="text-slate-500 mt-2"> Try searching for something else. </p>
        </div>
      )}
      </div>
    );
 };

export default Body;