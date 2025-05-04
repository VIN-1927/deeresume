import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/common/Hero";
import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";

import Cheetah from '../assets/animal/cheetah.jpeg';
import Lion from '../assets/animal/lion.jpeg'
import Tiger from '../assets/animal/tiger.jpeg'
import WhiteTiger from '../assets/animal/white.jpeg'
const Home = () => {
  const values = {
    title: "WELCOME TO DEEPTHI'S WEB PORTFOLIO",
    content: " IT PROFESSIONAL",
    button: (
      <Link to="/contact" className="btn btn-dark btn-block">
        Contact Me
      </Link>
    ),
    variant: "dark",
  };
  return (
    <Container>
      <Hero values={values} />

  
   <div className="carousel-container">
  
 <Carousel interval={3000} indicators={false} controls={false} fade>
<Carousel.Item>
   <img className="d-block w-100" src={Cheetah} alt="Cheetah"/>
</Carousel.Item>
<Carousel.Item>
   <img className="d-block w-100" src={Lion} alt="Lion"/>
</Carousel.Item>
<Carousel.Item>
   <img className="d-block w-100" src={Tiger} alt="Tiger"/>
</Carousel.Item>
<Carousel.Item>
   <img className="d-block w-100" src={WhiteTiger} alt="Tiger"/>
</Carousel.Item>

 </Carousel>
</div>
  <div className="carousel-container">
 
 <Carousel interval={3000} indicators={false} controls={false} fade>
<Carousel.Item>
   <img className="d-block w-100" src={Cheetah} alt="Cheetah"/>
</Carousel.Item>
<Carousel.Item>
   <img className="d-block w-100" src={Lion} alt="Lion"/>
</Carousel.Item>
<Carousel.Item>
   <img className="d-block w-100" src={Tiger} alt="Tiger"/>
</Carousel.Item>
<Carousel.Item>
   <img className="d-block w-100" src={WhiteTiger} alt="Tiger"/>
</Carousel.Item>

 </Carousel>
</div>


    </Container>
  );
};
export default Home;
