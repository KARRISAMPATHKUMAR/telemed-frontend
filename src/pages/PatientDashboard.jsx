import { Link } from "react-router-dom";

function PatientDashboard() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="container">
      <h1>🏥 Patient Dashboard</h1>

      <h2>Welcome, {user?.name}</h2>

      <br />

      <div className="dashboard">

        <Link to="/appointment">
          <button>📅 Book Appointment</button>
        </Link>

        <br /><br />

        <Link to="/chat">
          <button>🤖 AI Health Assistant</button>
        </Link>

        <br /><br />

        <Link to="/medical-history">
          <button>📄 Medical History</button>
        </Link>

        <br /><br />

        <Link to="/profile">
          <button>👤 Profile</button>
        </Link>

      </div>
    </div>
  );
}

export default PatientDashboard;