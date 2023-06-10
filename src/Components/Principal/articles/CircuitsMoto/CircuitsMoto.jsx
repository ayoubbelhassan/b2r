import React, { useState , useEffect } from 'react'
import './CircuitsMoto.css'
import Moto from './../../../../assets/moto_orange.png'
import { useDispatch , useSelector} from 'react-redux'
import { fetshArticle } from '../../../../redux/ArticleSlice'
import axios from 'axios'
import { Link } from 'react-router-dom'

function CircuitsMoto() {

    const [data, setdata] = useState([])


    const [Type, setType] = useState('')
   
    const [Marque, setMarque] = useState('')

    const [isOpen, setisOpen] = useState(true)



    const articles = useSelector((state) => state.article);

    const dispatch=useDispatch();

    useEffect(()=>{
        dispatch(fetshArticle());

    },[dispatch])  

    useEffect(()=>{

       console.log("Article" ,articles)

       setdata(articles.data)

    },[articles])



    useEffect(()=>{

        Search()
 
     })

     
 

    const Search = () => {
        axios
          .post('http://localhost/b2rAPis/search.php', {
            type: Type,
            marque: Marque
          }, {
            headers: {
              "Content-Type": "multipart/form-data"
            }
          })
          .then((res) => {
            console.log(res.data);
            setdata(res.data)
          })
          .catch((error) => {
            console.log(error);
          });
      };
      





    
  return (
    <div>
        <div className="container_circuitsMoto">
            <div className="Container_Moto">
                <div className="other_infos">

                    {/* <select className='select' value={Marque} onChange={(event) => {

                        const selectedValue = event.target.value;
                        setMarque(selectedValue);
                
                        
                        console.log(Marque);


                    }}> 
                        <option value="" selected >Select car:</option>
                        <option value="toyota">toyota</option>
                    </select> */}

                    
                    <select className='select' onChange={(event)=>{
                        const selectedValue = event.target.value;
                        setType(selectedValue);
                        
                        console.log(event.target.value);

                        Search()


                    }} > 
                        <option value="">Select car:</option>
                        <option value="vtt">vtt</option>

                        <option value="ayoub">aaaa</option>
                    </select>




                    <select className='select' onChange={(event)=>{
                        const selectedValue = event.target.value;
                        setMarque(selectedValue);
                        
                        console.log(event.target.value);

                        Search()


                    }} > 
                        <option value="">Select marque:</option>
                        <option value="toyota">toyota</option>

                        <option value="ayoub">aaaa</option>
                    </select>
                    
                </div>

             


                <div className="Moto_content">

                    {
                        data.map((item , index)=>(

                        <div className="moto_item" key={index}>
                            <img src={Moto} alt="" className="moto_img" />
                            <div className="moto_item_info">
                                <h1>MarSenses Puerto Pollensa Hotel & Spa</h1>
                                <span>{item.Marque}</span>
                                <p>Mar Sen ses Puerto Pollensa Hotel & Spa Mar Senses Puerto 
                                    Pollensa Hotel & SpaM ar Sens es Puerto Pollensa Hotel & Spa 
                                    Mar Sen ses Puerto Pollensa Hotel & Spa Mar Senses Puerto Pollensa
                                     Hotel & SpaM ar Sens es Puerto Pollensa Hotel & Spa</p>
    
                                     <div className="moto_btn_prix">
                                        

                                     <Link  to="/article/form" className="inv" >ArtiPrixcle</Link>

                                        <span>1000 <span>DH</span></span>
                                     </div>
                            </div>
                        </div> 

                        ))
                    }




                </div>

            </div>

        </div>


        


    </div>
  )
}

export default CircuitsMoto