
import {IMG_URL} from "../utils/constants"
const RestaurantMenu = (props) => {
    const { data } = props;
    console.log(data, "------------")
    return (
        <div className="flex justify-between border-b-2">
            <div className="w-10/12 text-left  m-4">
                {data.isVeg ==1?
                <div className="text-green-800 text-xs font-extrabold">Veg</div>
                :
                <div className="text-red-800 text-xs font-extrabold">Non-veg</div>}
                <div className="text-lg font-bold text-gray-900">{data.name}</div>
                <div className="font-bold text-gray-600 my-2">₹ {data.price / 100}</div>
                <div className="text-xs text-gray-400 my-2">{data.description}</div>
            </div>
            <div className="w-2/12 m-4">
                {data.imageId? <img className="h-20 w-20 rounded-lg text-center m-4"src={IMG_URL + data.imageId}></img>: ""} 
            </div>
        </div>
    )
}
export default RestaurantMenu;