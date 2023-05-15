import { useState } from "react";

const Form = () => {
  const [UserData, setUserData] = useState({
    Nombre: "",
    Apellido: "",
    Numero: ""
  });

  const Enviarformulario = (e) => {
    e.preventDefault();
  };

  console.log(UserData);

  return (
    <div>
      <h1>Estoy en el formulario</h1>

      <form onSubmit={Enviarformulario} action="">
        <input
          type="text"
          name="nombre"
          value={UserData.Nombre}
          placeholder="Ponga su Nombre"
          onChange={(e) => {
            setUserData({ ...UserData, Nombre: e.target.value });
          }}
        />

        <input
          type="text"
          name="apellido"
          value={UserData.Apellido}
          placeholder="Ponga su Apellido"
          onChange={(e) => {
            setUserData({ ...UserData, Apellido: e.target.value });
          }}
        />

        <input type="text" name="numero" value={UserData.Numero} onChange={(e)=>{
          setUserData({ ...UserData, Numero: e.target.value})
        }} placeholder="Ponga su Numero" />
        <input type="submit" />
      </form>
    </div>
  );
};
//
export default Form;
