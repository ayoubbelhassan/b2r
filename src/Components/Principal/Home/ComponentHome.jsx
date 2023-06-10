import React from 'react'
import Offre from './offre/offre'
import Services from './Services/services'
import Testimonial from './Testimonial/Testimonial'
import AfterLast from './AfterLast/AfterLast'



function ComponentHome() {
  return (
    <div>
      
        <Offre />
        <Services />

        <Testimonial />
        <AfterLast />

     
        
    </div>
  )
}

export default ComponentHome