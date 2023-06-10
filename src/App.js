import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/navbar/navbar';
import ComponentHome from './Components/Principal/Home/ComponentHome';
import ComponentArticle from './Components/Principal/articles/ComponentArticle';
import Footer from './Components/footer/footer'
import PagePopup from './Components/Utils/Popup/PagePopup';



function App() {
  return (
    <div className='app'>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<ComponentHome />} />
        <Route path='/article' element={<ComponentArticle />} />
        <Route path='/article/form' element={<PagePopup />} />
      </Routes>
      <Footer />



      </BrowserRouter>
      
    </div>
  );
}

export default App;
