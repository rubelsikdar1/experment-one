import { NavLink } from "react-router-dom";
import Style from "./Heading.module.css"

const Header = () => {
    return (
        <div>
            <nav>
                <NavLink to="" className={Style.active}> Home </NavLink>
                <NavLink to="about" className={Style.active}>  About </NavLink>
                <NavLink to="Contact" className={Style.active}> Contact</NavLink>
                <NavLink to="user" className={Style.active}> user </NavLink>
                
            </nav>
        </div>
    );
};

export default Header;