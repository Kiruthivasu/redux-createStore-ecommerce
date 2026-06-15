import Products from "./components/Products";
import Cart from "./components/Cart";
import "./App.css";

export default function App() {
  return (
    <div className="container">

      <h1>🛒 My E-Commerce Store</h1>

      <Products />

      <Cart />

    </div>
  );
}