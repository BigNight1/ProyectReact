import { useFormik } from "formik";
import * as Yup from "yup";
import FormCheckout from "./FormCheckout";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { db } from "../../firebaseConfig";
import {
  addDoc,
  collection,
  serverTimestamp,
  updateDoc,
  doc,
} from "firebase/firestore";

const FormCheckoutContainer = () => {
  const { cart, getTotalPrice, clearCart } = useContext(CartContext);

  const [orderId, setOrderId] = useState(null);

  const checkoutFn = (data) => {
    let total = getTotalPrice();

    let dataOrder = {
      buyer: data,
      items: cart,
      total: total,
      date: serverTimestamp(),
    };
    const ordensCollection = collection(db, "orders");
    addDoc(ordensCollection, dataOrder).then((res) => setOrderId(res.id));

    cart.map((product) => 
      updateDoc(doc(db, "products", product.id), {
        stock: product.stock - product.quantity,
      })
    );

    clearCart()
  };

  const { handleSubmit, handleChange, errors, values } = useFormik({
    initialValues: {
      nombre: "",
      email: "",
      password: "",
    },
    onSubmit: checkoutFn,
    validationSchema: Yup.object().shape({
      nombre: Yup.string()
        .required("este campo es obligatorio")
        .min(3, "el nombre debe tener al menos 3 caracteres")
        .max(10, "el nombre no puede superar los 10 caracteres"),
      email: Yup.string()
        .email("El campo debe ser un email")
        .required("este campo es obligatorio"),
      password: Yup.string().required("este campo es obligatorio"),
    }),
    validateOnChange: false,
  });

  return (
    <div>
      {orderId ? (
        
        <h1 style={{ display: "flex", justifyContent: "center" }}>
          Gracias por Comprar su Id es : {orderId}
        </h1>
      ) : (
        <FormCheckout
          errors={errors}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          values={values}
        />
      )}
    </div>
  );
};

export default FormCheckoutContainer;
