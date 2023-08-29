import { useEffect, useState } from "react"
import {RES_DETAILS_URL} from "./constants"
export const useRestaurantDetails = (resId)=>{
    const [resInfo, setResInfo] = useState(null);
    useEffect(()=>{
        fetchData()
    },[]);
    const fetchData = async ()=>{
        const response = await fetch(RES_DETAILS_URL+resId);
        const data = await response.json();
        setResInfo(data);
    }
    return resInfo;
}

// export default useRestaurantDetails;