import { miclick } from './click.jsx';

export const login = () => {
  return <div>
      <h1>Probando Desde Login</h1>
      <p>hola desde login</p>
      <button id="click" onclick={miclick}>click me</button>
  </div>;
};

