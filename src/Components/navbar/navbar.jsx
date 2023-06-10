import React from 'react'
import './navbar.css';
import { AiFillCar } from "react-icons/ai";
import { Link } from 'react-router-dom';

function navbar() {
  return (
    <div className='navbar_container'>

        <div className="navbar_info">

            <span className='logo'>Last Minute</span>


            <div className="infos-menu">

                <div className="info_prix">
                    <span>Reservation  <a href="">0678750531</a></span>
                    <span>Prix d’un appel local depuis un poste fixe, hors coût opérateur.  <a href="">Politique de confidence</a></span>
                </div>
                <div className='info_help'> <span>lastminute.com</span> <AiFillCar size={24} /> </div>
                <div className='info_help'> <span>lastminute.com</span> <AiFillCar size={24} /> </div>
                  
            </div>

        </div>

        <div className="nav_menu">

          <div className="nav_container_menu">
            <div className="nav_container_menu_link">
              <Link to="/" className="item" >Home</Link>
              <Link to="/article" className="item" >Article</Link>
              <Link to="/article" className="item" >Article</Link>
            </div>
          </div>
          
            

        </div>
    </div>
  )
}

export default navbar