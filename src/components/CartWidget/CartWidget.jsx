import "./CartWidget-style.css";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { BsCart4 } from "react-icons/bs";
import Tooltip from '@mui/material/Tooltip';


const CartWidget = () => {
  const { getTotalQuantity } = useContext(CartContext);
  const total = getTotalQuantity();

  return (
    <Tooltip title="Ir Al Carrito">
    <div className="relative flex items-center">
      
      <BsCart4 className="text-3xl text-gray-700 icon-carrito" />
      {total > 0 && (
        <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full">
          {total}
        </span>
      )}
    </div>
    </Tooltip>
  );
};

export default CartWidget;
