import { useNavigate } from "react-router-dom"
import "./HeroSection.css"
function HeroSection() {
  const navigate = useNavigate()
  return (
    <>
      <div className="Hero">
        <div className="Hero-content">
          <h2 className="Hero-Heading">Best food for <br />
            your taste</h2>
          <p className="para">Discover delectable cuisine and unforgettable moments in our welcoming, culinary haven.</p>
          <div className="button-div">
            <button className="Book-btn" onClick={()=>navigate("/BookTable")}>Book A Table</button>
            <button className="Menu-btn">Explore Menu</button>
          </div>
        </div>
      </div>
    </>
  )
}
export default HeroSection