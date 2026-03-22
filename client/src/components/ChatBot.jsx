import "../Styles/ChatBot.css";
import { useState } from "react";

function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="chatbot-wrapper">
      <button className="chat-button" onClick={() => toggleChat()}>
        💬
      </button>

      {isOpen && (
      <div className="chatbot-box" id="chatbotBox">
        <div className="chatbot-header">
          <div>
            <h3>TechSpere Support</h3>
            <p>How can we assist you?</p>
          </div>
          <div className="chatbot-messages" id="chatMessages">
          <div className="message bot">
            Hi 👋 Welcome to TechSpere Support. How can I help you today?
          </div>
        </div>
        <div className="chatbot-input-area">
          <input
            type="text"
            id="userInput"
            placeholder="Type your message..."/>
          <button id="sendButton">Send</button>

        </div>
        </div>
      </div>
      )}
    </div>
  );
}

export default ChatBot;