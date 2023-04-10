import React from 'react';
import './dashboard3.css';
import DPieChart from "./Charts/DPieChart";

import styled from 'styled-components';
import VerticalBarChart from './Charts/VerticalBarChart';

import { GiProgression, GiProfit } from "react-icons/gi";
import { BsFillCartCheckFill} from "react-icons/bs"
import { HiUsers } from "react-icons/hi";

import Sidebar from  "./Components/Sidebar";
import Navbar from "./Components/Navbar2";

export const Container2 = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background: #DDDDDD;

`;

export const Lt2 = styled.div`
  position: relative;
  display: flex;
  flex: 1;
  background: #000000;
  justify-content: flex-start;
  align-items: center;
  padding: 0 30px;
  flex-direction: column;
  border-radius: 30px;
    margin: 35px;
  
  @media (max-width: 991px) {
    flex: 3;
    flex-direction: column;
    justify-content: center;
    padding: 0px;
  }
`;

export const Rt2 = styled.div`
  position: relative;
  display: flex;
  flex: 5;
  background: #DDDDDD;
  justify-content: flex-start;
  align-items: center;
  flex-direction:column;
  padding: 0 0px;
  gap:40px;
  margin-top: 40px;
  
  @media (max-width: 991px) {
    flex: 6;
    flex-direction: column;
    justify-content: flex-start;
    padding: 0px;
  }
`;

export const Bdiv2 = styled.h1`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 72px;
  line-height: 88px;
  color: #FFFFFF;

  @media (max-width: 991px) {
    font-size: 48px;
    line-height: 60px;
  }
`;


function Dashboard3() {
  return (
    <Container2>
    <Lt2>
        
            
        <Sidebar />   
            
        
    </Lt2>
    <Rt2>
    <div class="main-container ">
      <div class="container n ">
      <div style={{fontSize:'20px',fontWeight: 'bold'}}>Dashboard</div>
      </div>
      <div class="container n">
      <Navbar />
      </div>
    
    </div>

    <div class="main-container">
    

    <div class="container card1">
    <div class="containerIcon">
    <div> <GiProgression /></div>
    </div>
    <div>Total Revenues</div>
    <h1>$2,43,13</h1>
    
    </div>

    <div class="container card2">
    <div class="containerIcon">
    <div><BsFillCartCheckFill /></div>
    </div>
    <div>Total Transactions</div>
    <h1>$1,520</h1>
    
    </div>

    <div class="container card3">
    <div class="containerIcon">
    <div> <GiProfit /></div>
    </div>
    <div>Total Likes</div>
    <h1>$9,721</h1>
    
    </div>

    <div class="container card4">
    <div class="containerIcon">
    <div> <HiUsers /></div>
    </div>
    <div>Total Users</div>
    <h1>865</h1>
    
    </div>

    </div>


    <div class="main-container">
    <div class="containerx">
    <h2 style={{fontWeight: 'bold'}}>Activities</h2> 
    <div className='asdf'><VerticalBarChart /></div>
    <div >
    
    </div>
    </div>

    </div>


    <div class="main-container">
    <div class="containerx">
    <h3>Top Products</h3>
    <div class="side-by-side">
   
      <DPieChart/>
      
    </div>
    
  </div>
  <div class="containerx c2 ">
    <h3 style={{fontWeight: 'bold'}}>Today's Schedule</h3>
    <div class="side-by-side text">
      <div class="line1"></div>
      <div>Meeting with XYZ Companies Private Limited<br></br>
      12:00-13:00<br></br>
      at Bangalore</div>
    </div>
    <div class="side-by-side text">
      <div class="line2"></div>
      <div>Meeting with KLM Companies Private Limited<br></br>
      12:00-13:00<br></br>
      at Delhi</div>
    </div>
    <div class="side-by-side text">
      <div class="line1"></div>
      <div>Meeting with ABC Companies Private Limited<br></br>
      16:00-17:00<br></br>
      at Pune</div>
    </div>
    
  </div>
  </div>
        
    </Rt2>
    </Container2>
    
  )
}

export default Dashboard3
