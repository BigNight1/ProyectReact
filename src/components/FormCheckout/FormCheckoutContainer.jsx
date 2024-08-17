import { useContext, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import FormCheckout from "./FormCheckout";
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

  const checkoutFn = async (data) => {
    const total = getTotalPrice();

    const dataOrder = {
      buyer: data,
      items: cart,
      total: total,
      date: serverTimestamp(),
    };

    try {
      // Add order to Firestore
      const ordersCollection = collection(db, "orders");
      const orderRef = await addDoc(ordersCollection, dataOrder);
      setOrderId(orderRef.id);

      // Update product stock
      await Promise.all(
        cart.map((product) =>
          updateDoc(doc(db, "products", product.id), {
            stock: product.stock - product.quantity,
          })
        )
      );

      // Clear cart
      clearCart();
    } catch (error) {
      console.error("Error processing the order: ", error);
    }
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
        .required("Este campo es obligatorio")
        .min(3, "El nombre debe tener al menos 3 caracteres")
        .max(10, "El nombre no puede superar los 10 caracteres"),
      email: Yup.string()
        .email("El campo debe ser un email válido")
        .required("Este campo es obligatorio"),
      password: Yup.string().required("Este campo es obligatorio"),
    }),
    validateOnChange: false,
  });

  return (
    <div className="p-6 max-w-lg mx-auto">
      {orderId ? (
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">
            ¡Gracias por tu compra, {values.nombre}!
          </h2>
          <h3 className="text-xl text-gray-800 mb-2">ID de la compra: {orderId}</h3>
          <p className="text-gray-600 mb-2">Hemos enviado la información de tu compra a: {values.email}</p>
          <p className="text-gray-600">Si tienes algún problema, usa este ID para que podamos identificar rápidamente tu compra.</p>
        </div>
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
