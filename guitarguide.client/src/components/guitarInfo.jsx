import PropTypes from "prop-types";

function GuitarInfo({ guitar }) {
    return (
        <div>
            <div className="infoImage">
                <img src={guitar.image} alt={guitar.name} />
            </div>
            <div className="infoDescription">
                <h1>{guitar.name}</h1>
                <h2>{guitar.price}</h2>
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