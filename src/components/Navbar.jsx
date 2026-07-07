import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px",
        background: "#0077b6",
      }}
    >
      <h2 style={{ color: "white" }}>🏥 TeleMed</h2>

      <div>
        <Link style={{ color: "white", marginRight: "20px" }} to="/">
          Home
        </Link>

        <Link style={{ color: "white", marginRight: "20px" }} to="/login">
          Login
        </Link>

        <Link style={{ color: "white", marginRight: "20px" }} to="/register">
          Register
        </Link>

        <Link style={{ color: "white", marginRight: "20px" }} to="/appointment">
          Appointment
        </Link>

        <Link style={{ color: "white" }} to="/chat">
          AI Chat
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;