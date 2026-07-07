import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PatientDashboard from "./pages/PatientDashboard";
import DoctorDashboard from "./pages/DoctorDashboard";
import Appointment from "./pages/Appointment";
import "./App.css";
import Chata from "./pages/Chata";
import MedicalHistory from "./pages/MedicalHistory";
import Profile from "./pages/Profile";
function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/chat" element={<Chata />} />
        <Route path="/profile" element={<Profile />} />
        <Route
    path="/medical-history"
    element={<MedicalHistory />}
/>
        <Route
  path="/patient-dashboard"
  element={<PatientDashboard />}
/>

<Route
  path="/doctor-dashboard"
  element={<DoctorDashboard />}
/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;