import { Link } from "react-router";
import images from "../images/imageImports";

function Header() {
    return (
        <div>
            <div className="header">
                <Link to="/">
                    <img src={images.logoSmall} alt="logoSmall" className="logoSmall" />
                </Link>
                <div className="navbar">
                    <Link to="/acoustic-guitars" className="link"><h3>Acoustic</h3></Link>
                    <Link to="/electric-guitars" className="link"><h3>Electric</h3></Link>
                    <Link to="/bass-guitars" className="link"><h3>Bass</h3></Link>
                    <Link to="/tabs" className="link"><h3>Tabs</h3></Link>
                </div>
            </div>
            <hr></hr>            
        </div>
    )
}

export default Header;