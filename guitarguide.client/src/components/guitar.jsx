import PropTypes from "prop-types";

function Guitar({ name, image, price }) {
    return (
        <div className="guitar">
            <img src={image} alt={name} />
            <h3>{name}</h3>
            <h3>{price}</h3>
        </div>
    );
}

Guitar.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
};

export default Guitar;