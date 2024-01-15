 import { useRouteError } from "react-router-dom";
 
 
 
 const ErrorPage = () => {

    const err = useRouteError()
   // console.log(err);

    return(
        <div>
            <h1>opps!!!</h1>
            <h2>You are on the wrong page</h2>
            <p> {
                   err.status + ": " + err.statusText
                } </p>
        </div>
    )
 }

 export default ErrorPage;