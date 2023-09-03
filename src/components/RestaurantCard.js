import { IMG_URL } from "../utils/constants";
const RestaurantCard = ({ restaurant }) => {
    // return <div className="rest-card" style={inlineCSSRestCard}>
    return <div className="w-[300px] m-[10px] h-[480px] bg-slate-200 p-4 hover:bg-slate-300 rounded-lg" >
        <img className="w-[290px] h-[250px] rounded-md" src={IMG_URL+restaurant.info.cloudinaryImageId}></img>
        <h3 className="text-xl font-bold my-3">{restaurant.info.name}</h3>
        <h4 className="text-lg">{restaurant.info.cuisines.slice(0,5).join(", ")}</h4>
        <div className=" my-2 text-sm">
            <h5>{restaurant.info.avgRating}</h5>
            <h5>{restaurant.info.sla.deliveryTime} mins</h5>
            <h5>{restaurant.info.costForTwo}</h5>
        </div>
    </div>
}

export const withPromotedLabel = (RestaurantCard)=>{
    return (props)=>{
        const {restaurant} = props;
        return (
            <div><label className="bg-black text-white absolute m-2 p-2 rounded-md">"{restaurant?.info?.aggregatedDiscountInfoV3?.header+" "+restaurant?.info?.aggregatedDiscountInfoV3?.subHeader}"</label>
            <RestaurantCard {...props}></RestaurantCard>
            </div>
        )
    }
}

export default RestaurantCard;