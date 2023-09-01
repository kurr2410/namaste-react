// Inline css example
// const inlineCSSRestCard = {
//     backgroundColor: "rgb(207 205 205)",
//     width: "300px",
//     margin: "10px"
// }

const RestaurantCard = ({ restaurant }) => {
    // return <div className="rest-card" style={inlineCSSRestCard}>
    return <div className="w-[300px] m-[10px] h-[480px] bg-slate-200 p-4 hover:bg-slate-300 hover:drop-shadow-lg rounded-lg" >
        <img className="w-[290px] h-[250px] rounded-md" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+restaurant.info.cloudinaryImageId}></img>
        <h3 className="text-xl font-bold my-3">{restaurant.info.name}</h3>
        <h4 className="text-lg">{restaurant.info.cuisines.slice(0,5).join(", ")}</h4>
        <div className=" my-2 text-sm">
            <h5>{restaurant.info.avgRating}</h5>
            <h5>{restaurant.info.sla.deliveryTime} mins</h5>
            <h5>{restaurant.info.costForTwo}</h5>
        </div>
    </div>
}

export default RestaurantCard;