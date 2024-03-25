import React from "react";
import light2 from "../public/light2.mp4";
import FlyAnimation from "./FlyAnimation";
import FlyPage2 from "./FlyPage2";
import {useState } from "react";
import { Link } from "react-router-dom";
import Stress from "./Stress";

import seawater from "../public/seawater.mp4";
import snowtree from "../public/snowtree.mp4";
import wateringplant from "../public/wateringplant.mp4";
import whiteplant from "../public/whiteplant.mp4";
import yoga from "../public/yoga.mp4";
import bluewhiteglass from "../public/bluewhiteglass.mp4";
import changeisgood from "../public/changeisgood.mp4";
import raindrops from "../public/raindrops.mp4";
import roll from "../public/roll.mp4";
import silver from "../public/silver.mp4";
import light1 from "../public/light1.mp4";
import FlyHome from "./FlyHome";


const Remedies = () => {

  const [flyprepage, setFlyprepage] = useState(false);
  const [fly2, setFly2] = useState(false);


  const flyprevi = () => {
    let displayImage = document.getElementById("imagetoprevious");
    if (displayImage.src.match("./butterfly_image.png")) {
      displayImage.src = "./butterfly.gif";
      setFlyprepage(true);
    }
  };

  const flying2 = () => {
    let displayImage = document.getElementById("imagetopage3");
    if (displayImage.src.match("./butterfly_image.png")) {
      displayImage.src = "./butterfly.gif";
      setFly2(true);
    }
  };
  
  return (
    <div className="Content">
      <video src={light2} autoPlay muted loop />
      <h1 className="RemTitle">
        <span>Always believe that something</span> <br />
        <span>Wonderful is about to happen ...</span>
      </h1>
      <h3 className="Rem2Title">
        Heyy!! Strongest human, <br />
        Rigorously we will overcome <br />
        this minuscule phase in our life!
      </h3>
      <div className="Cards">
        <div className="CardStress">
          <div className="CardImage">
            {/* <img src="./Capture1.PNG" alt="" /> */}
            <img src="./stress1.png" alt="" />
          </div>
          <div className="CardName">
            <h1>STRESS</h1>
            <Link to="/stress"> <button>Tour</button> </Link>
          </div>
        </div>

        <div className="CardStress">
          <div className="CardImage">
            {/* <img  src="./Capturefear.PNG" alt="" /> */}
            <img src="./fear1.png" alt="" />
          </div>
          <div className="CardName">
            <h1>FEAR</h1>
            <Link to="/fear"> <button>Tour</button> </Link>
          </div>
        </div>

        <div className="CardStress">
          <div className="CardImage">
            {/* <img src="./Capturedepression4.PNG" alt="" /> */}
            <img src="./depression1.png" alt="" />
          </div>
          <div className="CardName">
            <h1>DEPRESSION</h1>
            <Link to="/depression"> <button>Tour</button> </Link>
          </div>
        </div>

        <div className="CardStress">
          <div className="CardImage">
            {/* <img src="./Capturelonely1.1.PNG" alt="" /> */}
            <img src="./loneliness1.png" alt="" />
          </div>
          <div className="CardName">
            <h1>LONELINESS</h1>
            <Link to="/loneliness"> <button>Tour</button> </Link>
          </div>
        </div>

        <div className="CardStress">
          <div className="CardImage">
            {/* <img src="./Captureoverthinking1.PNG" alt="" /> */}
            <img src="./overthinking1.png" alt="" />
          </div>
          <div className="CardName">
            <h1>OVERTHINKING</h1>
            <Link to="/overthinking"> <button>Tour</button> </Link>
          </div>
        </div>

        <div className="CardStress">
          <div className="CardImage">
            {/* <img src="./Capturedepression3.PNG" alt="" /> */}
            {/* <img src="./dgs2.1.png" alt="" /> */}
            <img src="./discouragement1.png" alt="" />
          </div>
          <div className="CardName">
            <h1>DISCOURAGEMENT</h1>
            <Link to="/discouragement"> <button>Tour</button> </Link>
          </div>
        </div>
      </div>
      <div className="RemFooter">
        <div className="imagetopage3">
          <h4>Connect</h4>
          <img
            id="imagetopage3"
            onClick={flying2}
            src="./butterfly_image.png"
            alt=""
          />
          {fly2 && <FlyPage2 />}
        </div>
        <div className="imagetoprevious">
          <h4>Back</h4>
          <img id="imagetoprevious" onClick={flyprevi}  src="./butterfly_image.png" alt="" />
          {flyprepage && <FlyAnimation/>}
        </div>
      </div>
    </div>
  );
};

export default Remedies;
