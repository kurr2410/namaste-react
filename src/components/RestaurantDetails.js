import { useParams } from "react-router-dom";
import {useRestaurantDetails} from "../utils/useRestaurantDetails"

export const RestaurantDetails = ()=>{
    const {resId }= useParams();
    const resInfo = useRestaurantDetails(resId);
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