import React from 'react'
import "./navbar.css"
import { useState } from 'react'
import { Link } from 'react-router-dom'
import {GoHome} from "react-icons/go"
const Navbar = () => {
  const [address,setaddress]=useState("home")
  return (
   <>
   <nav className='navbar'>
    
    <ul>
        <li onClick={()=>{setaddress("home")}}
         
         >
 <Link to="/" className={address==="home" ? ("active-home"):("not-active-home")}><GoHome className='home-icon'/>
 </Link>
          </li>
        <li onClick={()=>{setaddress("about")}}
        
        >
          <Link to="/skill"  className={address==="about" ? ("active"):("not-active")}>Skills</Link>
        </li>
        <li onClick={()=>{setaddress("contact")}}
        
        >
           <Link to="/contact"  className={address==="contact" ? ("active"):("not-active")}>Contact</Link>
        </li>
        <li onClick={()=>{setaddress("project")}} 
        
        >
           <Link to="/project"  className={address==="project" ? ("active"):("not-active")}>Projects</Link>
        </li>
        <li onClick={()=>{setaddress("cv")}}
        
        >
           <Link to="/cv"  className={address==="cv" ? ("active"):("not-active")}>Cv</Link>
        </li>
    </ul>
   </nav>
   </>
  )
}

export default Navbar