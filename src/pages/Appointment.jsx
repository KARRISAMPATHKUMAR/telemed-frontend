import { useState } from "react";
import api from "../api/api";

function Appointment() {

    const [appointment, setAppointment] = useState({
        patientName: "",
        doctorName: "",
        appointmentDate: "",
        appointmentTime: "",
        symptoms: ""
    });

    const handleChange = (e) => {
        setAppointment({
            ...appointment,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {

            await api.post("/appointments", appointment);

            alert("Appointment Booked Successfully!");

            setAppointment({
                patientName: "",
                doctorName: "",
                appointmentDate: "",
                appointmentTime: "",
                symptoms: ""
            });

        } catch (error) {
            console.error(error);
            alert("Booking Failed");
        }
    };

    return (

        <div className="container">

            <h1>Book Appointment</h1>

            <form onSubmit={handleSubmit}>

                <input
                    name="patientName"
                    placeholder="Patient Name"
                    value={appointment.patientName}
                    onChange={handleChange}
                    required
                />

                <br /><br />

                <input
                    name="doctorName"
                    placeholder="Doctor Name"
                    value={appointment.doctorName}
                    onChange={handleChange}
                    required
                />

                <br /><br />

                <input
                    type="date"
                    name="appointmentDate"
                    value={appointment.appointmentDate}
                    onChange={handleChange}
                    required
                />

                <br /><br />

                <input
                    type="time"
                    name="appointmentTime"
                    value={appointment.appointmentTime}
                    onChange={handleChange}
                    required
                />

                <br /><br />

                <textarea
                    name="symptoms"
                    placeholder="Symptoms"
                    value={appointment.symptoms}
                    onChange={handleChange}
                    rows="4"
                />

                <br /><br />

                <button type="submit">
                    Book Appointment
                </button>

            </form>

        </div>

    );
}

export default Appointment;