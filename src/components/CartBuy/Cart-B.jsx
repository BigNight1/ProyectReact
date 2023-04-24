import { useEffect, useState } from "react";
import { products } from "../../productsMock";
import ItemsCart from "../CartBuy/Cart-M";

const ItemComprar = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const tarea = new Promise((resolve) => {
      resolve(products);
    });

    tarea.then((res) => setItems(res)).catch((error) => console.log(error))
    // para traer la api
  }, []);

  return (
    <div>
      <ItemsCart items={items} />
    </div>
  );
};

export default ItemComprar;
