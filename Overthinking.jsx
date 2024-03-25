import React from "react";
import { useState } from "react";
import light1 from "../public/light1.mp4";

const Overthinking = () => {
  const [isFlipped1, setFlipped1] = useState(false);
  const [isFlipped2, setFlipped2] = useState(false);
  const [isFlipped3, setFlipped3] = useState(false);

  const [isFlippedP1, setFlippedP1] = useState(false);
  const [isFlippedP2, setFlippedP2] = useState(false);
  const [isFlippedP3, setFlippedP3] = useState(false);

  const handleFlip1 = () => {
    setFlipped1(!isFlipped1);
  };
  const handleFlip2 = () => {
    setFlipped2(!isFlipped2);
  };
  const handleFlip3 = () => {
    setFlipped3(!isFlipped3);
  };

  const handleFlipP1 = () => {
    setFlippedP1(!isFlippedP1);
  };
  const handleFlipP2 = () => {
    setFlippedP2(!isFlippedP2);
  };
  const handleFlipP3 = () => {
    setFlippedP3(!isFlippedP3);
  };

  return (
    <div className="Content">
      <video src={light1} autoPlay muted loop />
      <div className="StressTitle">
        <h1>OVERTHINKING</h1>
        <img src="./overthinking1.png" alt="" />
      </div>
      <div className="StressContainer">
        <div className="StressTips">
          <h1>tips</h1>
          {/* <li>Be active—Take a dance break! ...</li>
                    <li>Close your eyes, take deep breaths, stretch, or meditate</li>
                    <li>Write three things you are grateful for</li>
                    <li>Check in with yourself—take time to ask yourself how you are feeling</li>
                    <li>Laugh!</li> */}
          <li> Take care of yourself.</li>
          <p>
            Avoid drugs and alcohol as they can add to stress. Eat a
            well-balanced diet, get enough sleep, and exercise on a regular
            basis.
          </p>
          <li>Engage in self-relaxation.</li>
          <p>
            Try muscle relaxation, breathing or meditation exercises, prayer,
            yoga, or swimming to reduce stress. Spend time with nature or listen
            to quiet music.
          </p>
          <li>Take breaks when needed.</li>
          <p>
            Especially at work, taking breaks can help you re-organize and
            re-energize your thoughts and focus. This will help you do your work
            and maintain productivity.
          </p>
          <li>Seek out social support.</li>
          <p>
            A partner, family member, friend, counselor, doctor, or clergyperson
            can help lighten your mental load.
          </p>
          <li>Connect with others socially.</li>
          <p>
            {" "}
            Spending time with loved ones and doing fun things can help ease the
            stress.{" "}
          </p>
          <li>Maintain a normal routine.</li>
          <p>
            {" "}
            Get up in the morning and go to bed at night each day at the same
            time. Eat three meals daily.{" "}
          </p>
        </div>
        <div className="StressYoga">
          <h1>yoga</h1>

          <div className="Card">
            <div className={`flip-card ${isFlipped1 ? "flipped" : ""}`}>
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <div className="YogaImage">
                    <img id="stressyoga3" src="./catcowpose_final.gif" alt="" />
                  </div>
                  <div className="YogaName">
                    <h1>TRIKONASANA</h1>
                    <button className="flip-button" onClick={handleFlip1}>
                      Instructions
                    </button>
                  </div>
                </div>
                <div className="flip-card-back">
                  <div className="card-content">
                    {/* <h1>INSTRUCTIONS</h1> */}
                    <p>
                      1. Start on your hands and knees with your wrists directly
                      under your shoulders. <br /> <br />
                      2. Inhale as you drop your belly towards the mat. Lift
                      your chin and chest. <br /> <br />
                      {/* 3. The pose should look like a cat stretching its back. <br /> */}
                      3. Release the crown of your head toward the floor, but
                      don't force your chin to your chest.
                      {/* 5. Inhale, coming back into Cow Pose, and then exhale as you return to Cat Pose. */}
                    </p>
                  </div>
                  <button className="flip-button" onClick={handleFlip1}>
                    Flip
                  </button>
                </div>
              </div>
            </div>

            <div className={`flip-card ${isFlipped2 ? "flipped" : ""}`}>
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <div className="YogaImage">
                    <img id="stressyoga3" src="./balasana_final.gif" alt="" />
                  </div>
                  <div className="YogaName">
                    <h1>NAVASANA</h1>
                    <button className="flip-button" onClick={handleFlip2}>
                      Instructions
                    </button>
                  </div>
                </div>
                <div className="flip-card-back">
                  <div className="card-content">
                    {/* <h1>CARDBACK</h1> */}
                    <p>
                      1. Sit on your heels, knees spread mat distance apart and
                      bring your head <br /> <br />
                      2. Your arms can be either stretched out to the front, by
                      your side or hands underneath your forehead. <br /> <br />
                      3. Breathe into your lower back. <br />
                      Stay for anywhere between 30 seconds and several minutes
                      in this resting pose.
                    </p>
                  </div>
                  <button className="flip-button" onClick={handleFlip2}>
                    Flip
                  </button>
                </div>
              </div>
            </div>

            <div className={`flip-card ${isFlipped3 ? "flipped" : ""}`}>
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <div className="YogaImage">
                    <img id="stressyoga3" src="./shavasana_final.gif" alt="" />
                  </div>
                  <div className="YogaName">
                    <h1>UTKATASANA</h1>
                    <button className="flip-button" onClick={handleFlip3}>
                      Instructions
                    </button>
                  </div>
                </div>
                <div className="flip-card-back">
                  <div className="card-content">
                    {/* <h1>CARDBACK</h1> */}
                    <p>
                      1. Lie down flat on your back. <br /> <br />
                      2. Stretch your arms and legs out and away from your body.{" "}
                      <br /> <br />
                      3. Keep your eyes gently closed. <br /> <br />
                      4. Breathe evenly and attempt to relax. <br /> <br />
                      5. Ensure that your body is completely relaxed and focus
                      on your mind.
                    </p>
                  </div>
                  <button className="flip-button" onClick={handleFlip3}>
                    Flip
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="StressPranayama">
          <h1>Pranayama</h1>

          <div className="Card">
            <div className={`flip-card ${isFlippedP1 ? "flipped" : ""}`}>
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <div className="YogaImage">
                    <img id="stressyoga3" src="./pranayama.png" alt="" />
                  </div>
                  <div className="YogaName">
                    <h1>BHASTRIKA</h1>
                    <button className="flip-button" onClick={handleFlipP1}>
                      Instructions
                    </button>
                  </div>
                </div>
                <div className="flip-card-back">
                  <div className="card-content">
                    {/* <h1>INSTRUCTIONS</h1> */}
                    <p>
                      1. Start on your hands and knees with your wrists directly
                      under your shoulders. <br /> <br />
                      2. Inhale as you drop your belly towards the mat. Lift
                      your chin and chest. <br /> <br />
                      {/* 3. The pose should look like a cat stretching its back. <br /> */}
                      3. Release the crown of your head toward the floor, but
                      don't force your chin to your chest.
                      {/* 5. Inhale, coming back into Cow Pose, and then exhale as you return to Cat Pose. */}
                    </p>
                  </div>
                  <button className="flip-button" onClick={handleFlipP1}>
                    Flip
                  </button>
                </div>
              </div>
            </div>

            <div className={`flip-card ${isFlippedP2 ? "flipped" : ""}`}>
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <div className="YogaImage">
                    <img id="stressyoga3" src="./prana2.png" alt="" />
                  </div>
                  <div className="YogaName">
                    <h1>ANULOM-VILOM</h1>
                    <button className="flip-button" onClick={handleFlipP2}>
                      Instructions
                    </button>
                  </div>
                </div>
                <div className="flip-card-back">
                  <div className="card-content">
                    {/* <h1>CARDBACK</h1> */}
                    <p>
                      1. Sit on your heels, knees spread mat distance apart and
                      bring your head <br /> <br />
                      2. Your arms can be either stretched out to the front, by
                      your side or hands underneath your forehead. <br /> <br />
                      3. Breathe into your lower back. <br />
                      Stay for anywhere between 30 seconds and several minutes
                      in this resting pose.
                    </p>
                  </div>
                  <button className="flip-button" onClick={handleFlipP2}>
                    Flip
                  </button>
                </div>
              </div>
            </div>

            <div className={`flip-card ${isFlippedP3 ? "flipped" : ""}`}>
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <div className="YogaImage">
                    <img id="stressyoga3" src="./prana3.png" alt="" />
                  </div>
                  <div className="YogaName">
                    <h1>SHEETALI</h1>
                    <button className="flip-button" onClick={handleFlipP3}>
                      Instructions
                    </button>
                  </div>
                </div>
                <div className="flip-card-back">
                  <div className="card-content">
                    {/* <h1>CARDBACK</h1> */}
                    <p>
                      1. Lie down flat on your back. <br /> <br />
                      2. Stretch your arms and legs out and away from your body.{" "}
                      <br /> <br />
                      3. Keep your eyes gently closed. <br /> <br />
                      4. Breathe evenly and attempt to relax. <br /> <br />
                      5. Ensure that your body is completely relaxed and focus
                      on your mind.
                    </p>
                  </div>
                  <button className="flip-button" onClick={handleFlipP3}>
                    Flip
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="StressFooter">
        <img src="./butterfly_image.png" alt="" />
      </div>
    </div>
  );
};

export default Overthinking;
