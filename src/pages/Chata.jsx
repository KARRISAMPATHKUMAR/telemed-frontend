import { useState, useRef } from "react";
import api from "../api/api";

function Chata() {
  const [message, setMessage] = useState("");
  const [reply, setReply] = useState("");

  const recognitionRef = useRef(null);

  // Voice Recognition
  const startListening = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Speech Recognition is not supported in this browser.");
      return;
    }

    recognitionRef.current = new SpeechRecognition();

    recognitionRef.current.lang = "en-US";
    recognitionRef.current.interimResults = false;
    recognitionRef.current.maxAlternatives = 1;

    recognitionRef.current.onresult = (event) => {
      setMessage(event.results[0][0].transcript);
    };

    recognitionRef.current.start();
  };

  // Send message to AI
  const sendMessage = async () => {
    if (!message.trim()) return;

    try {
      const response = await api.post("/chat", {
        message: message,
      });

      setReply(response.data.response);

      // Read AI response aloud
      const speech = new SpeechSynthesisUtterance(
        response.data.response
      );
      speech.lang = "en-US";
      window.speechSynthesis.speak(speech);

    } catch (error) {
      console.error(error);
      setReply("Unable to contact AI Assistant.");
    }
  };

  return (
    <div className="container">
      <h1>🤖 AI Health Assistant</h1>

      <textarea
        rows="6"
        cols="60"
        placeholder="Describe your symptoms..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <br /><br />

      <button onClick={startListening}>
        🎤 Speak
      </button>

      &nbsp;&nbsp;

      <button onClick={sendMessage}>
        Ask AI
      </button>

      <br /><br />

      <h3>AI Response</h3>

      <textarea
        rows="8"
        cols="70"
        value={reply}
        readOnly
      />
    </div>
  );
}

export default Chata;