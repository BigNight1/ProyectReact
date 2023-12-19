import { useState } from "react";
import "./Form.css";

const Form = () => {
  const [UserData, setUserData] = useState({
    Correo_Electronico: "",
    Contraseña: "",
  });

  const handleChange = (e) => {
    setUserData({ ...UserData, [e.target.name]: e.target.value });
  };

  const Enviarformulario = (e) => {
    e.preventDefault();
  };

  return (
    <div className="caja_form">
      <div className="caja_contenedora">
        <h2>Inicio de Sesión</h2>
        <div className="forma">
          <form onSubmit={Enviarformulario} action="">
            <div>
              <input
                type="text"
                name="Correo_Electronico"
                value={UserData.Correo_Electronico}
                placeholder="Correo Electronico"
                onChange={handleChange}
              />
            </div>
            <div>
              <input
                type="text"
                name="Contraseña"
                value={UserData.Contraseña}
                placeholder="Contraseña"
                onChange={handleChange}
              />
            </div>
          </form>
        </div>
        <div className="boton_enviar">
          <button className="boton_submit" type="submit">
            Iniciar Sesion
          </button>
          <button className="boton_submit" type="submit">
           Register
          </button>
        </div>
      </div>
    </div>
  );
};
//
export default Form;
