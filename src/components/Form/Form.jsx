import { useState } from "react";

const Form = () => {
  const [UserData, setUserData] = useState({
    Nombre: "",
    Apellido: "",
    Numero: ""
  });

  const handleChange = (e)=>{
    setUserData({ ...UserData, [e.target.name]: e.target.value });

  }

  const Enviarformulario = (e) => {
    e.preventDefault();
  };

  

  return (
    <div>
      <h1>Estoy en el formulario</h1>

      <form onSubmit={Enviarformulario} action="">
        <input
          type="text"
          name="Nombre"
          value={UserData.Nombre}
          placeholder="Ponga su Nombre"
          onChange={handleChange}
        />

        <input
          type="text"
          name="Apellido"
          value={UserData.Apellido}
          placeholder="Ponga su Apellido"
          onChange={handleChange}
        />

        <input type="text" name="Numero" value={UserData.Numero} onChange={handleChange} placeholder="Ponga su Numero" />
        <input type="submit" />
      </form>
    </div>
  );
};
//
export default Form;
