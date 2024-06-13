import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="navBar">
        <Link to='/'><img src="./src/assets/joacodevnobackground.png" alt="Joaco Logo" /></Link>
        </div>
        );
}

export default NavBar
