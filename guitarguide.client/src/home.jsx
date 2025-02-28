import Header from "./components/header";
import { Link } from "react-router";
import images from "./images/imageImports";

function Home() {
    return (
        <div>
            <Header />

            <div className="home">
                <img src={images.logo} alt="logo" className="logo" />

                <div className="cardLinks">
                    <Link to="/acoustic-guitars">
                        <div className="acousticCard">
                            <h3>Acoustic</h3>
                        </div>
                    </Link>

                    <Link to="/electric-guitars">
                        <div className="electricCard">
                            <h3>Electric</h3>
                        </div>
                    </Link>

                    <Link to="/bass-guitars">
                        <div className="bassCard">
                            <h3>Bass</h3>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Home;