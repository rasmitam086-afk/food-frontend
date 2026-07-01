import "./WeProvide.css";
import foodImg from "../assets/Image.png";

import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

function WeProvide() {
  return (
    <section className="weprovide">
      <div className="weprovide-container">

        <div className="left-section">
          <div className="image-wrapper">
            <img src={foodImg} alt="Food" className="food-image" />

            <div className="visit-card">
              <h2>Come and visit us</h2>

              <div className="info-item">
                <FaPhoneAlt />
                <span>+91 6370245927</span>
              </div>

              <div className="info-item">
                <MdEmail />
                <span>rasmitam086@gmail.com</span>
              </div>

              <div className="info-item">
                <FaLocationDot />
                <span>
                  Near Sum Ultimate
                  <br />
                  Bhubaneswer
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="right-section">
          <h1>
            We provide healthy
            <br />
            food for your family.
          </h1>

          <p className="first-para">
            Our story began with a vision to create a unique dining
            experience that merges fine dining, exceptional service,
            and a vibrant ambiance. Rooted in city's rich culinary
            culture, we aim to honor our local roots while infusing a
            global palate.
          </p>

          <p className="second-para">
            At place, we believe that dining is not just about food,
            but also about the overall experience. Our staff,
            renowned for their warmth and dedication, strives to make
            every visit an unforgettable event.
          </p>

          <button className="about-btn">
            More About Us
          </button>
        </div>

      </div>
    </section>
  );
}

export default WeProvide;