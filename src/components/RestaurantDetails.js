import { useParams } from "react-router-dom";
import { useRestaurantDetails } from "../utils/useRestaurantDetails"
import RestaurantCategory from "./RestaurantCategory";

export const RestaurantDetails = () => {
    const { resId } = useParams();
    const resInfo = useRestaurantDetails(resId);
    const info = resInfo?.data?.cards[0]?.card?.card?.info;
    const groupedCard = resInfo?.data?.cards[2].groupedCard;
    const categories = groupedCard?.cardGroupMap?.REGULAR?.cards.filter((category) =>
        category.card.card["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    )

    if (!info) {
        return <h2>ShimmerUI</h2>;
    }
    console.log(info, "info==============")
    const { name, cuisines, areaName, sla, avgRating } = info;
    return (
        <div className="text-center w-6/12 mx-auto">
        <div className="flex justify-between m-4">
        <div className="text-left my-2">
            <h1 className="text-3xl text-bold">{name}</h1>
            <h3 className="text-sm text-gray-400">{cuisines.join(", ")}</h3>
            <h3 className="text-sm text-gray-400">{areaName}, {sla.lastMileTravelString}</h3>
        </div>
        <div className="m-4 text-center">Rating: {avgRating}</div>
        </div>
        <div className="py-2">
        {categories.map((category, index) => {
            return (<RestaurantCategory key={index} category={category}></RestaurantCategory>)
        })}
    </div>
    </div> 
    )
}