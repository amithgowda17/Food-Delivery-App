import { Res_Link } from "./constants";
import { useState,useEffect } from "react";

const useRestaurantList = () =>{

    const [listOfRestaurant,setListOfRestaurant] = useState([]);

    useEffect(()=>{
        liveData();
    },[]);

   

    const liveData = async () => {
            const response = await fetch(
               Res_Link
            );
            
            const jsondata = await response.json();
            
            const restaurants = jsondata?.data?.cards?.[1]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards
            .filter(card => card && card.card && card.card.card && card.card.card.info)
            .map(card => card.card.card.info);
    
            console.log(restaurants);
            setListOfRestaurant(restaurants);
    
    };
    return listOfRestaurant;

}

export default useRestaurantList;