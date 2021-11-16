import { useState } from "react";
import "./Navbar.css";
import ToggleLogo from "../../images/grape_icon.svg";
import DocsNav from "../docsnaviagtion/DocsNav";
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {
  const [showNav, setShowNav] = useState(false);
  return (
    <>
      <div className="nav">
        <img src={ToggleLogo} alt="Grape Logo" />
        <GiHamburgerMenu onClick={() => setShowNav(!showNav)} />
      </div>
      <div className="toggle_nav">
        <DocsNav show={showNav} />
      </div>
    </>
  );
}

export default Navbar;
