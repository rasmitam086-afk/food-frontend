import { useState } from "react";
import {
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";
import "./LoginPage.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")


  const navigate = useNavigate()
  const handelLogin = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post("https://food-backend-5r9i.onrender.com/api/auth/login", { email, password }, { withCredentials: true });

      console.log(response);

      localStorage.setItem("user", JSON.stringify(response.data.user)
      );
      if (response.data.user.role === "admin") {
        navigate("/admin/dashboard");
      } else {
        navigate("/");
      }
    } catch (error) {
      console.log(error.message || error);
    }
  }

  return (
    <section className="login-page">
      <div className="login-container">
        <h1>Welcome Back</h1>

        <p className="login-subtitle">
          Sign in to access your account and manage your reservations.
        </p>

        <div className="login-card">
          <form onSubmit={handelLogin}>
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

            {/* Password */}
            <div className="input-group">
              <label>Password</label>

              <div className="input-box">
                <FaLock />

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
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

            <div className="forgot-password">
              <a href="/">Forgot Password?</a>
            </div>

            <button className="login-btn">
              Login
            </button>

            <div className="register-link">
              Don't have an account? <span onClick={() => navigate("/register")}>Register</span>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;