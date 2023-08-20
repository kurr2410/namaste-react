import { useRouteError } from "react-router-dom";

import { useRouteError } from "react-router-dom";

const Error = ()=>{
    const err = useRouteError();
    return (
        <div>
            <h1>Error Page</h1>
            <h4>{err.data}</h4>
        </div>
    )
}

export default Error;