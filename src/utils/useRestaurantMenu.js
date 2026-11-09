import { useEffect,useState} from"react";
import { MenuAPI } from "./constants";

const useRestaurantMenu=(resId)=>{
    const [resInfo,setResInfo]=useState(null);

    useEffect(()=>{
        fetchMenu();
    },[]);

    const fetchMenu=async()=>{
        try{
            const data=await fetch(MenuAPI+resId);
            const json=await data.json();
            //console.log(json);
            setResInfo(json?.data);   
        } catch (error) {
            console.error("Failed to fetch Menu:",error);
        }
    }

    return resInfo;
};

export default useRestaurantMenu;   