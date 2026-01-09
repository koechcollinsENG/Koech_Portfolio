import  { useState } from 'react';
import './NavBar.css';
import logo from '../../assets/removeB.png';
import Contact from '../../assets/contact.png'; 
import Mphoto from '../../assets/open-menu.png';
import { Link } from "react-scroll";
const NavBar = () => {
  const [showMenu, setShowMenu]=useState(false);
  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className="logo" />    
      <div className="desktopMenus">
        <Link activeClass='active' to="About" spy={true} smooth={true}  offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
        <Link activeClass='active' to="Myskills" spy={true} smooth={true}  offset={-50} duration={500} className="desktopMenuListItem">About</Link>
        <Link activeClass='active' to="projD" spy={true} smooth={true}  offset={-49} duration={500} className="desktopMenuListItem">Projects</Link>
        <Link activeClass='active' to="contactP" spy={true} smooth={true}  offset={-45} duration={500} className="desktopMenuListItem">Clients</Link>
      </div>
      <button className="desktopMenuBtn" onClick={()=>
      {document.getElementById('inguireF')?.scrollIntoView({behavior:'smooth'})}  
      }><img src={Contact} alt="Logo" className="logoBtn" />
        Contact Me
      </button>
    <img src={Mphoto} alt="" className="Mobmenu" onClick={()=>setShowMenu(!showMenu)}/>
         <div className="navMenu" style={{display:showMenu? 'flex':'none'}}>
        <Link activeClass='active' to="About" spy={true} smooth={true}  offset={-100} duration={500} className="ListItem" onClick={()=>setShowMenu(false)}>Home</Link>
        <Link activeClass='active' to="Myskills" spy={true} smooth={true}  offset={-50} duration={500} className="ListItem" onClick={()=>setShowMenu(false)}>About</Link>
        <Link activeClass='active' to="projD" spy={true} smooth={true}  offset={-49} duration={500} className="ListItem" onClick={()=>setShowMenu(false)}>Projects</Link>
        <Link activeClass='active' to="contactP" spy={true} smooth={true}  offset={-45} duration={500} className="ListItem" onClick={()=>setShowMenu(false)}>Clients</Link>
        <Link activeClass='active' to="inguireF" spy={true} smooth={true}  offset={-45} duration={500} className="ListItem" onClick={()=>setShowMenu(false)}>Contact</Link>
      </div>

    </nav>
  );
}

export default NavBar;