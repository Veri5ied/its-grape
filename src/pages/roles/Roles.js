import Navbar from "../../components/navbar/Navbar";
import "./Roles.css";
import Loading from "../../components/loading/Loading";

function Roles() {
  return (
    <div className="roles">
      <Navbar />
      <div className="roles_body container mt-4">
        <h3>Coming Soon !!!</h3>
        <hr />
        <Loading />
      </div>
    </div>
  );
}

export default Roles;
