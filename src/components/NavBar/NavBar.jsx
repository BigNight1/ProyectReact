import "./Navbar.style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const NavBar = () => {
  return (
    <div className="Navbar">
      <div className="Logo-Name">
        <h1 className="Title">Nike Fake</h1>
      </div>
      <div className="links">
        <a href="" className="nav-linkk">
          Barato
        </a>
        <a href="" className="nav-linkk">
          Caro
        </a>
        <a href="" className="nav-linkk">
          Bonitos
        </a>
        <a href="">
          <i className="cart bi bi-cart4"></i>
        </a>
      </div>
      
    </div>
  );
};

export default NavBar;
