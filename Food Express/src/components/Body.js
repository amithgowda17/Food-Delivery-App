import { useEffect, useState } from 'react';
import {RestaurantCard,WithPromotedLabel} from './RestaurantCard';
import Shimmer from './Shimmer';
import { Link } from "react-router";
import useRestaurantList from '../utils/useRestaurantList';

const Body = () =>{

    //const [listOfRestaurant,setListOfRestaurant] = useState(resobj); 
    // now we make api call

    const [searchText,setSearchText] = useState("");
    const [filteredListOfRestaurant,setFilteredListOfRestaurant] = useState([]);

    const listOfRestaurant=useRestaurantList();

    const Promoted=WithPromotedLabel(RestaurantCard);
  
    useEffect(() => {
        if (listOfRestaurant.length > 0) {
            setFilteredListOfRestaurant(listOfRestaurant);
        }
    }, [listOfRestaurant]);
    
    //conditional rendering
    if(listOfRestaurant.length === 0){
       
        return <Shimmer />;
    }
 

    return(
        <div className="body">
        <div className="flex">
            <div className="search-option">

                <input type='text' value={searchText} className='ml-4 p-1 border border-solid border-black'
                onChange={(e) => {
                    setSearchText(e.target.value);
                }} ></input>
                
                <button className="px-4 py-2 bg-green-200 m-4 rounded-lg" onClick={()=>{

                    const searched= listOfRestaurant.filter((res)=>
                        (res.name.toLowerCase().includes(searchText.toLowerCase())));

                    setFilteredListOfRestaurant(searched);

                    console.log(searchText);
                    console.log(searched);
                }}>Search</button>
            
            </div>
            
            <button className='bg-gray-200 m-4 px-4 rounded-lg'
            onClick={()=>{
                const filterRes=filteredListOfRestaurant.filter((res) => res.avgRating>4.5);
                setFilteredListOfRestaurant(filterRes);
            }}
            >Top Rated Restaurant</button>
        
        </div>
        <div className="flex flex-wrap" >
            {   
                    filteredListOfRestaurant.map(restaurant =>
                        <Link 
                        className="menu-click"
                        key={restaurant.id}
                        to={"/restaurants/"+restaurant.id}
                        >
                            {restaurant.promoted?<Promoted resData={restaurant} />:<RestaurantCard  resData={restaurant}/>}

                        </Link>  )
            }
        </div>
        </div>
    );
};

export default Body;