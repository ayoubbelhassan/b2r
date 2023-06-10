import React from 'react'
import './AfterLast.css'
import { AiTwotoneReconciliation } from "react-icons/ai";

import { BsFillPersonFill } from "react-icons/bs";

function AfterLast() {
  return (
    <div className="afterLast_container">



        <div className="box">
            <div className="box_info">
                <h4 className='date'>4 MAI 2023</h4> 

                <h2 className='title'>Hello world !</h2> 
                <p className="paragraphe">Welcome to WordPress. This is your first post. Edit or delete it, then start writing!.</p>
            </div>
            <hr />

            <div className="box_clicks">

                <div className="item_box">
                <BsFillPersonFill size={24} color='#FFD200' />
                    <span>Par admin</span>

                </div>
                <div className="item_box">

                    <AiTwotoneReconciliation size={24} color='#FFD200'/>
                    <span>Uncategorized</span>

                </div>

            </div>
            

        </div>



    </div>
  )
}

export default AfterLast