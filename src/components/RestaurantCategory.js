import { useState } from "react"
import RestaurantMenu from "./RestaurantMenu";
const RestaurantCategory = (props) => {

    const { category, isCollapsed, expandCategory  } = props;
    return (
        <div>
            <div className="bg-slate-100 border-b-2 border-gray-400 p-4 shadow-lg flex justify-between cursor-pointer"
             onClick={()=>{
                expandCategory();
            }}
            >
                <span className="font-bold text-lg text-gray-700">{category.card.card.title + "(" + category?.card?.card?.itemCards.length + ")"}</span>
                <span>{ isCollapsed === true ? String.fromCharCode('8743') : String.fromCharCode('8744') }</span>
            </div>
            {isCollapsed === true ?
                <div>
                    {category?.card?.card?.itemCards.map((item) => {
                        return <RestaurantMenu key={item?.card?.info?.id} data={item?.card?.info}> </RestaurantMenu>
                    }
                    )}
                </div>
                : ""
            }
        </div>
    )
}
export default RestaurantCategory;