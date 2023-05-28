import { Link } from "react-router-dom";

const Unknown = () => {
    return ( 
        <div className="notfound">
            <h2>404 NOT FOUND! <br/> THE PAGE YOU ARE LOOKING FOR DOES NOT EXIST</h2>
            <Link   to='/'>GO BACK TO THE HOME PAGE</Link>
        </div>
     );
}
 
export default Unknown;