import { Link } from "react-router-dom";
function Navbar() {
    return(
        <nav>
            <Link to="/">Home</Link>{"/"}
            <Link to="/">Student</Link>{"/"}
            <Link to="/">Contact</Link>{"/"}
            <Link to="/">About</Link>{"/"}
        </nav>
    );
}
export default Navbar;