import { useState } from "react";
import Todo from "./botones";

const Funcion = () => {
  const [valor, setvalor] = useState(0);

  const sumar = () => {
    setvalor(valor + 1);
  };
  const restar = () => {
    setvalor(valor - 1);
  };

  return (
    <div>
      <Todo sumar={sumar} restar={restar} />
    </div>
  );
};

export default Funcion;
