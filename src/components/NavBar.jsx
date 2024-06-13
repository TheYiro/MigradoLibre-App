import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="navBar">
        <Link to='/'><img src="/src/assets/joacodevlogo.webp" alt="Joaco Logo" /></Link>
        </div>
        );
}

export default NavBar
