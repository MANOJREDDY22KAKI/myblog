import { Link } from "react-router-dom/cjs/react-router-dom.min";
const NotFound  = () => {
    return ( 
        <div className="not-found">
            <h2>Sorry . Page doesn't exits</h2>
            <Link to= "/">back to home Page</Link>
        </div>
     );
}
 
export default NotFound ;