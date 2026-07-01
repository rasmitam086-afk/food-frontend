import "./Navbar.css";
import { FaPhoneAlt } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";
import Logo from "../assets/Food Logo.png";
import { TiThMenu } from "react-icons/ti";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { CgProfile } from "react-icons/cg";
import axios from "axios";

function Navbar() {
  const [mobileViewOpen, setMobileViewOpen] = useState(false)
  const user = JSON.parse(localStorage.getItem("user"));
  const handleLogout = async () => {
    try {
      await axios.get(
        "http://localhost:8800/api/auth/logout",
        {
          withCredentials: true,
        }
      );

      localStorage.removeItem("user");
      setMobileViewOpen(false)

      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };



  const navigate = useNavigate()
  function closeMobileMenu() {
    setMobileViewOpen(false)
  }
  function GotoTable() {
    navigate("/booktable")
  }
  return (
    <>
      <nav className="Navbar">
        {/* Top Section */}
        <div className="top-section">
          {/* Left */}
          <div className="top-left">
            <div className="phone">
              <FaPhoneAlt size={20} />
              91 6370245927
            </div>

            <div className="email">
              <CgMail size={30} />
              rasmitam086@gmail.com
            </div>
          </div>

          {/* Right */}
          <div className="top-right">
            <a href="https://x.com/home?lang=en-in">
              <div className="social-icons-div">
                <FaTwitter size={15} />
              </div>
            </a>
            <a href="https://www.facebook.com/">
              <div className="social-icons-div">
                <FaFacebookF size={15} />
              </div>
            </a>
            <a href="https://www.instagram.com/">
              <div className="social-icons-div">
                <FaInstagram size={15} />
              </div>
            </a>
            <a href="https://github.com/">
              <div className="social-icons-div">
                <FaSquareGithub size={15} />
              </div>
            </a>
          </div>
        </div>
        {/* Bottom Section */}
        <div className="bottom-section">
          {/* Logo */}
          <div className="logo-div">
            <img className="logo" src={Logo} alt="Logo" />
            <h2 className="name">Rasmii Delights</h2>
          </div>
          {/* Menu */}
          <div className="Menu">
            <Link className="menu-item" to={"/"}>Home</Link>
            <Link className="menu-item" to={"/about"}>About</Link>
            <Link className="menu-item" to={"/menu"}>Menu</Link>
            <Link className="menu-item" to={"/pages"}>Pages</Link>
            <Link className="menu-item" to={"/contact"}>Contact</Link>
          </div>
          {/* button  */}
          <div className="Button">
            <button onClick={GotoTable} className="bk-btn">Book A Table</button>
            { user ? 
             <button
              onClick={handleLogout}
              style={{backgroundColor:"red",color:"white",border:"none",padding:"0.7rem 1rem",borderRadius:"30px",cursor:"pointer",fontSize:"1rem"}}>
              
              Logout
            </button>:<CgProfile onClick={() => navigate("/login")} size={40} />
            }

          </div>

        <div className="menu-icon">
          {mobileViewOpen ? <RxCross2 size={20} onClick={() => setMobileViewOpen(!mobileViewOpen)} /> : <TiThMenu size={20} onClick={() => setMobileViewOpen(!mobileViewOpen)} />}

        </div>
      </div>
      {/* mobile menu section */}
      {mobileViewOpen && <div className="mobile-menu-items">
        <div className="mobile-menus">
          <Link className="menu-item" onClick={closeMobileMenu} to={"/"}>Home</Link>
          <Link className="menu-item" onClick={closeMobileMenu} to={"/about"}>About</Link>
          <Link className="menu-item" onClick={closeMobileMenu} to={"/menu"}>Menu</Link>
          <Link className="menu-item" onClick={closeMobileMenu} to={"/pages"}>Pages</Link>
          <Link className="menu-item" onClick={closeMobileMenu} to={"/contact"}>Contact</Link>
        </div>
        <div className="mobile-btn">
          <button onClick={() => { GotoTable(); closeMobileMenu(); }} className="bk-tbl">Book A Table</button>
          {user ?
            <button
              onClick={handleLogout}
              style={{ backgroundColor: "red", color: "white", border: "none", padding: "0.7rem 1rem", borderRadius: "30px", cursor: "pointer", fontSize: "1rem" }}>
              Logout
            </button> : <button onClick={() => { navigate("/login"); closeMobileMenu(); }} className="lgn-sup">Login/SignUp</button>}
        </div>
      </div>}
    </nav >
    </>
  );
}

export default Navbar;