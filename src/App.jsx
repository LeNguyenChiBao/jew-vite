import React from 'react'
import './App.css'
import "bootstrap-icons/font/bootstrap-icons.css";
import Footer from './component/Footer'
import Navigator from './component/Navigator'
import Reviews from './component/Reviews';
import RegisterForm from './component/RegisterForm';


function App() {
  return (
    <div>
      <Navigator/>
      <Reviews/>
      <RegisterForm/>
      <Footer/>
    </div>
  )
}

export default App