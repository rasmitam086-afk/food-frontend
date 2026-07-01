import { useRef } from "react";
import "./Vid.css";

import videoFile from "../assets/resturant vid.mp4";
import { FaPlay } from "react-icons/fa";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { BsCalendar2Date } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";

function Vid() {
  const videoRef = useRef(null);

  const playVideo = () => {
    videoRef.current.play();
  };

  return (
    <section className="vid-section">

      <div className="hero-container">

        <video
          ref={videoRef}
          className="hero-video"
          muted
          loop
          poster=""
        >
          <source src={videoFile} type="video/mp4" />
        </video>

        <div className="overlay">

          <button className="play-btn" onClick={playVideo}>
            <FaPlay />
          </button>

          <h1>
            Feel the authentic & <br />
            original taste from us
          </h1>

        </div>

      </div>

      <div className="features">

        <div className="feature">
          <MdOutlineRestaurantMenu className="icon" />

          <div>
            <h4>Multi Cuisine</h4>
            <p>
              In the new era of technology we look
              in the future with certainty life.
            </p>
          </div>
        </div>

        <div className="feature">
          <BsCalendar2Date className="icon" />

          <div>
            <h4>Easy To Order</h4>
            <p>
              In the new era of technology we look
              in the future with certainty life.
            </p>
          </div>
        </div>

        <div className="feature">
          <TbTruckDelivery className="icon" />

          <div>
            <h4>Fast Delivery</h4>
            <p>
              In the new era of technology we look
              in the future with certainty life.
            </p>
          </div>
        </div>

      </div>

    </section>
  );
}

export default Vid;