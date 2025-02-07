import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Menu_Link } from "../utils/constants";
import { useParams } from "react-router";

export const RestaurantMenu = () => {
  const [items, setItems] = useState(null);

  
  const {resId} = useParams();

  useEffect(() => {
    menuData();
  }, []);

  const menuData = async () => {
      const response = await fetch(
        Menu_Link+resId
      );

      const menuItems = await response.json();

        setItems(menuItems.data);
  };

  if (items === null) {
    return <Shimmer />;
  }

  const cardData = items?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card?.itemCards;

  const otherResdata=items?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[5]?.card?.card?.itemCards;

  const{name,cuisines,costForTwoMessage} = items?.cards[2]?.card?.card?.info;

 console.log(cardData);
 console.log(otherResdata);
  


 const isCardDataValid = Array.isArray(cardData) && cardData.length >=4;
 const itemsToDisplay = isCardDataValid ? cardData : otherResdata;


  return (
    <div className="menu-container">
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <h2>Menu</h2>
      <ul>
        {itemsToDisplay?(itemsToDisplay.map((res) => (
          <li key={res.card.info.id}>
            {res.card.info.name} - Rs. {res.card.info.price / 100 || res.card.info.defaultPrice/100}
          </li>
        ))):<h2>Menu Not Available</h2>}
      </ul>
    </div>
  );

};
