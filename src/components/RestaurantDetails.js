import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {RES_DETAILS_URL} from "../utils/constants"

export const RestaurantDetails = (props)=>{
    const {resId }= useParams();
    const [resInfo, setResInfo]= useState({});
    useEffect(()=>{
        fetchMenu();
    },[])
    const fetchMenu = async ()=>{
        const response = await fetch(RES_DETAILS_URL+resId);
        const data = await response.json();
        setResInfo(data);
    }
    const info = resInfo?.data?.cards[0]?.card?.card?.info;
    if(!info){
        return <h2>ShimmerUI</h2>;
    }
    const {name} = info;
    const {cuisines} = info;
    return (
        <div>
            <h1>Testing-{resId}</h1>
            <h2>{name}</h2>
            <h3>{cuisines.join(", ")}</h3>
        </div>
    )
}