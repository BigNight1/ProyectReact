import { useState } from "react";

const Form = () => {
  const [Nombre, setNombre] = useState("");
  const [Apellido, setApellido] = useState("");
  console.log(Apellido)

  return (
    <div>
      <h1>Estoy en el formulario</h1>

      <form action="">
        <input type="text" name="nombre" placeholder="Ponga su Nombre" />

        <input
          type="text"
          name="nombre"
          value={Apellido}
          placeholder="Ponga su Apelli  do"
          onChange={(e) => {
            setApellido(e.target.value);
          }}
        />

        <input type="text" name="nombre" placeholder="Ponga su Numero" />
        <input type="submit" />
      </form>
    </div>
  );
};
//
export default Form;
