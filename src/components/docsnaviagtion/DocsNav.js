import "./DocsNav.css";
import { Link } from "react-router-dom"
import TinyLogo from "../../images/grape_icon.png";

function DocsNav({ show }) {
  return (
    <div className={show ? "sidenav active" : "sidenav"}>
      <img src={TinyLogo} alt="Tiny Logo" />
      <ul>
        <li>
          <Link to="/started">Getting Started</Link>
        </li>
        <li>
          <Link to="/discord">Discord</Link>
        </li>
        <li>
          <Link to="">Grape</Link>
        </li>
        <li>
          <Link to="">Home</Link>
        </li>
        <li>
          <Link to="">Join Discord</Link>
        </li>
      </ul>
    </div>
  );
}

export default DocsNav;
