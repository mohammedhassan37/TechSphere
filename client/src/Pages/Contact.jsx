import React, { useState } from "react";
import '../Styles/contact.css'


function About() {
  const [formInput, setFormInput] = useState({
    Name: "",
    EmailAddress: "",
    Inquiry: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput({ ...formInput, [name]: value });
  };

  const handleSubmission = (e) => {
    e.preventDefault();
    console.log("Enquiry Sent:", formInput);

    setSubmitted(true);
    setFormInput({
      Name: "",
      EmailAddress: "",
      Inquiry: "",
    });
  };

  return (
    <>
      

    <h2>Contact Us!</h2>
      {submitted && (
        <p style={{ color: "green" }}>Message has been sent!</p>
      )}

      <form onSubmit={handleSubmission}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="Name"
            value={formInput.Name}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Email Address:</label>
          <input
            type="email"
            name="EmailAddress"
            value={formInput.EmailAddress}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Inquiry:</label>
          <textarea
            name="Inquiry"
            value={formInput.Inquiry}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Send Inquiry</button>
      </form>
    </>
  );
}

export default About;
