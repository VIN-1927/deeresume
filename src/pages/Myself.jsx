import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="header p-3">
      <div className="row justify-content-center">
        <div className="col-sm-8 col-md-7 py-4">
          <h4
            style={{
              textShadow:
                "0 0 2px #fff, 0 0 4px #fff, 0 0 6px #fff, 0 0 8px #fff, 0 0 10px #fff, 0 0 12px #fff, 0 0 14px #fff, 0 0 16px #fff, 0 0 18px #fff",
            }}
          >
            <strong>ABOUT ME</strong>
          </h4>
          <div className="banner">
            <p
              style={{
                fontFamily: "'Roboto', sans-serif",
                fontSize: "18px",
                fontWeight: "700",
                color: "#01579B",
                lineHeight: "1.6",
                textAlign: "justify",
              }}
            ></p>

            <div
              className="ppp"
              style={{
                fontFamily: "Tahoma",
                fontSize: "18px",
                color: "#01579B",
              }}
            >
              <p>
                My background includes a Diploma of Information Technology with
                a focus on advanced programming and web development,
                complemented by a range of qualifications in web development,
                early childhood education, and educational support.
              </p>
              <p>
                Throughout my career, I have demonstrated a keen attention to
                detail and a proactive approach to managing complex tasks. I
                have sharpened my abilities in organizing events, managing
                databases, providing technical support, and delivering
                exceptional customer service.
              </p>
              <p>
                I excel in high-pressure environments and am known for my
                ability to prioritize multiple tasks while meeting deadlines. My
                strong organizational skills, coupled with a mature and
                professional approach, enable me to work harmoniously within
                team settings.
              </p>
              <p>
                I am passionate about fostering a positive learning environment
                and am committed to using my IT and administrative skills to
                support educational institutions in achieving their goals.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-between align-items-center  px-4">
      
        <Link to="/next" className="btn btn-dark px-3">
          Resume View
        </Link>
      </div>
    </div>
  );
};

export default About;
