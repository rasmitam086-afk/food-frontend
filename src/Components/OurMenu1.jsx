import { useEffect, useState } from "react";
import axios from "axios";
import "./OurMenu1.css"
import { link } from "framer-motion/client";
import { Link } from "react-router-dom";

function OurMenu1() {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);

  const getFoods = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8800/api/food/get-all-food"
      );

      setFoods(response.data.foods);
    } catch (error) {
      console.log(error.response?.data || error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getFoods();
  }, []);

  return (
    <section className="menu-section">
      <h1 className="menu-title">Our Menu</h1>

      <p className="menu-subtitle">
        We consider all the drivers of change gives you the components
        <br />
        you need to change to create a truly happens.
      </p>

      <div className="menu-buttons">
        <button className="active">All</button>
      </div>

      {loading ? (
        <h2 className="loading">Loading Foods...</h2>
      ) : (
        <div className="menu-grid">
          {foods.map((food) => (
            <Link to={`/get-details/${food._id}`}>
            <div className="menu-card" key={food._id}>
              <img src={food.image} alt={food.name} />

              <h3 className="price">
                ₹{food.discountPrice}
                <span className="old-price">
                  ₹{food.actualPrice}
                </span>
              </h3>

              <h2>{food.name}</h2>

              <p>{food.description}</p>
            </div>
            </Link>

            
          ))}
        </div>
      )}
    </section>
  );
}

export default OurMenu1;