import { useParams } from "react-router-dom"

export const RestaurantDetails = ()=>{
    const {resId} = useParams();
    return (
        <div>
            <h1>Testing-{resId}</h1>
        </div>
    )
}