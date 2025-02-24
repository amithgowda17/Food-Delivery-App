import { useState } from "react";
import ItemsList from "./ItemsList";


const RestaurantCategory = ({data})=>{

    const [showItems,setShowItems] = useState(false);

  const handleClick= () =>{
   setShowItems(!showItems);
  };


    return(
        <div>
            <div className="bg-gray-100 shadow-lg p-3 my-4 w-6/12 mx-auto">
               <div className="flex justify-between cursor-pointer" onClick={handleClick} >
               <span className="font-bold text-base">{data.title} ({data.itemCards.length})</span>
               <span>⬇</span>
                </div> 
               {showItems && <ItemsList items={data.itemCards}/>} 
            </div>

           
            {/* Accordian */}
           
        </div>
    )
};

export default RestaurantCategory;