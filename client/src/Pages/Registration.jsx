import "../Styles/Registration.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

function Registration() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [location, setLocation] = useState("");
  const [message, setMessage] = useState("");
  const [isLogin, setIsLogin] = useState(true);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isLogin) {
      const ukPhoneRegex = /^(?:\+44|0)7\d{9}$/;
      const locationRegex = /^[A-Za-z\s]+,\s[A-Za-z\s]+$/;

      if (!ukPhoneRegex.test(phonenumber)) {
        setMessage("Phone number must be a valid UK mobile number, e.g. 07123456789 or +447123456789");
        return;
      }

      if (!locationRegex.test(location)) {
        setMessage("Location must be in the format Country, City e.g. Germany, Berlin");
        return;
      }

      if (password.length < 8) {
        setMessage("Password must be at least 8 characters long");
        return;
      }

      if (password !== confirmPassword) {
        setMessage("Passwords do not match");
        return;
      }
    }

    const endpoint = isLogin
      ? `${API_BASE_URL}/login`
      : `${API_BASE_URL}/signup`;

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({
          email,
          phonenumber,
          location,
          password,
          confirmPassword,
        }),
      });

      const data = await res.json();
      setMessage(data.message);

      if (data.success) {
        if (isLogin) {
          navigate("/");
        } else {
          setIsLogin(true);
          setEmail("");
          setPassword("");
          setConfirmPassword("");
          setPhonenumber("");
          setLocation("");
          setMessage("Account created successfully. Please log in.");
        }
      }
    } catch (err) {
      console.error(err);
      setMessage("Server error");
    }
  };

  return (
    <div className="LoginFormContainer">
      <div className="LoginFormIntroduction">
        <h1 id="FormIntroTitle">TechSphere</h1>
        <p id="FormIntroText">Your journey begins here</p>
      </div>

      <div className="FormContainerMain">
        <div className="FormContainerElements">
          <div className="FormContainerBtns">
            <button
              type="button"
              className={isLogin ? "active" : ""}
              onClick={() => setIsLogin(true)}
            >
              Login
            </button>

            <button
              type="button"
              className={!isLogin ? "active" : ""}
              onClick={() => setIsLogin(false)}
            >
              Sign up
            </button>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="FormContainerLogin">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="✉️ Enter Your Email"
                required
              />

              {!isLogin && (
                <>
                  <label>Phone number</label>
                  <input
                    type="text"
                    name="phonenumber"
                    value={phonenumber}
                    onChange={(e) => setPhonenumber(e.target.value)}
                    placeholder="📞 Enter a UK number e.g. 07123456789"
                    pattern="^(?:\+44|0)7\d{9}$"
                    title="Enter a valid UK mobile number, e.g. 07123456789 or +447123456789"
                    required
                  />

                  <label>Location</label>
                  <input
                    type="text"
                    name="location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="📍 Enter location as Country, City e.g. Germany, Berlin"
                    pattern="^[A-Za-z\s]+,\s[A-Za-z\s]+$"
                    title="Enter location in the format Country, City e.g. Germany, Berlin"
                    required
                  />
                </>
              )}

              <label>Password</label>
              <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="🔐 Enter Your Password"
                minLength="8"
                title="Password must be at least 8 characters long"
                required
              />

              {!isLogin && (
                <>
                  <label>Confirm Password</label>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="🔐 Confirm Password"
                    minLength="8"
                    required
                  />
                </>
              )}

              {!isLogin && (
                <>
                  <small>Please enter location as: Country, City</small>
                  <small>Example: Germany, Berlin</small>
                  <small>Please enter a valid UK mobile number only</small>
                  <small>Password must be at least 8 characters long</small>
                </>
              )}

              <button className="submitBtn" type="submit">
                {isLogin ? "Login" : "Sign up"}
              </button>
            </div>
          </form>

          <p>{message}</p>
        </div>
      </div>
    </div>
  );
}

export default Registration;