import PropTypes from "prop-types";

function GuitarInfo({ guitar }) {
    return (
        <div className="info">
            <div className="infoImagePrice">
                <div className="infoImage">
                    <img src={guitar.image} alt={guitar.name} />
                </div>
                <h2>{guitar.price}</h2>
                <div className="infoButtons">
                    <button className="buyNow">Buy Now</button>
                    <button className="cart">Add to Cart</button>
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