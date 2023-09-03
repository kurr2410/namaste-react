import { useEffect, useState } from "react";
import { restData } from "../utils/mockData";
import RestaurantCard, {withPromotedLabel} from "./RestaurantCard";
import { useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const PromotedRestaurantcard = withPromotedLabel(RestaurantCard)

export const Body = () => {
    const [resList, setResList] = useState([]);
    const [searchRes, setSearchRes] = useState("");
    const [filteredResList, setFilteredResList] = useState([]);
    console.log("body component")
    const status = useOnlineStatus();
    console.log(resList,"---------")
    useEffect(() => {
        fetchResData();
    }, [])

    const fetchResData = async () => {
        const swiggyUrl = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9233948&lng=77.6385779&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
        const response = await fetch(swiggyUrl);
        const json = await response.json();
        const data = json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        setResList(data || []);
        setFilteredResList(data ||[]);
    }
    if(!status){
        return <h2>Looks like you are offline, Please check your internet connection.</h2>
    }

    return resList?.length == 0 || filteredResList?.length == 0 ? <Shimmer/>: <div id="body">
        <div className="flex justify-start items-center">
        <div className="m-4">
            <button className="bg-sky-200 hover:bg-sky-400 p-2 rounded-md" onClick={() => {
                const filterData = resList.filter(item => item.info.avgRating >= 4);
                setFilteredResList(filterData||[]);
            }}>
                Top rated restaurants
            </button>
        </div>
        <div className="mx-80">
            <input className="w-80 focus:outline-none bg-sky-100 hover:bg-sky-200 p-2 rounded-md" type="text" placeholder="Search for restaurant, cuisine or a dish.." name="search" value={searchRes} onChange={(e)=>{
                setSearchRes(e.target.value)
            }} />
            <button type="submit" className="bg-sky-200 hover:bg-sky-400 p-2 m-2 rounded-md" onClick={()=>{
                const searchresult = resList.filter((item)=> item.info.name.toLowerCase().includes(searchRes.toLowerCase()))
                setFilteredResList(searchresult||[]);
            }}>Search</button>
        </div>
        </div>
        <div className="flex flex-wrap justify-between">
            {filteredResList.map(ele => {
                const item = ele;
                return <Link key={item.info.id} to={"/restaurant/"+item.info.id}>
                    {item?.info?.aggregatedDiscountInfoV3?.header ? 
                    <PromotedRestaurantcard restaurant={item}></PromotedRestaurantcard> : <RestaurantCard restaurant={item}></RestaurantCard>
            }</Link>
            })}
        </div>
    </div>

}