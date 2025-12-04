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
    </div>


  );
}

export default Contact;
