import "./Information.css";
import maskImage from "../assets/Mask group.png";

function Information() {
  return (
    <section className="information">

      <div className="info-left">

        <h2>
          A little information <br />
          for our valuable guest
        </h2>

        <p>
          At place, we believe that dining is not just about food,
          but also about the overall experience. Our staff, renowned
          for their warmth and dedication, strives to make every
          visit an unforgettable event.
        </p>

        <div className="stats">

          <div className="stat-card">
            <h3>3</h3>
            <span>Locations</span>
          </div>

          <div className="stat-card">
            <h3>1995</h3>
            <span>Founded</span>
          </div>

          <div className="stat-card">
            <h3>65+</h3>
            <span>Staff Members</span>
          </div>

          <div className="stat-card">
            <h3>100%</h3>
            <span>Satisfied Customers</span>
          </div>

        </div>

      </div>

      <div className="info-right">
        <img src={maskImage} alt="Chef Cooking" />
      </div>

    </section>
  );
}

export default Information;