import "./Contact1.css";
import { useState } from "react";
import axios from "axios";

function Contact1() {
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    setContactData({
      ...contactData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://food-backend-5r9i.onrender.com/api/contact/create",
        contactData
      );

      alert(response.data.message);

      // Reset form after submit
      setContactData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.log(error);
      alert("Failed to send message");
    }
  };

  return (
    <section className="contact">
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>
          We consider all the drivers of change gives you the components
          <br />
          you need to change to create a truly happens.
        </p>
      </div>

      <div className="contact-card">
        <form onSubmit={handleSubmit}>
          <div className="contact-row">
            <div className="input-group">
              <label>Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={contactData.name}
                onChange={handleChange}
              />
            </div>

            <div className="input-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter email address"
                value={contactData.email}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="input-group">
            <label>Subject</label>
            <input
              type="text"
              name="subject"
              placeholder="Write a subject"
              value={contactData.subject}
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <label>Message</label>
            <textarea
              rows="6"
              name="message"
              placeholder="Write your message"
              value={contactData.message}
              onChange={handleChange}
            ></textarea>
          </div>

          <button type="submit" className="send-btn">
            Send
          </button>
        </form>
      </div>

      <div className="contact-info">
        <div className="info-box">
          <h4>Call Us:</h4>
          <p className="highlight">+91 6370245927</p>
        </div>

        <div className="info-box">
          <h4>Hours:</h4>
          <p>Mon-Fri: 11am - 8pm</p>
          <p>Sat, Sun: 9am - 10pm</p>
        </div>

        <div className="info-box">
          <h4>Our Location:</h4>
          <p>KalingaStudio Chaka</p>
          <p>Near Sum Ultimate</p>
          <p>Bhubaneswar</p>
        </div>
      </div>
    </section>
  );
}

export default Contact1;