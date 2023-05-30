import { Link } from 'react-router-dom'
import {FaBars,FaTimes} from "react-icons/fa"
import './NavbarStyle.css'

import  { useState } from 'react'


export const Navbar = () => {

    const[toogle, setToogle] = useState(false)
   const handleClick = () => setToogle(!toogle)
   const[color, setColor] = useState(false)
   const changeColor = ()=> {
    if(window.scrollY >= 100){
        setColor(true)
    }else{
        setColor(false)
    }
   }
   window.addEventListener("scroll", changeColor)

  return (
    <div className={color ? "header header-bg" : "header"}>
        <Link to='/'>
        <h1>Portfolio.</h1>
        </Link>
        <ul className={toogle ? "nav-menu active" : "nav-menu"}>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/project'>Project</Link>
            </li>
            <li>
                <Link to='/about'>About</Link>
            </li>
            <li>
                <Link to='/contact'>Contact</Link>
            </li>
        </ul>
        <div className='hamburger' onClick={handleClick}>
          {toogle ?    <FaTimes size={20} style = {{color:"white"}}/> :  <FaBars size={20} style = {{color:"white"}}/>}  
     
           
        </div>
    </div>
  )
}
