import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import CartCambio from "../CartWidget/CartWidget";
import { Outlet, Link} from "react-router-dom";
import { db } from "../../firebaseConfig";
import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import  "./Navbar.css";

const NavBar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const categoriesCollection = collection(db, "categories");
    getDocs(categoriesCollection)
      .then((res) => {
        let categoriesResult = res.docs.map((category) => {
          return {
            ...category.data(),
            id: category.id,
          };
        });
        setCategories(categoriesResult);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <div className= "containernavbar">
        <div className="Logo-Name">
          <Link to="/">
            <img
              className="logonike"
              src="https://res.cloudinary.com/dviah6ohx/image/upload/v1680224541/Img/Nike-Logo-No-Background_rlpwhn.png"
              alt="Logo de Nike"
            />
          </Link>
        </div>
        {categories.map((category) => {
          return (
            <Link className="cc" key={category.id} to={category.path} >
              {category.title}
            </Link>
          );
        })}

        <div className="navcart">
          <Link to="/Carrito">
            <CartCambio />
          </Link>
          <Link className="buttonI" to="/Form">
            Iniciar
          </Link>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default NavBar;
