import { Link } from 'react-router-dom';
const Navbar = () => {
    return ( <nav className="nav">
        <h1>Code Bean</h1>
        <div className="links">
           <Link to="/">Home</Link>
           <Link to="/create">New Blog</Link>
        </div>
    </nav> 
    );
}
 
export default Navbar;