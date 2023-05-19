import { useEffect, useState } from "react";
import ItemsCart from "./Cart-M";
import { products } from "../../productsMock";

import { useParams } from "react-router-dom";

const ItemComprar = () => {
  const [items, setItems] = useState([]);

  const {categoryName} = useParams()

  useEffect(() => {

    const productsFiltered = products.filter( prod => prod.category === categoryName)
    const tarea = new Promise((resolve) => {
      resolve( categoryName ? productsFiltered : products);
    });

    tarea.then((res) => setItems(res)).catch((error) => console.log(error))
    // para traer la api
  }, [categoryName]);

  return (
    <div>
      <ItemsCart items={items} />
    </div>
    
  );
};

export default ItemComprar;
