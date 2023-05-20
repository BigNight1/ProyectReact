import "./CartWidget-style.css";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import {BsCart4} from "react-icons/bs"
const CartWidget = () => {
  
  const { getTotalQuantity} = useContext(CartContext)

  let total = getTotalQuantity()
  return (
    <div> 
      <BsCart4 className="icon-carrito"/>
      <span>{total}</span>

    </div>
  );
};

export default CartWidget;
