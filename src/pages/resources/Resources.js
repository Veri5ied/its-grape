import Navbar from "../../components/navbar/Navbar";
import "./Resources.css";

function Resources() {
  return (
    <div className="resources">
      <Navbar />
      <div className="resources_body container mt-4">
        <h1>RESOURCES.</h1>
        <p>An archive of all resources gathered to help you in some areas.</p>
        <hr />
        <p>
          GRAPE protocol - Solana SZN Hackathon submission
          <br />
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/dUQRcOrsCMY"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </p>
        <p>
          How to Verify your wallet (on Grapes Channel): <br />
          <a href="https://discord.com/channels/837189238289203201/849221857650671646/866611310686765076">
            https://discord.com/channels/837189238289203201/849221857650671646/866611310686765076
          </a>
        </p>
      </div>
    </div>
  );
}

export default Resources;
