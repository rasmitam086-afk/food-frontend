import "./Footer.css"
import logo from "../assets/Food-Logo.png"
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";
import img1 from "../assets/img-1.jpeg"
import img2 from "../assets/img-2.jpeg"
import img3 from "../assets/img-3.jpeg"
import img4 from "../assets/img-4.jpeg"


function Footer() {
  return (
    <>
      <footer className="Footer">
        {/* Left */}
        <div className="left">
          <div className="logo-name">
            <img className="left-logo" src={logo} alt="" />
            <h2 className="name">Rasmii Delights</h2>
          </div>
          <p className="para">In the new era of technology we look a in the future with certainty and pride to for our company and.</p>
          {/* Social Links */}
          <div className="social-linkDiv">
            <a href="">
              <div className="social-item">
                <FaTwitter size={20} />
              </div>
            </a>
            <a href="https://www.facebook.com/share/1Bo5L3K8Nc/">
              <div className="social-item">
                <FaFacebookF size={20} />
              </div>
            </a>
            <a href="https://www.instagram.com/">
              <div className="social-item">
                <FaInstagram size={20} />
              </div>
            </a>
            <a href="https://github.com/">
              <div className="social-item">
                <FaSquareGithub size={20} />
              </div>
            </a>
          </div>
        </div>
        {/* Middle */}
        <div className="middle">
          <div className="middle-1st">
            <p className="page">Pages</p>
            <div className="footer-menu">
              <a href="">Home</a>
              <a href="">About</a>
              <a href="">Menu</a>
              <a href="">Pricing</a>
              <a href="">Blog</a>
              <a href="">Contact</a>
              <a href="">Delivery</a>
            </div>
          </div>
          <div className="middle-1st">
            <p className="page">Utility Pages</p>
            <div className="footer-menu">
              <a href="">Start Here</a>
              <a href="">Styleguide</a>
              <a href="">Password Protected</a>
              <a href="">404 Not Found</a>
              <a href="">Licenses</a>
              <a href="">Changelog</a>
              <a href="">View More</a>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="Right">
          <p className="Follow">Follow Us On Instagram</p>
          <div className="images">
            <div className="row">
              <div className="img">
                <img src={img1} alt="img-1" />
              </div>
              <div className="img">
                <img src={img2} alt="img-2" />
              </div>
            </div>
            <div className="row">
              <div className="img">
                <img src={img3} alt="img-3" />
              </div>
              <div className="img">
                <img src={img4} alt="img-4" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer