import { useDispatch } from "react-redux";
import { addToCart } from "../store";


const products = [
  {
    id: 1,
    name: "Laptop",
    price: 50000
  },
  {
    id: 2,
    name: "Mobile",
    price: 20000
  },
  {
    id: 3,
    name: "Headphone",
    price: 3000
  }
];


export default function Products() {

  const dispatch = useDispatch();


  return (
    <div className="products">

      <h2>Products</h2>

      {
        products.map((product) => (

          <div className="product-card" key={product.id}>

            <h3>{product.name}</h3>

            <p>₹{product.price}</p>


            <button
              onClick={() => dispatch(addToCart(product))}
            >
              Add Cart
            </button>


          </div>

        ))
      }

    </div>
  );
}