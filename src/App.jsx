import React from 'react'
import './App.scss'
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Contacts from './Pages/Contacts';
import Header from './Components/Header/Header';


const App = () => {

 console.log('hello');

  return (
 <>/

<Header/>

 <Routes>

 <Route path = '/' element= {<Home/>}/>
 <Route path = '/about' element ={<About/>}/>
 <Route path = '/contacts' element ={<Contacts/>} />

 </Routes>
 

 </>
  )
}

export default App