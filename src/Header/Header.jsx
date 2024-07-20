import React,{useState} from 'react'
import './Header.css'
import logo from '../assets/logo.png'
import {BiMenuAltRight} from 'react-icons/bi'
function Header() {
  const [menuOpened,setmenuOpened]=useState(false);
  const getMenuStyles=(menuOpened)=>{
      if(document.documentElement.clientWidth<=800){
        return {right:!menuOpened&&"-100%"}
      }
  }
  return (
    <section className='h-wrapper' id="#header">
      <div className="flexCenter innerWidth paddings h-container">
        <img src={logo} alt="logo" width={100}/>
        <div className="flexCenter h-menu" style={getMenuStyles(menuOpened)}>
            <a href="#Residencies">Residencies</a>
            <a href="#value">Our Values</a>
            <a href="#get-started">Get Started</a>
            <button className='button'>
                <a href="#contact-us">Contact Us</a>
            </button>
        </div>
        <div className="menu-icon" onClick={()=>setmenuOpened((prev)=>!prev)}>
          <BiMenuAltRight size={30}/>
        </div>
      </div>

    </section>
  )
}

export default Header
