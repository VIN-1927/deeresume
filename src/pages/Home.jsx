import React from 'react';
import { Link} from 'react-router-dom'
import Hero from "../components/common/Hero";
import Container from "react-bootstrap/Container";



const Home = () => {
   const values ={
     
    title: "WELCOME TO DEEPTHI'S WEB PORTFOLIO",
    content:" IT PROFESSIONAL",
    button:  <Link to="/contact" className="btn btn-dark btn-block">
    Contact Me
  </Link>,
    variant: "dark",

   };
   return (
    
   <Container >
<Hero values={values} />



   </Container>
 
  
   );
   };
export default Home
