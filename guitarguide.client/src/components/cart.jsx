import { useCart } from "../context/cartContext";

function Cart() {
    const { cart } = useCart();

    return (
        <div>
            {cart.map((item, index) => (
                <div className="cartItem" key={index}>
                    <img src={item.image} />
                    <div className="cartItemInfo">
                        <h2>{item.name}</h2>
                        <h3>{item.price}</h3>
                    </div>
                </div>
            )) }
        </div>
    );
}

export default Cart;