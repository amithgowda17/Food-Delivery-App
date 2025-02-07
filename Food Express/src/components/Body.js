
import { useEffect, useState } from 'react';
import {RestaurantCard} from './RestaurantCard';
import Shimmer from './Shimmer';
import { Link } from "react-router";

const Body = () =>{
    
    const [listOfRestaurant,setListOfRestaurant] = useState([]);
    const [searchText,setSearchText] = useState("");
    const [filteredListOfRestaurant,setFilteredListOfRestaurant] = useState([]);


    useEffect(()=>{
        liveData();
    },[]);

   

    const liveData = async () => {
            const response = await fetch(
                "https://www.swiggy.com/dapi/restaurants/search/v3?lat=12.9715987&lng=77.5945627&str=non%20veg%20restaurants&trackingId=97621973-b49b-2a7a-a1ad-e86e94387bc7&submitAction=ENTER&queryUniqueId=2e2f0cc5-bb68-86c1-0aab-19c247d573fa"
            );
            
            const jsondata = await response.json();
            
            const restaurants = jsondata?.data?.cards?.[1]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards
            .filter(card => card && card.card && card.card.card && card.card.card.info)
            .map(card => card.card.card.info);
            
                console.log(restaurants);
            setListOfRestaurant(restaurants);
            setFilteredListOfRestaurant(restaurants);
        
    };
    
  
    //conditional rendering
    if(listOfRestaurant.length === 0){
       
        return <Shimmer />;
    };
 

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
                        ><RestaurantCard  resData={restaurant}/></Link>  )
            

            }
        </div>
        </div>
    );
};

export default Body;