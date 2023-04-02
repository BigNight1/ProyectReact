const Todo = ({sumar , restar, valor}) => {
  return (
    <div>
      <h1>{valor}</h1>
      <button onClick={sumar}>Sumar</button>
      <button onClick={restar}>Restar</button>
    </div>
  );
};

export default Todo;