import { useEffect, useState } from "react";
import ItemsCart from "./Cart-M";
import { useParams } from "react-router-dom";
import { ClimbingBoxLoader } from "react-spinners";
import { db } from "../../firebaseConfig";
import { getDocs, collection, query, where } from "firebase/firestore";


const ItemComprar = () => {
  const [items, setItems] = useState([]);

  const { categoryName } = useParams();

  useEffect(() => {

    let consulta ;
    const itemCollection = collection(db, "products");

    if(categoryName){
      const itemsCollectionFiltered = query( itemCollection, where("category","==",categoryName))
      consulta = itemsCollectionFiltered
    }else{
      consulta = itemCollection
    }
    
    getDocs(consulta)
      .then((res) => {
        const products = res.docs.map( product =>{
          return{
            ...product.data(),
            id: product.id
          }
        })
        setItems(products)
      })
      .catch((err) => console.log(err));
  }, [categoryName]);

  // const addProducts = ()=>{

  //   const productsCollection = collection(db, "products")

  //   products.map( product =>(
  //     addDoc(productsCollection, product)
  //   ))

  // }

  return (
    <div>
      {items.length === 0 ? (
        <ClimbingBoxLoader
          size={40}
          style={{ display: "flex", justifyContent: "center" }}
          color="rgba(70, 122, 53, 1)"
        />
      ) : (
        <ItemsCart items={items} />
      )}
      {/* <button onClick={addProducts}>Agregar Productos</button> */}
    </div>
  );
};

export default ItemComprar;
