import { Menu_Link } from "./constants";
import { useState,useEffect } from "react";

const useRestaurantMenu = (resId)=>{

  const [items,setItems] = useState(null);
  
   useEffect(()=>{
    menuData();
   },[]);

  const menuData = async () => {
      const response = await fetch(
        Menu_Link+resId
      );
      const menuItems = await response.json();
        setItems(menuItems.data);
  };

  return items;

};

export default useRestaurantMenu;