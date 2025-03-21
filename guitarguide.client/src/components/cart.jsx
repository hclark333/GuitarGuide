import { useCart } from "../context/cartContext";
import { useState, useEffect } from "react";

function Cart() {
    const { cart } = useCart();

    const [subtotal, setSubtotal] = useState(0);

    useEffect(() => {
        const calculatedSubtotal = cart.reduce((total, item) => {
            const price = parseFloat(item.price.replace("$", "").replace(",", ""));
            return total + price;
        }, 0);
        setSubtotal(calculatedSubtotal);
    }, [cart]);

    let tax = subtotal * .04;
    let total = subtotal + tax;
    
    return (
        <div className="cart">
            <div className="cartGuitars">
                {cart.map((item, index) => (
                    <div className="cartItem" key={index}>
                        <img src={item.image} />
                        <div className="cartItemInfo">
                            <h2>{item.name}</h2>
                            <h3>{item.price}</h3>
                        </div>
                    </div>
                ))}
            </div>
            
            <div className="checkout">
                <div className="checkoutTotals">
                    <h2>Checkout</h2>
                    <p>Subtotal: ${subtotal.toFixed(2)}</p>
                    <p>Tax: ${tax.toFixed(2)}</p>
                    <h3>Total: ${total.toFixed(2)}</h3>
                    <div className="checkoutButton">
                        <button>Checkout</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;