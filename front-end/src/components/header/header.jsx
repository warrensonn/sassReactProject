import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/image/Logo.png";
import Logout from "../../assets/svg/Logout.svg";
import Return from "../../assets/svg/Return.svg";
import "./header.sass";

export function Header() {
  const navigate = useNavigate();

  return (
    <header>
      <NavLink onClick={() => navigate(-1)}>
        <img src={Return} alt="Return icon" />
      </NavLink>

      <img src={logo} alt="Logo de votre marque" />
      <button onClick={() => alert("Logout")}>
        <img src={Logout} alt="Logout icon" />
      </button>
    </header>
  );
}
