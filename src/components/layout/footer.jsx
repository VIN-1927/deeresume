import React from 'react'
import Avatar from '../../assets/image.png';
import {Link} from 'react-router-dom'

const  Footer = () => {
  return (
    
       <div className="side-menu-footer">
      
        <div className="avatar">
          <img src={Avatar} alt="user" />
        </div>

        <div className="user-info">
         <Link to='/myself'> <h5> Deepthi de Silva</h5></Link>
          <p>desilvadeepthi@yahoo.com.au</p>
        </div>
      </div>

  )
}

export default Footer
