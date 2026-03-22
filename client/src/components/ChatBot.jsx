import "../Styles/ChatBot.css";
import { useState, useRef, useEffect } from "react";

function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  const toggleChat = () => {
    setIsOpen(prev => !prev);

    // Show welcome message when opening the chat
    if (!isOpen) {
      setTimeout(() => {
        setMessages(prev => [
          ...prev,
          { text: "Hi! How can I help you today?", sender: "bot" }
        ]);
      }, 200);
    }
  };

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMsg = input.trim();
    setMessages(prev => [...prev, { text: userMsg, sender: "user" }]);
    setInput("");

    // Bot response logic
    const msg = userMsg.toLowerCase();
    let botResponse = "";

if (msg.includes("price") || msg.includes("cost")) {
      botResponse = "You can see the price of each product on its page. Do you want me to guide you?";
    } else if (msg.includes("shipping") || msg.includes("delivery")) {
      botResponse = "Shipping usually takes 3-5 business days. Free shipping on orders over £50!";
    } else if (msg.includes("return") || msg.includes("refund")) {
      botResponse = "You can return products within 14 days. Would you like me to show the return policy link?";
    } else if (msg.includes("headphones")) {
      botResponse = "We have a great selection of headphones. Check out our Headphones section!";
    } else if (msg.includes("phone")) {
      botResponse = "Looking for a new phone? We have the latest models available.";
    } else if (msg.includes("tablet")) {
      botResponse = "Our tablets include top brands like Samsung, Apple, and Lenovo.";
    } else if (msg.includes("tv")) {
      botResponse = "Check out our TV section for the latest models and deals!";
    } else if (msg.includes("watch") || msg.includes("smartwatch")) {
      botResponse = "We have a variety of smartwatches for every lifestyle. Take a look!";
    } else if (msg.includes("all products") || msg.includes("everything")) {
      botResponse = "We have phones, tablets, TVs, headphones, and smartwatches. Which category would you like to see first?";
    } else if (msg.includes("brand") || msg.includes("brands")) {
      botResponse = "We sell brands like Apple, Samsung, Sony, Bose, and more. Do you have a specific brand in mind?";
    } else {
      botResponse = "Sorry, I didn't understand that. Can you rephrase your question?";
    }

    // Add bot response after a short delay
    setTimeout(() => {
      setMessages(prev => [...prev, { text: botResponse, sender: "bot" }]);
    }, 500);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleSend();
  };

  return (
    <div className="chatbot-wrapper">
      <button className="chat-button" onClick={toggleChat}>
        💬
      </button>

      {isOpen && (
        <div className="chatbot-box open" id="chatbotBox">
          <div className="chatbot-header">
            <div>
              <h3>TechSpere Support</h3>
              <p>How can we assist you?</p>
            </div>
          </div>

          <div className="chatbot-messages">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`chat-message ${msg.sender}`}
              >
                {msg.text}
              </div>
            ))}
            <div ref={messagesEndRef}></div>
          </div>

          <div className="chatbot-input-section">
            <input
              type="text"
              id="userInput"
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <button id="sendButton" onClick={handleSend}>
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ChatBot;