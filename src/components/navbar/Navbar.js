import { useState } from "react";
import "./Navbar.css";
import { Routes, Route } from "react-router-dom";
import ToggleLogo from "../../images/grape_icon.svg";
import DocsNav from "../docsnaviagtion/DocsNav";
import Discord from "../../pages/discord/Discord";
import GettingStarted from "../../pages/gettingStarted/GettingStarted";
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
      <div className="screen_content">
        <Routes>
          <Route path="discord" element={<Discord />} />
          <Route path="started" element={<GettingStarted />} />
        </Routes>
      </div>
    </>
  );
}

export default Navbar;
