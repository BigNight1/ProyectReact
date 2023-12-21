import { useContext } from "react";
import { Button } from "@mui/material";
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

  let totalProduct = getTotalQuantity();

  return (
    <div>
      <div className="cart-container">
        <div className="container-items">
          {cart.map((item) => {
            return (
              <div key={item.id} className="cart-item">
                <img src={item.img} alt="" />
                <div className="cart-item-info">
                  <h2>{item.name}</h2>
                  <h2>${item.price}.</h2>
                  <h2>Unidades: {item.quantity}</h2>
                </div>
                <Button
                  variant="contained"
                  onClick={() => deleteProductById(item.id)}
                >
                  Quitar
                </Button>
              </div>
            );
          })}
        </div>
        <div className="cart-info">
          <h3>Cantidad de productos: {totalProduct} </h3>
          <h3>Precio total: {total}</h3>
          {/* <h3>Descuento: %</h3> */}
          {/* despues voy a poner un descuento  */}
          {cart.length > 0 ? (
            <div className="btn-cart">
              <Button variant="contained" onClick={() => navigate("/checkout")}>
                Terminar la compra
              </Button>
              <Button onClick={clearCartWithAlert} variant="contained">
                Vaciar carrito
              </Button>
            </div>
          ) : (
            <Link to="/">
              <Button variant="contained">Agrega productos</Button>
            </Link>
          )}

          <h1>Precio final: ${total}</h1>
          {/* Quiero aplicar un descuento  de 10% pero todavia no tengo una idea de como hacerlo  */}
        </div>
      </div>
    </div>
  );
};

export default Cart;
