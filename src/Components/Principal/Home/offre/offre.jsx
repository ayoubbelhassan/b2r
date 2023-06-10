import React from 'react'
import './offre.css'
import Img1 from './../../../../assets/v1.png'
import Img2 from './../../../../assets/v2.png'
import Img3 from './../../../../assets/v3.png'

function offre() {

const data=[
    {
        id:1,
        article:'Dacia',
        prixn:500,
        prixp:300,
        img:Img1
    },
    {
      id:2,
      article:'Ferrari',
      prixn:500,
      prixp:300,
      img:Img2
  },
  {
    id:3,
    article:'Ferrari',
    prixn:500,
    prixp:300,
    img:Img3
},
]

  return (
    <div className="offre_container">
        <h1>Trouvez des plans pour vos vacances</h1>

        <div className="render_items">

        {data.map((item) => (
         <div className="card">
         <img src={item.img}  className="img" />

         <div className="firs_info">
          <span>{item.article}</span>
          <p>{item.prixn}<span>dh/day</span></p>
         </div>

         <div className="second_info">
          <a href="#">Booking</a>
          <p>{item.prixp}<span>dh/day</span></p>
         </div>

      </div>
      ))}

           



        </div>
    </div>
  )
}

export default offre