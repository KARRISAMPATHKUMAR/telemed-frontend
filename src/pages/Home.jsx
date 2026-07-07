import "./Home.css";
import FeatureCard from "../components/FeatureCard";
import { FaMicrophone, FaCalendarCheck, FaUserMd } from "react-icons/fa";

function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-left">
          <h1>🏥 AI Voice Telemedicine</h1>

          <p>
            Consult certified doctors anytime, anywhere using Artificial
            Intelligence and Voice Assistance.
          </p>

          <div className="buttons">
            <button className="primary">
              🎤 Start Consultation
            </button>

            <button className="secondary">
              📅 Book Appointment
            </button>
          </div>
        </div>

        <div className="hero-right">
          <img
            src="https://img.icons8.com/fluency/480/doctor-male.png"
            alt="Doctor"
          />
        </div>
      </section>

      <section className="features">
        <h2>Our Services</h2>

        <div className="cards">

          <FeatureCard
            icon={<FaMicrophone size={45} />}
            title="Voice Consultation"
            description="Speak naturally with our AI-powered assistant."
          />

          <FeatureCard
            icon={<FaCalendarCheck size={45} />}
            title="Appointments"
            description="Book doctor appointments in a few clicks."
          />

          <FeatureCard
            icon={<FaUserMd size={45} />}
            title="Expert Doctors"
            description="Connect with certified healthcare professionals."
          />

        </div>
      </section>
    </>
  );
}

export default Home;