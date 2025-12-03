import  { useState } from "react";
import '../Styles/contact.css'


function Contact() {
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

  const handleSubmission = async (e) => {
    e.preventDefault();
    console.log("Enquiry Sent:", formInput);

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
        setSubmitted(true);
        setFormInput({
          Name: "",
          EmailAddress: "",
          Inquiry: "",
        });
      } else {
        alert("Failed to send message: " + data.message);
      }
    } catch (err) {
      console.error(err);
      alert("Error sending message");
    }
  };

  return (
    <>
      
    <div className="ContactMainDiv">
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
    </div>
    
    </>
  );
}

export default Contact;
