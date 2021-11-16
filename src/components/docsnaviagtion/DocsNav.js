import "./DocsNav.css";
import { Link } from "react-router-dom";
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
          <Link to="/access">Grape Access</Link>
        </li>
        <li>
          <Link to="/faq">Faq</Link>
        </li>
        <li>
          <Link to="/resources">Resources</Link>
        </li>
        <li>
          <Link to="/roles">Roles</Link>
        </li>
        <li>
          <Link to="/discord">Join Discord</Link>
        </li>
      </ul>
    </div>
  );
}

export default DocsNav;
