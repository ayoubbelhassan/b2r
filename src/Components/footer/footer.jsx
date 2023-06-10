import React from 'react'
import { AiFillFacebook } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import './footer.css'
import Logo from './../../assets/footer_logo.png'


function footer() {
  return (

  <div className="footer">



    <div className="footer_content">

  <div className="f_logo">
    <img src={Logo} alt="" />
    <p>Agence De location de moto</p>
  </div>
  
  <div className="f_categorire">
    <h3>Categories</h3>
  </div>

  <div className="f_news">
    <h3>News</h3>
  </div>

  <div className="f_search">
    <h3>Search</h3>
  </div>

    </div>

<div className="footer_container">

      <div className="social_media">
        <a href=""><AiFillFacebook size={18} color='#FFF'/></a>
        <a href=""><AiFillInstagram size={18} color='#FFF'/></a>
        <a href=""><AiFillLinkedin size={18} color='#FFF'/></a>

      </div>
      <h1>LastMinute</h1>
      <p className="copyright">@2023 untitled ui . all right reserved</p>
</div>



</div>





   

  )
}

export default footer