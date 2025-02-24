import Guitar from "./guitar";
import PropTypes from "prop-types";

function Catalog({ guitars }) {
    return (
        <div className="catalog">
            {guitars.map((guitar, index) => (
                <Guitar
                    key={index}
                    name={guitar.name}
                    image={guitar.image}
                    price={guitar.price}
                />
            ))}
        </div>
    );
}

Catalog.propTypes = {
    guitars: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            price: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default Catalog;