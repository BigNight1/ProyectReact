import { BsFillCartCheckFill } from "react-icons/bs";
import "./CartWidget-style.css";

const CartCambio = () => {
  return (
    <div>
      <BsFillCartCheckFill className="icon-carrito" />
      <span>0</span>

    </div>
  );
};

export default CartCambio;
