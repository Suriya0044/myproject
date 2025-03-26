import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from './pages/About';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Login from './pages/Login';
import Services from './pages/Services';
import 'bootstrap/dist/css/bootstrap.min.css';
import Instagram from './pages/Instagram';
import Privacypolicy from './pages/privacypolicy';
import Termscondition from './pages/Terms&condition';
import About1 from './pages/About1';
import About2 from './pages/About2';
import About3 from './pages/About3';
import About4 from './pages/About4';
import About5 from './pages/About5';
import About6 from './pages/About6';



function App() {
   return (
      <div className='color'>
    <BrowserRouter>
    <Routes>
       
       <Route path='/' element ={<Home />}/> 
       <Route path='/about' element ={<About />}/>
       <Route path='/signup' element ={<Signup />}/>
       <Route path='/login' element ={<Login />}/>
       <Route path='/services' element ={<Services />}/>
       <Route path='/Instagram' element ={<Instagram />}/>
       <Route path='/privacypolicy' element ={<Privacypolicy />}/>
       <Route path='/Terms&condition' element ={<Termscondition />}/>
       <Route path='/about1' element ={<About1 />}/>
       <Route path='/about2' element ={<About2 />}/>
       <Route path='/about3' element ={<About3 />}/>
       <Route path='/about4' element ={<About4 />}/>
       <Route path='/about5' element ={<About5 />}/>
       <Route path='/about6' element ={<About6 />}/>



    </Routes>
  
  </BrowserRouter>
  </div>
   )

}

export default App;
