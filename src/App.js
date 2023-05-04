
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemComprar from "./components/ItemList/Cart-B";
import NavBar from "./components/NavBar/NavBar";
import { ItemDetailContainer } from "./components/ItemDetail/ItemDetailContainer";
import { CarritoEnter } from "./components/CartWidget/CarritoEnter";

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route element={<NavBar/>}>
         <Route path="/" element={<ItemComprar/>}/>
         <Route path="/category/:categoryName" element={<ItemComprar/>}/>
         <Route path="/itemDetail/:id" element={<ItemDetailContainer/>}/>
         <Route path="/Carrito" element={<CarritoEnter/>}/>
         <Route path="*" element={<h1>no existe Error 404</h1>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
