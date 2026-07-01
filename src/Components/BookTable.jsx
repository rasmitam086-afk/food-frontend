import "./BookTable.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function BookTable() {
  const navigate = useNavigate();

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [person, setPerson] = useState("1");

  const [loading, setLoading] = useState(false);
  

  const handleBooking = async () => {
    if (!date || !time || !name || !phone || !person) {
      return alert("Please fill all fields");
    }

    try {
      setLoading(true);

      const response = await axios.post(
        "https://food-backend-5r9i.onrender.com/api/table/create",
        {
          date,
          time,
          name,
          phone,
          person,
        }
      );

      alert(response.data.message);

      setDate("");
      setTime("");
      setName("");
      setPhone("");
      setPerson("1");

    } catch (error) {
      alert(error.response?.data?.message || error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="book-table">
      <div className="book-table-container">
        <h1>Book A Table</h1>

        <p className="subtitle">
          We consider all the drivers of change gives you the components
          <br />
          you need to change to create a truly happens.
        </p>

        <div className="booking-card">
          <div className="form-row">
            <div className="form-group">
              <label>Date</label>

              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Time</label>

              <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Name</label>

              <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Phone</label>

              <input
                type="text"
                placeholder="Enter phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
          </div>

          <div className="form-group full-width">
            <label>Total Person</label>

            <select
              value={person}
              onChange={(e) => setPerson(e.target.value)}
            >
              <option value="1">1 Person</option>
              <option value="2">2 Person</option>
              <option value="3">3 Person</option>
              <option value="4">4 Person</option>
              <option value="5">5 Person</option>
              <option value="6">6 Person</option>
              <option value="7">7 Person</option>
              <option value="8">8 Person</option>
            </select>
          </div>

          <button
            className="book-btn"
            onClick={handleBooking}
            disabled={loading}
          >
            {loading ? "Booking..." : "Book A Table"}
          </button>
        </div>
      </div>

      <div className="map-section"></div>
    </section>
  );
}

export default BookTable;