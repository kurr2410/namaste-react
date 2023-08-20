import { useEffect, useState } from "react";
import { restData } from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
export const Body = () => {
    const [resList, setResList] = useState([]);
    const [searchRes, setSearchRes] = useState("");
    const [filteredResList, setFilteredResList] = useState([]);
    console.log(resList,"---------")
    useEffect(() => {
        fetchResData();
    }, [])

    const fetchResData = async () => {
        const swiggyUrl = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9233948&lng=77.6385779&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
        const response = await fetch(swiggyUrl);
        const json = await response.json();
        const data = json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        setResList(data);
        setFilteredResList(data);
    }

    return resList?.length == 0 ? <Shimmer/>: <div id="body">
        <div>
            <button className="topRatedres" onClick={() => {
                const filterData = resList.filter(item => item.info.avgRating >= 4);
                setFilteredResList(filterData);
            }}>
                Top rated restaurants
            </button>
        </div>
        <div className="searchBar">
            <input type="text" placeholder="Search for restaurant, cuisine or a dish.." name="search" value={searchRes} onChange={(e)=>{
                setSearchRes(e.target.value)
            }} />
            <button type="submit" onClick={()=>{
                const searchresult = resList.filter((item)=> item.info.name.toLowerCase().includes(searchRes.toLowerCase()))
                setFilteredResList(searchresult);
            }}>Search</button>
        </div>
        <div className="restaurant-container">
            {filteredResList.map(ele => {
                const item = ele;
                return <Link key={item.info.id} to={"/restaurant/"+item.info.id}><RestaurantCard restaurant={item}></RestaurantCard></Link>
            })}
        </div>
    </div>

}