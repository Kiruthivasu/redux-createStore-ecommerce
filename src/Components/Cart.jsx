import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../store";

export default function Cart() {

  const cart = useSelector((state) => state.cart);
  const total = useSelector((state) => state.total);

  const dispatch = useDispatch();


  return (
    <div className="cart">

      <h2>🛒 Cart</h2>

      {
        cart.length === 0 ? (
          <h3>Cart is empty</h3>
        ) : (

          cart.map((item) => (

            <div className="cart-item" key={item.id}>

              <h3>{item.name}</h3>

              <p>₹{item.price}</p>

              <button
                className="remove"
                onClick={() =>
                  dispatch(removeFromCart(item.id))
                }
              >
                Remove
              </button>

            </div>

          ))

        )
      }


      <h3>Total: ₹{total}</h3>

    </div>
  );
}