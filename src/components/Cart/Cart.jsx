import { useContext } from "react";
import { Button, Tooltip } from "@mui/material";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext.jsx";
import "./Cart.css";

const Cart = ({
  cart,
  clearCartWithAlert,
  deleteProductById,
  total,
  navigate,
}) => {
  const { getTotalQuantity } = useContext(CartContext);
  const totalProduct = getTotalQuantity();

  return (
    <div className="cart-container">
      <div className="container-items">
        {cart.map((item) => (
          <div key={item.id} className="cart-item">
            <Tooltip title={item.title} arrow placement="top">
              <img
                src={item.img}
                alt={item.title}
                className="cart-item-image"
              />
            </Tooltip>
            <div className="cart-item-info">
              <h4 className="cart-item-title">{item.title}</h4>
              <p className="cart-item-price">${item.price}</p>
              <p className="cart-item-quantity">Unidades: {item.quantity}</p>
            </div>
            
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => deleteProductById(item.id)}
              className="cart-item-remove-button"
            >
              Quitar
            </Button>
          </div>
        ))}
      </div>

      <div className="cart-info">
        <div className="cart-summary">
          <div className="cart-summary-item">
            <span className="cart-summary-label">Cantidad de productos:</span>
            <span className="cart-summary-value">{totalProduct}</span>
          </div>
          <div className="cart-summary-item">
            <span className="cart-summary-label">Precio total:</span>
            <span className="cart-summary-value font-semibold">${total}</span>
          </div>
        </div>
        {cart.length > 0 ? (
          
          <div className="cart-actions">
            <Button
              variant="contained"
              color="primary"
              onClick={() => navigate("/checkout")}
              className="cart-checkout-button"
            >
              Terminar la compra
            </Button>
            
            <Button
              onClick={clearCartWithAlert}
              variant="contained"
              color="error"
              className="cart-clear-button"
            >
              Vaciar carrito
            </Button>
          </div>
        ) : (
          <Link to="/">
            <Button variant="contained" color="primary">
              Agrega productos
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Cart;
