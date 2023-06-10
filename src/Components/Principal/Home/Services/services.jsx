import React from 'react'
import './services.css'
import moto from './../../../../assets/moto_service.png'
import quad from './../../../../assets/quad_service.png'
import vtt from './../../../../assets/vtt.png'


function services() {
  return (
    <div className="services_container">
      
        <div className="content_services">

        <div className="box" style={{background:'#FFA726'}}>
  
            <h1>Circuits moto</h1>
            <p>Nous partageons avec vos notre experience de voyage a Moto au Maroc</p>
        </div>

        <div className="box" style={{background:'#5AA8EA'}}>
            <h1>Circuits quad</h1>
            <p>Lorem Ipsum is simply dummy text of 
                the printing and typesetting industry</p>
        </div>

        <div className="box" style={{background:'#84D5E4'}}>
            <h1>Circuits vtt</h1>
            <p>Lorem Ipsum is simply dummy text of 
                the printing and typesetting industry</p>
        </div>



        </div>

    </div>
  )
}

export default services
