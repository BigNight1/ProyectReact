import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import styles from "./Navbar.module.css"
import CartCambio from "../CartWidget/CartWidget";
import { Outlet, Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <div className={styles.containernavbar}>
        <div className="Logo-Name">
          <Link to="/">
            <img
              className={styles.logonike}
              src="https://res.cloudinary.com/dviah6ohx/image/upload/v1680224541/Img/Nike-Logo-No-Background_rlpwhn.png"
              alt="Logo de Nike"
            />
          </Link>
        </div>
        <div className={styles.links}>       
            <NavLink className={({ isActive})=> (isActive ? styles.active: styles.noActive)} to="/">TODAS</NavLink>
            <NavLink className={({ isActive})=> (isActive ? styles.active : styles.noActive)}  to="/category/Peliculas">Peliculas</NavLink>
            <NavLink className={({ isActive})=> (isActive ? styles.active : styles.noActive)} to="/category/Animes">Animes</NavLink>
        </div>
        <Link to="/Carrito">
          <CartCambio />
        </Link>
      </div>
      <Outlet />
    </div>
  );
};

export default NavBar;
