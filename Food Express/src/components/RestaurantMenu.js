
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useParams } from "react-router";
import RestaurantCategory from "./RestaurantCategory";

export const RestaurantMenu = () => {
  

  const {resId} = useParams();

  const items=useRestaurantMenu(resId);
 

  if (items === null) {
    return <Shimmer />;
  }

  const{name,cuisines,costForTwoMessage} = items?.cards[2]?.card?.card?.info;

  const categories = items?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((res) =>
    res.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  )

  console.log("categories",categories);





  return (
    <div className="text-center">
      <h1 className="my-6 font-bold text-xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {
        categories.map((category)  =>( <RestaurantCategory key={category?.card?.card.title} data={category?.card?.card} /> ))
      }
    </div>
  );

};
