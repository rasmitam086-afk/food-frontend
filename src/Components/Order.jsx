import "./Order.css";

import uber from "../assets/order.1.png";
import grubhub from "../assets/order.2.png";
import postmates from "../assets/order.3.png";
import doordash from "../assets/order.4.png";
import foodpanda from "../assets/order.5.png";
import deliveroo from "../assets/order.6.png";
import instacart from "../assets/order.7.png";
import justeat from "../assets/order.8.png";
import didifood from "../assets/order.9.png";

function Order() {
  const brands = [
    { img: uber, name: "Uber Eats" },
    { img: grubhub, name: "Grubhub" },
    { img: postmates, name: "Postmates" },
    { img: doordash, name: "DoorDash" },
    { img: foodpanda, name: "Foodpanda" },
    { img: deliveroo, name: "Deliveroo" },
    { img: instacart, name: "Instacart" },
    { img: justeat, name: "Just Eat" },
    { img: didifood, name: "Didi Food" },
  ];

  return (
    <section className="order">
      <div className="order-container">

        <div className="order-left">
          <h1>
            You can order
            <br />
            through apps
          </h1>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Enim bibendum sed et aliquet aliquet risus tempor semper.
          </p>
        </div>

        <div className="order-right">
          {brands.map((brand, index) => (
            <div className="brand-card" key={index}>
              <img src={brand.img} alt={brand.name} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Order;