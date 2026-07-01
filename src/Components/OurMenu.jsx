import "../Components/OurMenu.css"
import { LuCupSoda } from "react-icons/lu";
import { GiBowlOfRice } from "react-icons/gi";
import { PiCoffeeBold } from "react-icons/pi";
import { GiCakeSlice } from "react-icons/gi";
function OurMenu() {
  return (
    <>
      <div className="Menu-div">
        <h1 className="Browse-Menu">Browse Our Menu</h1>
        <div className="Menu-Card">
          <div className="card">
            <div className="icon-div">
              <PiCoffeeBold size={30} />
            </div>
            <p className="head">Breakfast</p>
            <p className="para">In the new era of technology we look in the future with certainty and pride for our life.</p>
            <button className="explore-btn">Explore Menu</button>
          </div>
          <div className="card">
            <div className="icon-div">
              <GiBowlOfRice size={30} />
            </div>
            <p className="head">Main Dishes</p>
            <p className="para">In the new era of technology we look in the future with certainty and pride for our life.</p>
            <button className="explore-btn">Explore Menu</button>
          </div>
          <div className="card">
            <div className="icon-div">
              <LuCupSoda size={30} />
            </div>
            <p className="head">Drinks</p>
            <p className="para">In the new era of technology we look in the future with certainty and pride for our life.</p>
            <button className="explore-btn">Explore Menu</button>
          </div>
          <div className="card">
            <div className="icon-div">
              <GiCakeSlice size={30} />
            </div>
            <p className="head">Desserts</p>
            <p className="para">In the new era of technology we look in the future with certainty and pride for our life.</p>
            <button className="explore-btn">Explore Menu</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default OurMenu