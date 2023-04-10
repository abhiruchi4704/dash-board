import React from 'react';
import "./Navbar2.css";
import { MdNotificationsNone } from 'react-icons/md';
import { FiSearch } from 'react-icons/fi';
import { BiMessageRoundedDetail } from 'react-icons/bi';
import { menuItems } from '../data/dummy';
import avatar from "../data/avatar.png";



const Navbar = () => {
  return (
    <div class="nav-containerr">
      <div className="search">
      <div style={{fontSize:'20px'}}>Search...</div>               
      <FiSearch className='nav-icon' />
      </div>
      <div style={{fontSize:'30px'}}><MdNotificationsNone  /></div>
      <div class="avatara">
      <img src={avatar} alt="avatar" class="image" />
      </div>
      
     
      </div>
  )
}

export default Navbar