import { useState } from "react";
import "../Styles/contact.css";

function Contact() {
  const [formInput, setFormInput] = useState({
    Name: "",
    EmailAddress: "",
    Inquiry: "",
  });

  const [submission, setSubmission] = useState(false);

  const hChange = (e) => {
    const { name, value } = e.target;
    setFormInput({ ...formInput, [name]: value });
  };

  const hSubmission = async (e) => {
    e.preventDefault();
    console.log("Inquiry Sent:", formInput);

    try {
      const response = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formInput.Name,
          EmailAddress: formInput.EmailAddress,
          Inquiry: formInput.Inquiry,
        }),
      });

      const data = await response.json();
      if (data.success) {
        setSubmission(true);
        setFormInput({
          Name: "",
          EmailAddress: "",
          Inquiry: "",
        });
      } else {
        alert("Could not send Message: " + data.message);
      }
    } catch (err) {
      console.error(err);
      alert("Error sending message");
    }
  };



  return (

    
    <div className="ContactMainDiv">
      <form className="formcontact" onSubmit={hSubmission}>
        <h2>Contact Us!</h2>

        {submission && <p style={{ color: "green" }}>Message Sent!</p>}

        <div className="formInput">
          <input
            className="field"
            type="text"
            name="Name"
            placeholder="Your Name"
            value={formInput.Name}
            onChange={hChange}
            required
          />
        </div>

        <div className="formInput">
          <input
            className="field"
            type="email"
            name="EmailAddress"
            placeholder="Your Email"
            value={formInput.EmailAddress}
            onChange={hChange}
            required
          />
        </div>

        <div className="formInput">
          <textarea
            className="field textarea"
            name="Inquiry"
            placeholder="Your Inquiry"
            value={formInput.Inquiry}
            onChange={hChange}
            required
          />
        </div>

        <button type="submit">Send Inquiry</button>
      </form>

    <div className="Location">
        <iframe
          title="Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2430.0821742748612!2d-1.8969896239522979!3d52.47764783936515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4870bc88b0a23981%3A0x2f48a9bcc2e96950!2sBullring!5e0!3m2!1sen!2suk!4v1764894183198!5m2!1sen!2suk&zoom=17"
          width="450"
          height="450"
          style={{
            border: 0,
            borderRadius: "10px",
          }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
}


export default Contact;
