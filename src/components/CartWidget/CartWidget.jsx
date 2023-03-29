import { useState } from "react";

const CartCambio = () => {
    
    const [ counter , setcounter] = useState(0)

    const sumar = () =>{
        setcounter(counter + 1)
    }

  return (
    <div>
      <h1>contador</h1>
      <button onClick={sumar}>sumar</button>
      <h3>{counter}</h3>
    </div>
  );
};

export default CartCambio;