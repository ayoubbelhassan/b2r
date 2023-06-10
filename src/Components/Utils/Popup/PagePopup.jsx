import React, { useState } from 'react'
import './popup.css'
import { Input } from 'postcss'

function PagePopup() {
  

  const [Suivant, setSuivant] = useState(false)

  const [categorie, setCategorie] = useState('');
  const [nombre, setNombre] = useState('');
  const [article, setArticle] = useState('');
  const [dateDebut, setDateDebut] = useState('');
  const [dateFin, setDateFin] = useState('');
  const [prix, setPrix] = useState('');
  const [avance, setAvance] = useState('');
  const [description, setDescription] = useState('');
  


  const [livraison, setLivraison] = useState('');
  const [recuperation, setRecuperation] = useState('');
  const [prenome, setPrenome] = useState('');
  const [nome, setNome] = useState('');
  const [dateNaissance, setDateNaissance] = useState('');
  const [email, setEmail] = useState('');
  const [telephone, setTelephone] = useState('');
  const [cni, setCNI] = useState('');




  const validateFirstInputs = () => {
    if (
      categorie.trim() === '' ||
      nombre.trim() === '' ||
      article.trim() === '' ||
      dateDebut.trim() === '' ||
      dateFin.trim() === '' ||
      prix.trim() === '' ||
      avance.trim() === '' ||
      description.trim() === ''
    ) {
      
      window.alert('Please fill in all required fields.');
    }else{

      setSuivant(true);

    }
  
   
  };
  

  const handleReserveClick = () => {
    // Perform form validation
    if (
      livraison.trim() === '' ||
      recuperation.trim() === '' ||
      prenome.trim() === '' ||
      nome.trim() === '' ||
      dateNaissance.trim() === '' ||
      email.trim() === '' ||
      telephone.trim() === '' ||
      cni.trim() === ''
    ) {
      
      
      alert('Please fill in all fields');
      return;
    }
  
   
  };
  







 



  return (
    <div className='container-form'>

      <div className='form' style={{display:Suivant?'none':'block'}}>

        <div className='container-item'>

          <div className='input-item'>
            <label className='label'>Categorie</label>
            <input className='input' type='text' placeholder='Categorie' value={categorie} onChange={(e) => setCategorie(e.target.value)}/>
          </div>

          <div className='input-item'>
            <label className='label'>nombre</label>
            <input className='input' type='number' placeholder='nombre' value={nombre} onChange={(e) => setNombre(e.target.value)} />
          </div>

        </div>


        <div className='input-item-seul'>
            <label className='label'>Article</label>
            <input  className='input' type='text' placeholder='Article'  value={article} onChange={(e) => setArticle(e.target.value)}   />
          </div>

        <div className='container-item'>

          <div className='input-item'>
            <label className='label'>Date debut</label>
            <input className='input' type='date' placeholder='Date debut'   value={dateDebut} onChange={(e) => setDateDebut(e.target.value)} />
          </div>

          <div className='input-item'>
            <label className='label'>Date fin</label>
            <input className='input' type='date' placeholder='Date fin'  value={dateFin} onChange={(e) => setDateFin(e.target.value)} />
          </div>

        </div>


        <div className='container-item'>

          <div className='input-item'>
            <label className='label'>prix</label>
            <input className='input' type='number' placeholder='prix' value={prix} onChange={(e) => setPrix(e.target.value)}/>
          </div>

          <div className='input-item'>
            <label className='label'>avance</label>
            <input className='input' type='number' placeholder='avance'  value={avance} onChange={(e) => setAvance(e.target.value)} />
          </div>
        </div>




        <div className='input-item-seul'>
            <label className='label'>Description</label>
            <textarea  className='input' type='text' placeholder='Description'  rows="4" cols="40" value={description} onChange={(e) => setDescription(e.target.value)}/>
        </div>

        <div className='btn-container'>
          <span></span>
            <button className='btn' onClick={()=>validateFirstInputs()}>Suivant</button>
        </div>

        


      </div>



       <div className='form' style={{display:Suivant?'block':'none'}}>
        
        <div className='container-item'>

          <div className='input-item'>
            <label className='label'>livraison</label>
            <input className='input' type='text' placeholder='livraison' value={livraison}  onChange={(e) => setLivraison(e.target.value)}/>
          </div>

          <div className='input-item'>
            <label className='label'>Recuperation</label>
            <input className='input' type='text' placeholder='Recuperation'  value={recuperation} onChange={(e) => setRecuperation(e.target.value)}/>
          </div>

        </div>



        <div className='container-item'>

          <div className='input-item'>
            <label className='label'>prenome</label>
            <input className='input' type='text' placeholder='prenome'  value={prenome} onChange={(e) => setPrenome(e.target.value)} />
          </div>

          <div className='input-item'>
            <label className='label'>nome</label>
            <input className='input' type='number' placeholder='nome'  value={nome} onChange={(e) => setNome(e.target.value)}/>
          </div>

        </div>




        <div className='container-item'>

          <div className='input-item'>
            <label className='label'>Date naissance</label>
            <input className='input' type='date' placeholder='Date naissance' value={dateNaissance} onChange={(e) => setDateNaissance(e.target.value)}/>
          </div>

          <div className='input-item'>
            <label className='label'>Email</label>
            <input className='input' type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>

        </div>

        <div className='container-item'>

          <div className='input-item'>
            <label className='label'>Telephone</label>
            <input className='input' type='number' placeholder='Telephone' value={telephone} onChange={(e) => setTelephone(e.target.value)}/>
          </div>

          <div className='input-item'>
            <label className='label'>CNI</label>
            <input className='input' type='text' placeholder='CNI' value={cni} onChange={(e) => setCNI(e.target.value)}/>
          </div>

        </div>


        <div className='btn-container'>
          <button className='btn'  onClick={()=>setSuivant(false)}>precent</button>
          <button className='btn'  >reserve</button>
        </div>

        


      </div>

    </div>
  )
}

export default PagePopup