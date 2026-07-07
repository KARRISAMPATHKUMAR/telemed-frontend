import { Link } from "react-router-dom";

function DoctorDashboard() {

  const user = JSON.parse(localStorage.getItem("user"));

  return (

    <div className="container">

      <h1>👨‍⚕️ Doctor Dashboard</h1>

      <h2>Welcome Dr. {user?.name}</h2>

      <br />

      <button>
        👨‍⚕️ View Patients
      </button>

      <br /><br />

      <button>
        📅 Today's Appointments
      </button>

      <br /><br />

      <button>
        💊 Prescriptions
      </button>

    </div>

  );

}

export default DoctorDashboard;