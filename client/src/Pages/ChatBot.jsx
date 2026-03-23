import "../Styles/ChatBot.css";
import { useState, useRef, useEffect } from "react";

// Sample product data
const products = {
  Phones: {
    Samsung: [
      { name: "Samsung Galaxy S24 Ultra", price: 999 },
      { name: "Samsung Galaxy S23", price: 799 },
    ],
    Apple: [
      { name: "iPhone 15 Pro", price: 1099 },
      { name: "iPhone 14", price: 699 },
    ],
    OnePlus: [
      { name: "OnePlus 12", price: 899 },
      { name: "OnePlus 11", price: 749 },
    ],
  },
  Tablets: {
    Samsung: [
      { name: "Samsung Galaxy Tab S11 Ultra", price: 999 },
      { name: "Samsung Galaxy Tab A9+", price: 209.99 },
    ],
    Apple: [
      { name: "iPad Pro 2024", price: 899.99 },
      { name: "iPad Air 2025", price: 799.99 },
    ],
    Lenovo: [
      { name: "Lenovo Idea Tab 11 Inch", price: 149.99 },
    ],
    "Amazon Fire": [
      { name: "Amazon Fire Max", price: 129.99 },
      { name: "Amazon Fire HD 10", price: 89.99 },
    ],
    HONOR: [
      { name: "HONOR Pad X8a", price: 109.99 },
    ]
  },
  Headphones: {
    JBL: [{ name: "JBL Tune 720BT", price: 39.99 }],
    Sony: [{ name: "Sony WH-CH520", price: 28.99 }],
    Beats: [{ name: "Beats Studio Pro ANC", price: 99.99 }],
    "Apple AirPods": [
      { name: "Apple AirPods Max Purple", price: 499.99 },
      { name: "Apple AirPods Max Blue", price: 499.99 },
    ],
    Marshall: [{ name: "Marshall Major V", price: 79.99 }],
    Shokz: [{ name: "Shokz OpenSwim Pro", price: 135.99 }],
    JLab: [{ name: "Jlab JBuds Lux", price: 49.99 }],
  },
  TVs: {
    Samsung: [{ name: "Samsung 50 Inch QLED 4K", price: 399 }],
    LG: [{ name: "LG 55 Inch OLED 4K", price: 549 }],
    Sony: [{ name: "Sony Bravia 50 UHD", price: 569.99 }],
    TCL: [{ name: "TCL 55P6K Smart 4K", price: 259.99 }],
    Hisense: [{ name: "Hisense 75 Inch LED", price: 499.99 }],
    Bush: [{ name: "Bush 24 Inch HD LED", price: 109.99 }],
    Toshiba: [{ name: "Toshiba 65 Inch UHD", price: 319.99 }],
  },
  Smartwatches: {
    Apple: [{ name: "Apple Watch Ultra 3", price: 719.99 }],
    Samsung: [
      { name: "Samsung Galaxy Watch7 40mm", price: 249.99 },
      { name: "Samsung Galaxy Watch8 40mm", price: 249.99 },
    ],
    Garmin: [
      { name: "Garmin Forerunner 165", price: 169.99 },
      { name: "Garmin Fenix 8 47mm", price: 599.99 },
    ],
    Fitbit: [{ name: "Fitbit Versa 4", price: 129.99 }],
    Huawei: [{ name: "HUAWEI Watch Fit 3", price: 139.0 }],
    Reflex: [{ name: "Reflex Active Black", price: 35.99 }],
  }
};

function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { type: "bot", text: "Hi! How can I help you?" }
  ]);
  const [options, setOptions] = useState([
    "Phones",
    "Tablets",
    "Headphones",
    "TVs",
    "Smartwatches",
    "Shipping",
    "Returns"
  ]);
  const [history, setHistory] = useState([]);
  const chatEndRef = useRef(null);

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const toggleChat = () => setIsOpen(!isOpen);

  const handleOptionClick = (option) => {
    let botReply = "";

    // Shipping and returns
    if (option === "Shipping") {
      botReply = "Shipping usually takes 3-5 business days. Free shipping on orders over £50!";
    } else if (option === "Returns") {
      botReply = "You can return products within 14 days. Would you like me to show the return policy link?";
    }
    // Category selected
    else if (products[option]) {
      botReply = `Here are the brands available for ${option}:`;
      setOptions(Object.keys(products[option]));
      setHistory([option]);
    }
    // Brand selected
    else if (history.length > 0 && products[history[history.length - 1]][option]) {
      const category = history[history.length - 1];
      const productList = products[category][option];
      botReply = `Here are some ${option} products:\n`;
      productList.forEach(p => {
        botReply += `• ${p.name} - £${p.price}\n`;
      });
      // Reset options to main categories after showing products
      setOptions(["Phones", "Tablets", "Headphones", "TVs", "Smartwatches", "Shipping", "Returns"]);
      setHistory([]);
    } 
    // Unknown options
    else {
      botReply = "Sorry, I didn't understand that. Please choose from the options.";
    }

    setMessages((prev) => [...prev, { type: "user", text: option }, { type: "bot", text: botReply }]);
  };

  return (
    <div className="chatbot-wrapper">
      <button className="chat-button" onClick={toggleChat}>
        💬
      </button>

      {isOpen && (
        <div className="chatbot-box">
          <div className="chatbot-header">
            <h3>TechSphere Support</h3>
            <p>How can we assist you?</p>
          </div>

          <div className="chatbot-messages">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`chat-message ${msg.type === "bot" ? "bot-bubble" : "user-bubble"}`}
              >
                {msg.text.split("\n").map((line, i) => <div key={i}>{line}</div>)}
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>

          <div className="chatbot-options">
            {options.map((opt) => (
              <button
                key={opt}
                className="option-btn"
                onClick={() => handleOptionClick(opt)}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default ChatBot;