import { useState } from "react";
import Todo from "./botones"

const Funcional = ()=>{

const [valor , setValor ] = useState(0)
  
const sumar = ()=>{
  setValor( valor + 1 )
}
const restar = ()=>{
  setValor( valor - 1 )
}
const multiplicar = ()=>{
  setValor( valor * 2 )
}
const dividir = ()=>{
  setValor( valor / 2 )
}

const Resetear = ()=>{
  setValor(0)
}
  return(
    <div>
      <Todo valor={valor} sumar={sumar} restar={restar} multiplicar={multiplicar} dividir={dividir} Resetear={Resetear} />
    </div>
  )
}

export default Funcional;