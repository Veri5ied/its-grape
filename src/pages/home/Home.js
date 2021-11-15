import React, { useState, useEffect } from "react";
import "./Home.css";
import Logo from "../../images/grape_logo_main.svg";
import { Link } from "react-router-dom";
import Loading from "../../components/loading/Loading";

function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 5000);
  });
  return (
    <div className="main_home">
      {loading ? (
        <Loading />
      ) : (
        <div className="home container">
          <div className="home_nav mt-3">
            <div className="home_nav_left">
              <img src={Logo} alt="grape_logo" />
            </div>
            <div className="home_nav"></div>
          </div>
          <div className="home_body">
            <div className="home_hero">
              <h1 id="home_grape">GRAPE NETWORK</h1>
              <p>
                Find list of curated walkthroughs and getting started with
                Grapes Network.
              </p>
            </div>
            <div className="home_btn">
              <button id="get_started">
                <Link to="">GET STARTED</Link>
              </button>
              <button id="join_discord">
                <a
                  href="https://discord.gg/greatape"
                  target="_blank"
                  rel="noreferrer"
                >
                  JOIN DISCORD SERVER
                </a>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
