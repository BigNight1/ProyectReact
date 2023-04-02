const Todo = ({valor,sumar,restar,dividir,multiplicar,Resetear}) => {
  return (
    <div>
      <h1>{valor}</h1>
      <button onClick={sumar}>Sumar</button>
      <button onClick={restar}>Restar</button> <br />
      <button onClick={dividir}>Dividir</button>
      <button onClick={multiplicar}>Multiplicar</button> <br />
      <button onClick={Resetear}>Resetear</button>
    </div>
  );
};

export default Todo;