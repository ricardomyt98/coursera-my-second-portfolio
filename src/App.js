import React from "react";
import "./App.css";
import {
  AiFillGithub,
  AiFillMail,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import { BsStackOverflow } from "react-icons/bs";
import { RxAvatar } from "react-icons/rx";
import imgA from "./assets/img-a.png";
import imgB from "./assets/img-b.png";
import imgC from "./assets/img-c.png";
import imgD from "./assets/img-d.png";

function App() {
  return (
    <>
      <div className="base-config">
        <div className="header">
          <AiFillGithub style={{ marginLeft: "5%", marginRight: "20px" }} />
          <AiFillMail style={{ marginRight: "20px" }} />
          <AiFillLinkedin style={{ marginRight: "20px" }} />
          <AiFillYoutube style={{ marginRight: "20px" }} />
          <BsStackOverflow />
          <div style={{ float: "right", marginRight: "5%" }}>
            <a href="/#">Projects</a>
            <a href="/#">Contact Me</a>
          </div>
        </div>
        <div className="body-first-page">
          <div className="body-first-page-avatar">
            <RxAvatar />
          </div>
          <div className="body-first-page-title">Hello, I am Rick!</div>
          <div className="body-first-page-text">
            A frontend developer specialised in React
          </div>
        </div>
        <div className="body-second-page">
          <div className="body-second-page-title">Featured Projects</div>

          <div class="row noMargin">
            <div class="one">
              <img src={imgA} alt="a" className="body-second-page-img" />
              <div style={{ marginLeft: "10px", width: "100%" }}>
                <h3
                  style={{
                    fontSize: "20px",
                    marginBottom: "0px",
                  }}>
                  Title
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque rutrum non nunc et viverra.
                </p>
                <a href="/#">See more &rarr;</a>
              </div>
            </div>
            <div class="two">
              <img src={imgB} alt="b" className="body-second-page-img" />
              <div style={{ marginLeft: "10px", width: "100%" }}>
                <h3
                  style={{
                    fontSize: "20px",
                    marginBottom: "0px",
                  }}>
                  Title
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque rutrum non nunc et viverra.
                </p>
                <a href="/#">See more &rarr;</a>
              </div>
            </div>
          </div>
          <div class="row noMargin">
            <div class="three">
              <img src={imgC} alt="c" className="body-second-page-img" />
              <div style={{ marginLeft: "10px", width: "100%" }}>
                <h3
                  style={{
                    fontSize: "20px",
                    marginBottom: "0px",
                  }}>
                  Title
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque rutrum non nunc et viverra.
                </p>
                <a href="/#">See more &rarr;</a>
              </div>
            </div>
            <div class="four">
              <img src={imgD} alt="d" className="body-second-page-img" />
              <div style={{ marginLeft: "10px", width: "100%" }}>
                <h3
                  style={{
                    fontSize: "20px",
                    marginBottom: "0px",
                  }}>
                  Title
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque rutrum non nunc et viverra.
                </p>
                <a href="/#">See more &rarr;</a>
              </div>
            </div>
          </div>
        </div>
        <div className="body-third-page">
          <div className="body-third-page-title">Contact Me</div>
          <div className="body-third-input-label-button">
            <label for="fname">First name:</label>
            <input type="text" id="fname" name="fname" />
          </div>
          <br />
          <div className="body-third-input-label-button">
            <label for="faddress">Email Address:</label>
            <input type="text" id="faddress" name="faddress" />
          </div>
          <br />
          <div className="body-third-input-label-button">
            <label for="faddress">Type of enquiry:</label>
            <select name="cars" id="cars">
              <option value="op1">Option 1</option>
              <option value="op2">Option 2</option>
              <option value="op3">Option 3</option>
              <option value="op4">Option 4</option>
            </select>
          </div>
          <br />
          <div className="body-third-input-label-button">
            <label for="ftext">Your message:</label>
            <textarea id="ftext" name="ftext" rows="4" cols="50">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              rutrum non nunc et viverra. Donec consectetur quam at velit varius
              ultricies. Vestibulum pulvinar risus eu gravida interdum. Sed
              lobortis pulvinar nisi vel ultrices.
            </textarea>
          </div>
          <br />
          <div className="body-third-input-label-button">
            <button>Submit</button>
          </div>
        </div>

        <div className="footer">Rick &#x2022; &copy; 2023</div>
      </div>
    </>
  );
}

export default App;
