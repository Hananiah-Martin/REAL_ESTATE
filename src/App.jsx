import React from 'react'
import './App.css'
import Header from './Header/Header'
import Hero from './components/Hero/Hero'
import Companies from './components/Companies/Companies'
import Residencies from './components/Residencies/Residencies'
import Value from './components/value/value'
import Contact from './components/Contacts/Contacts'
import GetStarted from './components/GetStarted/GetStarted'
import Footer from './components/Footer/Footer'
export default function App() {
  return (
    <div className='App'>
      <div>
        <div className="white-gradient" />
        <Header />
        <Hero />
      </div>
      <Companies/>
      <Residencies/>
      <Value/>
      <Contact/>
      <GetStarted/>
      <Footer/>
    </div>
  )
}
