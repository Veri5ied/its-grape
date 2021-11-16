import Navbar from "../../components/navbar/Navbar";
import "./Faq.css";

function Faq() {
  return (
    <div className="faq">
      <Navbar />
      <div className="faq_body container mt-4">
        <h1>FAQ</h1>
        <p>Find lists of frequently asked questions and answers here.</p>
        <hr />
        <p>Q: What browser and wallet are you using?</p>
        <p>
          A: Please ensure your browser and wallet are up to date. Grape
          supports Sollet, Phantom, & SolFlare.
        </p>
        <p>Q: How do I verify using ledger?</p>
        <p>
          A: Send !verify as a DM to @GRAPE and follow the instructions to get
          your ledger verified.
        </p>
        <p>Q: Why don’t I see channels after verifying?</p>
        <p>
          A: Check the correct wallet is verified , the token minimum or
          unlisted NFT are in your wallet. Then, check that you react to the
          emoji in the verification channel on the Discord server.
        </p>
        <p>Q: What access does Grape have to my wallet holdings?</p>
        <p>
          A: Grape takes security and privacy very seriously, your holdings are
          safe. Grape Access verifies you own control over your wallet by
          signing a message using your wallet locally on your computer. Your
          private key is never shared with Grape, since Grape compares your
          signature against your public key. You have the right to be
          immediately forgotten by unlinking your discord ID at any time.
        </p>
        <p>Q: How do I switch verified wallets?</p>
        <p>
          A: Unlink & disconnect the old verified wallet and verify the new
          wallet anew. Keep Discord open to avoid losing roles previously
          achieved. There are two methods to unlink -Send !unlink as a DM to
          @GRAPE and follow the instructions OR go to verify.grapes.network
          dashboard connecting to the old wallet(Supported for Sollet, Phantom
          and Solflare).
        </p>
        <ol>
          <li>Unlink your Discord & Unregister Server</li>
          <li>Disconnect the Old Wallet [Top Right]</li>
          <li>Connect the New Wallet</li>
          <li>Link your Discord & Re-Register Servers again.</li>
          <li>
            Find the verification channel to unreact & react to the Emoji in the
            message.
          </li>
          <li>
            To check which wallet is verified, send !verify as a DM to @GRAPE
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Faq;
