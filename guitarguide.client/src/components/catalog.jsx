import Guitar from "./guitar";
import PropTypes from "prop-types";
import { Link } from "react-router";

function Catalog({ guitars }) {
    return (
        <div className="catalog">
            {guitars.map((guitar) => (
                <Link to={`/guitar-info/${guitar.id}`} key={guitar.id} className="link">
                    <Guitar
                        name={guitar.name}
                        image={guitar.image}
                        price={guitar.price}
                    />
                </Link>
            ))}
        </div>
    );
}

Catalog.propTypes = {
    guitars: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            price: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default Catalog;