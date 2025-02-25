import { Link } from "react-router";

function Header() {
    return (
        <div className="header">
            <Link to="/">
                <div className="title">
                    <h1>Guitar Guide</h1>
                </div>
            </Link>
            <hr></hr>
            <div className="navbar">
                <Link to="/electric-guitars" className="link"><h3>Electric</h3></Link>
                <Link to="/acoustic-guitars" className="link"><h3>Acoustic</h3></Link>
                <Link to="/bass-guitars" className="link"><h3>Bass</h3></Link>
                <Link to="/tabs" className="link"><h3>Tabs</h3></Link>
            </div>
        </div>
    )
}

export default Header;