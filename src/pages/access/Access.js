import Navbar from "../../components/navbar/Navbar";
import "./Access.css";

function Access() {
  return (
    <div className="access">
      <Navbar />
      <div className="access_body container mt-4">
        <h1>GRAPE NETWORK ACCESS</h1>
        <p>Get verified to access unlimited benefit from Grape</p>
        <hr />
        <p>Grape is the Ultimate Solana Community Experience</p>
        <p>
          Connect: Chat with top Solana researchers and learn the best Defi
          strategies, new NFT mints, and more!
        </p>
        <p>
          Compete: Take part in our Hold-to-Play competitions in Gaming, Design,
          Videography, Writing, and Poker. The $GRAPE prize pools are huge!
        </p>
        <p>
          Create: Join the Grape Workforce in building new and exciting tools,
          campaigns, and educational materials for the biggest Solana Projects
        </p>
        <h3>How to Gain Access</h3>
        <hr />
        <p>
          Start by verifying your wallet, please click the link below to connect
          with Sollet, Phantom or SolFlare, and, link your Discord!
          <br />
          <a
            href="https://discord.com/oauth2/authorize?client_id=849358659897262080&redirect_uri=https%3A%2F%2Fverify.grapes.network%2Fapi%2Fdiscord%2Fcallback&state=%7B%22register%22%3A%22true%22%2C%22serverId%22%3A%226ea624a5-97b8-45a2-b141-9812d36c0cd7%22%7D&response_type=code&scope=identify"
            target="_blank"
            rel="noreferrer"
            className="mt-2"
          >
            VERIFY GRAPES ACCESS HERE!
          </a>
        </p>
        <p>
          To verify your Ledger Wallet: Please send a DM to the @GRAPE
          verification bot with a single command: !verify
        </p>

        <p>
          After you verify your wallet above , click to react on the Grape emoji
          in the access help channel to start your membership!
        </p>
      </div>
    </div>
  );
}

export default Access;
