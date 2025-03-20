import PropTypes from "prop-types";
import { useCart } from "../context/cartContext";
import { Link } from "react-router";

function GuitarInfo({ guitar }) {
    const { addToCart } = useCart();

    function handleAddToCart() {
        let cartItem = { name: guitar.name, image: guitar.image, price: guitar.price };
        addToCart(cartItem);
    }

    return (
        <div className="info">
            <div className="infoImagePrice">
                <div className="infoImage">
                    <img src={guitar.image} alt={guitar.name} />
                </div>
                <h2>{guitar.price}</h2>
                <div className="infoButtons">
                    <Link to="/cart"><button onClick={handleAddToCart} className="buyNow">Buy Now</button></Link>
                    <button onClick={handleAddToCart} className="cart">Add to Cart</button>
                </div>
            </div>
            <div className="infoDescription">
                <h1>{guitar.name}</h1>
                <p>{guitar.description}</p>
                
            </div>
        </div>
    );
}

GuitarInfo.propTypes = {
    guitar: PropTypes.shape({
        image: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
    }).isRequired,
};

export default GuitarInfo;