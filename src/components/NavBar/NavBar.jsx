import "./Navbar.style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const NavBar = () => {
  return (
    <div className="Navbar">
      <div className="Logo-Name">
        <img className="logo-nike" src="https://res.cloudinary.com/dviah6ohx/image/upload/v1680224541/Img/Nike-Logo-No-Background_rlpwhn.png" alt="Logo de Nike" />
      </div>
      <div className="links">
        <a href="#" className="nav-linkk">
          Barato
        </a>
        <a href="#" className="nav-linkk">
          Caro
        </a>
        <a href="#" className="nav-linkk">
          Bonitos
        </a> 
      </div>
      
    </div>
  );
};

export default NavBar;
