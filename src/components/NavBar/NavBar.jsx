import "./Navbar.style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import CartCambio from "../CartWidget/CartWidget";
import { Outlet, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <div className="Navbar">
        <div className="Logo-Name">
          <Link to="/">
            <img
              className="logo-nike"
              src="https://res.cloudinary.com/dviah6ohx/image/upload/v1680224541/Img/Nike-Logo-No-Background_rlpwhn.png"
              alt="Logo de Nike"
            />
          </Link>
        </div>
        <div className="links">
          <a href="http://localhost:3000/" className="nav-linkk">
            Barato
          </a>
          <a href="http://localhost:3000/" className="nav-linkk">
            Caro
          </a>
          <a href="http://localhost:3000/" className="nav-linkk">
            Bonitos
          </a>
          <Link to="/Carrito">
            <CartCambio />
          </Link>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default NavBar;
