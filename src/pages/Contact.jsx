import React from "react";
import "../App.css";
import Star from "./Star";
import ConRip from '../components/ConRip' 

const Contact = () => {
  return (
  
    <div className="rectangles">
   <ConRip/>
      <h3
        style={{
          textShadow:
            "0 0 2px #fff, 0 0 4px #fff, 0 0 6px #fff, 0 0 8px #fff, 0 0 10px #fff, 0 0 12px #fff, 0 0 14px #fff, 0 0 16px #fff, 0 0 18px #fff",
        }}
      >
        CONTACT ME
      </h3>
      <br /><br />
     
      <div className="contact-container">
        <div className="box" style={{backgroundColor:"#FFFF4C"}}>
          <i className="bi bi-envelope-open-fill fa-3x"></i>
          <p className="font">desilvadeepthi@yahoo.com.au</p>
        </div>
        <div className="box"style={{backgroundColor:"#FFFF90"}}>
          <i className="bi bi-telephone-inbound-fill fa-3x"></i>
          <p className="font">0418 845 259</p>
        </div>
        
     </div>
     <Star/>

     
    </div>
  
  );
};

export default Contact;

