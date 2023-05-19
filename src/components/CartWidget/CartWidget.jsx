import { BsFillCartCheckFill } from "react-icons/bs";
import "./CartWidget-style.css";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {
  
  const { getTotalQuantity} = useContext(CartContext)

  let total = getTotalQuantity()
  return (
    <div>
      <BsFillCartCheckFill className="icon-carrito" />
      <span>{total}</span>

    </div>
  );
};

export default CartWidget;
