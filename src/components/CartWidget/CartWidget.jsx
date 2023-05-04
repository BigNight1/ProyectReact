import { BsFillCartCheckFill } from "react-icons/bs";
import "./CartWidget-style.css";

const CartCambio = ({ valor }) => {
  return (
    <div>
      <BsFillCartCheckFill className="icon-carrito" />
      <span>0</span>
      <span>{valor}</span>
    </div>
  );
};

export default CartCambio;
