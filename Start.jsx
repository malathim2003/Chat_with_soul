import React from "react";
import { useState, useEffect } from "react";
import FlyAbout from "./FlyAbout";
import FlyPage from "./FlyPage";
import Popup from "reactjs-popup";
import whity from "../public/whity_flow.mp4";
import yellow from "../public/yellow.mp4";
import video from "../public/video.mp4";
import video1 from "../public/video1.mp4";
import video2 from "../public/video2.mp4";
import heart from "../public/heart.mp4";


const Start = () => {
  const [fly, setFly] = useState(false);
  const [fly2, setFly2] = useState(false);
  const [flypre, setFlypre] = useState(false);

  const [popupOpen, setPopupOpen] = useState(false);

  const togglePopup = () => {
    setPopupOpen(!popupOpen);
  };

  const flying = () => {
    let displayImage = document.getElementById("imagefeedback");
    if (displayImage.src.match("./butterfly_image.png")) {
      displayImage.src = "./butterfly.gif";
      setFly(true);
    }
  };

  const flying2 = () => {
    let displayImage = document.getElementById("imageabout");
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

  // function validate() {
  //   var fname = document.getElementById("fname").value;
  //   var feedback = document.getElementById("yourfeedback").value;
  //   var error_message = document.getElementById("error_message");

  //   error_message.style.padding = "10px";

  //   var text;
  //   if (fname.length < 3) {
  //     text = "Please Enter a valid First Name";
  //     error_message.innerHTML = text;
  //     // return false;
  //   }

  //   if (feedback.length <= 140) {
  //     text = "Please Enter More Than 140 Characters";
  //     error_message.innerHTML = text;
  //     // return false;
  //   }
  //   alert("Form Submitted Successfully!");
  //   // return true;
  // }

  function toggle() {
    var blur = document.getElementById("blur");
    blur.classList.toggle("active");
    var popup = document.getElementById("popup");
    popup.classList.toggle("active");
  }

  const [formData, setFormData] = useState({
    name: '',
    sex: '',
    profession: '',
    phone: '',
    whatsapp: '',
    image: '',
    description: '',
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    const formInputs = document.querySelectorAll('#myform input, #myform select, #myform textarea');

    let isFormValid = true;

    formInputs.forEach((input) => {
      if (input.value.trim() === '') {
        isFormValid = false;
      }
    });
  if(isFormValid){
    toggle();
  }
  else{

  }
}




  return (

    <div className="StartConnect">
      <video src={video2} autoPlay muted loop></video>
      <div className="StartConnect2" id="blur">
        <h1 className="ConnectTitle">
          <span>The World before your eyes is finite</span>
          <br />
          <span>The Universe inside your soul is infinite...</span>
        </h1>
        <h2 className="Connect2Title">
          <span>So let's start to chat with your friends!!</span>
        </h2>
        <div className="StartContainer">
          <div className="StartCard1">
            <div className="StartPic">
              <img src="start_image1.jpg" alt="" />
            </div>
            <div className="StartContent">
              <div className="StartDescription">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                  aut sed expedita minima, necessitatibus iusto recusandae
                  nostrum a laudantium odio quaerat nesciunt, cupiditate ea fuga
                  amet, qui unde. Amet, ipsam. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Quaerat doloribus vitae officiis
                  corrupti, placeat assumenda aspernatur. Doloribus veniam ea
                  aliquid voluptas iste numquam, illo earum delectus labore
                  accusamus, ipsum ex. Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Dignissimos dolorem perspiciatis facere sed,
                  nam esse quod quidem blanditi
                </p>
              </div>
              <div className="StartContact">
                <a href="tel: 9791646779" target="_blank">
                  <button className="button-33" role="button">
                    Call
                  </button>
                </a>

                <a href="https://wa.me/9791646779" target="_blank">
                  <button className="button-33" role="button">
                    Start Chat
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="StartCard2">
            <div className="StartPic">
              <img src="start_image4.jpg" alt="" />
            </div>
            <div className="StartContent">
              <div className="StartDescription">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                  aut sed expedita minima, necessitatibus iusto recusandae
                  nostrum a laudantium odio quaerat nesciunt, cupiditate ea fuga
                  amet, qui unde. Amet, ipsam. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Quaerat doloribus vitae officiis
                  corrupti, placeat assumenda aspernatur. Doloribus veniam ea
                  aliquid voluptas iste numquam, illo earum delectus labore
                  accusamus, ipsum ex. Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Dignissimos dolorem perspiciatis facere sed,
                  nam esse quod quidem blanditi
                </p>
              </div>
              <div className="StartContact">
                <a href="tel: 7397168226" target="_blank">
                  <button className="button-33" role="button">
                    Call
                  </button>
                </a>

                <a href="https://wa.me/7397168226" target="_blank">
                  <button className="button-33" role="button">
                    Start Chat
                  </button>
                </a>
              </div>
            </div>
          </div>

          <button className="button-29" role="button" onClick={toggle}>
            Need to be a Friend!!
          </button>
          

          <div className="StartFooter">
            <div className="startfeedback">
              <Popup
                trigger={
                  <div className="feedback1">
                    <h4>Feedback</h4>
                    <img
                      id="imagefeedback"
                      // onClick={flying}
                      src="./butterfly_image.png"
                      alt=""
                    />{" "}
                  </div>
                }
                position="center"
              >
                <div className="wrapper">
                  <h2>Feedback Form</h2>
                  <div id="error_message"></div>
                  <form id="myform">
                    <div className="input_field">
                      <input
                        type="text"
                        placeholder="First Name"
                        id="fname"
                        required
                      />
                    </div>
                    <div className="input_field">
                      <textarea
                        placeholder="Your Feedback"
                        id="yourfeedback"
                        required
                      ></textarea>
                    </div>
                    <div className="button-33" role="button">
                      <input type="submit" />
                      {/* {validate()} */}
                    </div>
                  </form>
                </div>
              </Popup>
              {/* {fly && <FlyPage />} */}
            </div>

            <div className="startabout">
              <h4>About</h4>
              <img
                id="imageabout"
                onClick={flying2}
                src="./butterfly_image.png"
                alt=""
              />
              {fly2 && <FlyAbout />}
            </div>

            <div className="startprevious">
              <h4>Back</h4>
              <img
                id="imageprevious"
                onClick={flyprevious}
                src="./butterfly_image.png"
                alt=""
              />
              {flypre && <FlyPage />}
            </div>
          </div>
          {/* <div className="Footer"></div> */}
        </div>
      </div>
      <div id="popup">
        {/* <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur expedita, quae dolorum optio voluptate at beatae id quidem! Eaque minus nemo quisquam ipsa libero dicta possimus earum ducimus aperiam! Explicabo.</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis alias quod dicta similique adipisci earum? Deleniti doloribus animi fugiat provident recusandae repudiandae tempora earum hic tempore nihil amet, quo totam.</p> */}
        <div className="wrapperfriend">
        <div className="wrapperfriend_top">
        <button className="close-button" onClick={toggle}>
              &times;
        </button>
        </div>
          <h2>Woww!! It's a great thought</h2>
          
       
          <p>
            It's a great begin to relax the soul and <br />
            mind of your friends through chat
          </p>
          <div id="error_message">
            <form id="myform" onSubmit={handleSubmit}>
              <div className="input_field">
                <label className="label"> 
                 <h3>Name:</h3> 
                  <input type="text" name="fname" id="fname" required />
                </label>
              </div>
              <div className="input_field">
                <label className="label">
                  <h3>Sex :</h3>
                  <select required>
                    <option value="Female">Female</option>
                    <option value="Male">Male</option>
                    <option value="Other">Other</option>
                    <option selected value="No need to prefer">
                      No need to prefer
                    </option>
                  </select>
                </label>
              </div>
              <div className="input_field">
                <label className="label">
                  <h3>Profession :</h3> 
                  <select required>
                    <option value="Doctor">Doctor</option>
                    <option value="Psychologist">Psychologist</option>
                    <option value="Socialist">Socialist</option>
                    <option selected value="Others">
                      Others
                    </option>
                  </select>
                </label>
              </div>
              <div className="input_field">
                <label className="label">
                 <h3> Phone :</h3>
                  <input type="Number" name="Phone"  required />
                </label>
              </div>
              <div className="input_field">
                <label className="label">
                  <h3> WhatsApp :</h3>
                  <input type="Number" name="Phone" required />
                </label>
              </div>
              <div className="input_field">
                <label className="label">
                  <h3>Image :</h3>
                  <input type="file" name="Image" accept="image/*" id="image" required/>
                </label>
              </div>
              <div className="input_field">
                <label className="label">
                  <h3>Description:</h3>
                  <textarea name="description" required></textarea>
                </label>
              </div>

              <div className="button-33" role="button">
                <button type="submit">submit</button>
                {/* <input type="submit" /> */}

              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Start;
