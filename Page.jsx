import React from "react";
import sunrise from "../public/sunrise_grass.mp4";
import FlyPage from "./FlyPage";
import FlyPage2 from "./FlyPage2";
import FlyHome from "./FlyHome";
import { useState } from "react";
import "./index.css";

import birds from "../public/group_of_birds_flying.mp4";
import flowers from "../public/sky_flowers.mp4";
import white from "../public/whiteflower.mp4";
import plant from "../public/thrla.mp4";
import snow from "../public/snow.mp4";
import FlyAnimation from "./FlyAnimation";


const Page = () => {
  const [fly, setFly] = useState(false);
  const [fly2, setFly2] = useState(false);
  const [flypre, setFlypre] = useState(false);

  const flying = () => {
    let displayImage = document.getElementById("imagetop3");
    if (displayImage.src.match("./butterfly_image.png")) {
      displayImage.src = "./butterfly.gif";
      setFly(true);
    }
  };

  const flying2 = () => {
    let displayImage = document.getElementById("imagetop2");
    if (displayImage.src.match("./butterfly_image.png")) {
      displayImage.src = "./butterfly.gif";
      setFly2(true);
    }
  };

  const flyprevious = () => {
    let displayImage = document.getElementById("imageprevious");
    if (displayImage.src.match("./butterfly_image.png")) {
      displayImage.src = "./butterfly.gif";
      setFlypre(true);
    }
  };

  return (
    <div className="Content">
      <video src={sunrise} autoPlay loop muted></video>
      <h1 className="PageTitle">
        <span>Follow your soul ... </span><br />
        <span>It knows the way!!</span>
      </h1>

      <div className="PageContainer">
        <h4>Take a minute to know about yourself...</h4>
        <p>
          Have you heard ? The answer to all issues is Communication. Yes!
          Talking to someone about the troubles and difficulties we encounter on
          a daily basis can ease your suffering and liberate your spirit
        </p>
        <br />
        <p>
          Dont't be afraid to share your difficulties with others because saying
          about your difficulties will likely relieve your anxiety and that's an
          excellent thing. So why waiting to tell someone about your problems?
          Come on, go ahead, communicate with your soul, and live a happy life
        </p>
      </div>
      <div className="PageFooter">
        <div className="page3">
          <h4>Next</h4>
          <img
            id="imagetop3"
            onClick={flying}
            src="./butterfly_image.png"
            alt=""
          />
          {fly && <FlyPage />}
        </div>

        <div className="page2">
          <h4>Connect</h4>
          <img
            id="imagetop2"
            onClick={flying2}
            src="./butterfly_image.png"
            alt=""
          />
          {fly2 && <FlyPage2 />}
        </div>

        <div className="previous">
          <h4>Back</h4>
          <img
            id="imageprevious"
            onClick={flyprevious}
            src="./butterfly_image.png"
            alt=""
          />
          {flypre && <FlyHome/>}
        </div>
      </div>
    </div>
  );
};

export default Page;
