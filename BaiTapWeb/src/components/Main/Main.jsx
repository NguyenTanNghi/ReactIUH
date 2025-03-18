import TabButton from "../TabButton/TabButton";
import { FaArrowRight } from "react-icons/fa";

export default function Main() {
  return (
    <div style={{ position: "relative" }}>
      <img
        src="./Lab_01/Image 73.png"
        alt=""
        className="full-width-image"
      />
      <div className="main-nav">
        <span className="main-span">Recipe of the day</span>
        <h3 style={{ color: "#ff69b4", marginTop:"40px" }}>Salad Caprese</h3>
        <p>
          Classic Italian Salad Caprese: ripe tomatoes, fresh mozzarella, herbs,
          olive oil, and balsamic vinegar create a refreshing dish for lunch or
          appetizer.
        </p>
        <img src="./Lab_02/avatar.png" alt="" style={{marginTop:"50px"}}/>
        <p>Salad Caprese</p>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <TabButton nameButton={"btn-2 ms-2 viewnow"}>
            View now <FaArrowRight />
          </TabButton>
        </div>
      </div>
    </div>
  );
}
