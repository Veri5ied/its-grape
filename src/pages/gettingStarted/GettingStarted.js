import Navbar from "../../components/navbar/Navbar";
import "./GettingStarted.css";

function GettingStarted() {
  return (
    <div className="getting_started">
      <div className="fixed_nav">
        <Navbar />
      </div>
      <div className="getting_started_body container mt-4">
        <h1>GETTING STARTED.</h1>
        <p>How to setup your environment for grapes network.</p>
        <hr />
        <p>
          This documentation was created for the grapes community and with the
          aim of bringing all the needed walkthroughs and questions together for
          easy access and use at any point in time. So please engage with this
          documentation.{" "}
        </p>
        <strong>#its grape</strong>.
        <br />
        <p>
          For those accessing this documentation for the first time of hearing
          about grape and grape network, you'll need a discord account first
          before continuing with this guide. So head over to playstore, apple
          store or microsoft store and download DISCORD, create a free account
          and then join grapes community using this link here:{" "}
          <a href="https://discord.gg/greatape">JOIN GRAPES COMMUNITY</a>
        </p>
        <br />
        <p>
          Awesome! You'll next need a wallet. Below are some tutorials gathered
          from grapes community on discord to help you setup any wallet of yours
          for free:
          <ol>
            <p>
              <b>
                <li>SOLLET IO</li>
              </b>
              <strong>SITE LINK:</strong>{" "}
              <a href="https://sollet.io" target="_blank" rel="noreferrer">
                Sollet.io
              </a>{" "}
              <br />
              <strong>YOUTUBE GUIDE:</strong>{" "}
              <a
                href="https://www.youtube.com/watch?v=MGNSeXH0p3M"
                target="_blank"
                rel="noreferrer"
              >
                https://www.youtube.com/watch?v=MGNSeXH0p3M
              </a>
            </p>
            <br />
            <p>
              <b>
                <li>PHANTOM APP</li>
              </b>
              <strong>SITE LINK:</strong>{" "}
              <a href="https://phantom.app" target="_blank" rel="noreferrer">
                Phantom.app
              </a>{" "}
              <br />
              <strong>YOUTUBE GUIDE:</strong>{" "}
              <a
                href="https://www.youtube.com/watch?v=_ACL9NYKWRM"
                target="_blank"
                rel="noreferrer"
              >
                https://www.youtube.com/watch?v=_ACL9NYKWRM
              </a>
            </p>
          </ol>
        </p>
      </div>
    </div>
  );
}

export default GettingStarted;
