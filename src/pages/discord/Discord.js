import Navbar from "../../components/navbar/Navbar";
import "./Discord.css";
import DiscordImage from "../../images/discord.jpg";

function Discord() {
  return (
    <div className="discord">
      <Navbar />
      <div className="discord_body container mt-4">
        <h1>JOIN DISCORD CHANNEL</h1>
        <p>Join Discord Channel to be up to date.</p>
        <hr />
        <p>
          Ultimately, every activities happening on the grapes community can be
          seen in the discord channel. With over 24K members on grape's discord
          community, everyone is being carried along and updated on recently
          launches and changes.
        </p>
        <p>
          You sure won't want to miss out on any of these, now join the
          community with one click
        </p>
        <br />
        Join now:
        <a href="https://discord.gg/greatape">
          <img src={DiscordImage} alt="discord" />
        </a>
      </div>
    </div>
  );
}

export default Discord;
