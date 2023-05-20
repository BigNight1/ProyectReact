import { useContext } from "react";
import Cart from "./Cart";
import { CartContext } from "../../context/CartContext";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";


const CartContainer = () => {
  const { cart ,deleteProductById ,getTotalPrice} = useContext(CartContext);

  let total = getTotalPrice()

  const navigate = useNavigate()

  const clearCartWithAlert = ()=>{
    Swal.fire({
      title: 'Seguro que quieres cancelar la comprar?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Si, Eliminar',
      denyButtonText: `No, Eliminar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire('Se Vacio el carrito', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('No se hizo ningún cambio', '', 'info')
      }
    })
  }

  return (
    <div>
      <Cart navigate={navigate} total={total}cart={cart} clearCartWithAlert={clearCartWithAlert} deleteProductById={deleteProductById}/>
    </div>
  );
};

export default CartContainer;
