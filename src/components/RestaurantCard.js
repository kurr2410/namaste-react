// Inline css example
const inlineCSSRestCard = {
    backgroundColor: "rgb(207 205 205)",
    width: "300px",
    margin: "10px"
}

const RestaurantCard = ({ restaurant }) => {
    return <div className="rest-card" style={inlineCSSRestCard}>
        <img className="card-img" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+restaurant.info.cloudinaryImageId}></img>
        <h3>{restaurant.info.name}</h3>
        <h4>{restaurant.info.cuisines.join(", ")}</h4>
        <div className="card-footer">
            <h5>{restaurant.info.avgRating}</h5>
            <h5>{restaurant.info.sla.deliveryTime} mins</h5>
            <h5>{restaurant.info.costForTwo}</h5>
        </div>
    </div>
}

export default RestaurantCard;