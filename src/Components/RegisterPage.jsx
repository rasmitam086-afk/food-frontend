import { useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaLock,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";
import "./RegisterPage.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handelSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post("https://food-backend-5r9i.onrender.com/api/auth/register", {
        fullName, email, phone, gender, password
      }, { withCredentials: true })
      console.log(response.data);
      navigate("/login")
    } catch (error) {
      console.log(error.message || error);
    }
  }


  return (
    <section className="register-page">
      <div className="register-container">
        <h1>Create Account</h1>

        <p className="register-subtitle">
          Join us today and enjoy a seamless dining experience with exclusive
          reservations and offers.
        </p>

        <div className="register-card">
          <form onSubmit={handelSubmit}>
            {/* Full Name */}
            <div className="input-group">
              <label>Full Name</label>
              <div className="input-box">
                <FaUser />
                <input
                  type="text"
                  placeholder="Enter your full name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>
            </div>

            {/* Email */}
            <div className="input-group">
              <label>Email Address</label>
              <div className="input-box">
                <FaEnvelope />
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            {/* Phone */}
            <div className="input-group">
              <label>Phone Number</label>
              <div className="input-box">
                <FaPhone />
                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </div>

            {/* Gender */}
            <div className="input-group">
              <label>Gender</label>
              <select className="custom-select">
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                <option>Select Gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>

            {/* Password */}
            <div className="input-group">
              <label>Password</label>

              <div className="input-box">
                <FaLock />

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                <button
                  type="button"
                  className="password-toggle"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                >
                  {showPassword ? (
                    <FaEyeSlash />
                  ) : (
                    <FaEye />
                  )}
                </button>
              </div>
            </div>

            <button className="register-btn">
              Create Account
            </button>

            <div className="login-text">
              Already have an account? <span onClick={() => navigate("/login")}>Login</span>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default RegisterPage;