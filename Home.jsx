import React, { useState } from "react";
import sky from "../public/HomeBackground.mp4";
import { Link } from "react-router-dom";
import grass from "../public/sunrise_grass.mp4";
import FlyAnimation from "./FlyAnimation";
// import trees from "../public/road_with_tress.mp4";
// import flowers from "../public/flowers.mp4";
// import beach from "../public/beach.mp4";

const Home = () => {
  const [fly, setFly] = useState(false);

  const flying = () => {
    let displayImage = document.getElementById("image");
    if (displayImage.src.match("./butterfly_image.png")) {
      displayImage.src = "./butterfly.gif";
      setFly(true);
    }
  };

  
  return (
    <>
      <div className="Content">
        <video src={sky} autoPlay loop muted />
        <div className="HomeContainer">
          <h2 className="HomeTitle">
            <span>CHAT </span>
            <span>TO </span>
            <span>YOUR </span>
            <span id="soul">SOUL</span>
          </h2>
          <h2 className="HomeContent">
            A happy soul is the best <br />
            shield for a cruel world
          </h2>

          <div className="HomeFooter">
            <h4>Next</h4>
            <img
              id="image"
              onClick={flying}
              src="./butterfly_image.png"
              alt=""
            />
            {fly && <FlyAnimation />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
