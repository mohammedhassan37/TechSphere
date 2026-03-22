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

  const [phoneError, setPhoneError] = useState("");
  const [locationError, setLocationError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const navigate = useNavigate();

  const validatePhone = (value) => {
    const ukPhoneRegex = /^(?:\+44|0)7\d{9}$/;

    if (!value) {
      setPhoneError("");
    } else if (!ukPhoneRegex.test(value)) {
      setPhoneError(
        "Phone number must be a valid UK mobile number, e.g. 07123456789 or +447123456789"
      );
    } else {
      setPhoneError("");
    }
  };

  const validateLocation = (value) => {
    const locationRegex = /^[A-Za-z\s]+,\s[A-Za-z\s]+$/;

    if (!value) {
      setLocationError("");
    } else if (!locationRegex.test(value)) {
      setLocationError(
        "Location must be in the format Country, City e.g. Germany, Berlin"
      );
    } else {
      setLocationError("");
    }
  };

  const validatePassword = (value) => {
    if (!value) {
      setPasswordError("");
    } else if (value.length < 8) {
      setPasswordError("Password must be at least 8 characters long");
    } else {
      setPasswordError("");
    }
  };

  const validateConfirmPassword = (value, currentPassword) => {
    if (!value) {
      setConfirmPasswordError("");
    } else if (value !== currentPassword) {
      setConfirmPasswordError("Passwords do not match");
    } else {
      setConfirmPasswordError("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    if (!isLogin) {
      validatePhone(phonenumber);
      validateLocation(location);
      validatePassword(password);
      validateConfirmPassword(confirmPassword, password);

      const ukPhoneRegex = /^(?:\+44|0)7\d{9}$/;
      const locationRegex = /^[A-Za-z\s]+,\s[A-Za-z\s]+$/;

      if (
        !ukPhoneRegex.test(phonenumber) ||
        !locationRegex.test(location) ||
        password.length < 8 ||
        password !== confirmPassword
      ) {
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
          setPhoneError("");
          setLocationError("");
          setPasswordError("");
          setConfirmPasswordError("");
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
              onClick={() => {
                setIsLogin(true);
                setMessage("");
              }}
            >
              Login
            </button>

            <button
              type="button"
              className={!isLogin ? "active" : ""}
              onClick={() => {
                setIsLogin(false);
                setMessage("");
              }}
            >
              Sign up
            </button>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="FormContainerLogin">
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Your Email"
                required
              />

              {!isLogin && (
                <>
                  <input
                    type="text"
                    name="phonenumber"
                    value={phonenumber}
                    onChange={(e) => {
                      setPhonenumber(e.target.value);
                      validatePhone(e.target.value);
                    }}
                    placeholder="07123456789"
                    required
                  />
                  {phoneError && <small className="field-error">{phoneError}</small>}

                  <input
                    type="text"
                    name="location"
                    value={location}
                    onChange={(e) => {
                      setLocation(e.target.value);
                      validateLocation(e.target.value);
                    }}
                    placeholder="England, Birmingham"
                    required
                  />
                  {locationError && (
                    <small className="field-error">{locationError}</small>
                  )}
                </>
              )}

              <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (!isLogin) {
                    validatePassword(e.target.value);
                    validateConfirmPassword(confirmPassword, e.target.value);
                  }
                }}
                placeholder="Enter Your Password"
                required
              />
              {!isLogin && passwordError && (
                <small className="field-error">{passwordError}</small>
              )}

              {!isLogin && (
                <>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => {
                      setConfirmPassword(e.target.value);
                      validateConfirmPassword(e.target.value, password);
                    }}
                    placeholder="Confirm Password"
                    required
                  />
                  {confirmPasswordError && (
                    <small className="field-error">{confirmPasswordError}</small>
                  )}
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