import { CardImage_Link } from "../utils/constants";

export const RestaurantCard=(props) =>{
    const {resData} = props;

    const {
        cloudinaryImageId,
        name,
        cuisines,
        avgRating,
        avgRatingString,
        costForTwoMessage
     } =  resData; //optional chaining

    return(
        <div className="m-4 p-4 w-[260px] h-[500px] bg-gray-100 hover:bg-gray-300">
            <img className="h-52 w-[260px]" src={
            CardImage_Link + cloudinaryImageId
            }> 
            </img>

            <h3 className="font-bold py-3 text-lg">{name}</h3>
            <h4 className="pb-3">{cuisines.join(", ")}</h4>
            <h4 className="pb-3"> {avgRating || avgRatingString} stars</h4>
            <h4 className="pb-3">{costForTwoMessage} </h4>
            <h4> {resData.sla.deliveryTime} minutes</h4>
        </div>
    );
};
