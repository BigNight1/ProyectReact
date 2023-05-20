import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemComprar from "./components/ItemList/Cart-B";
import NavBar from "./components/NavBar/NavBar";
import { ItemDetailContainer } from "./components/ItemDetail/ItemDetailContainer";
import CartContainer from "./components/Cart/CartContainer";
import Form from "./components/Form/Form";
import CartContextProvider from "./context/CartContext";
import FormCheckoutContainer from "./components/FormCheckout/FormCheckoutContainer";


function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <Routes>
          <Route element={<NavBar />}>
            <Route path="/" element={<ItemComprar />} />
            <Route path="/category/:categoryName" element={<ItemComprar />} />
            <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />
            <Route path="/Carrito" element={<CartContainer />} />
            <Route path="/Form" element={<Form />} />
            <Route path="/Checkout" element={<FormCheckoutContainer />} />
            <Route path="*" element={<h1>no existe Error 404</h1>} />
          </Route>
        </Routes>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
