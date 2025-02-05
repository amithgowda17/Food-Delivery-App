import { CardImage_Link } from "../utils/constants";

export const RestaurantCard=(props) =>{
    const {resData} = props;

    const {
        cloudinaryImageId,
        name,
        cuisines,
        avgRating,
        costForTwoMessage
     } =  resData; //optional chaining

    return(
        <div className="rest-card" style={{backgroundColor:"#f0f0f0"}}>
            <img className="cardlogo" src={
            CardImage_Link + cloudinaryImageId
            }> 
            </img>

            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4> {avgRating} stars</h4>
            <h4>{costForTwoMessage} </h4>
            <h4> {resData.sla.deliveryTime} minutes</h4>
        </div>
    );
};
