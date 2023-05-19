import {IconButton} from "@mui/material";


const CounterPresentation = ({ counter, sumar, restar, onAdd }) => {
  return (
    <div style={{ display: "flex", gap: "10px", marginLeft:"10px"}}>
      <IconButton onClick={sumar} style={{fontSize: "16px"}}>Sumar</IconButton>
      <h3>{counter}</h3>
      <IconButton onClick={restar} style={{fontSize: "16px"}}>Restar</IconButton>
      <button onClick={()=>onAdd(counter)}>Comprar</button>
    </div>
  );
};

export default CounterPresentation;
