import React from 'react'

import Sign from './componentsdash/signup/sign'
import { Routes, Route } from "react-router-dom"
import './App.css';

import Transactions from "./Components/Transactions";
import Schedules from "./Components/Schedules";
import Settings from "./Components/Settings";
import Users from "./Components/Users";
import Dashboard3 from './dashboard3';


import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Montserrat';
    font-style: normal;
  }
`;

function App() {
  return (
    <>
    <GlobalStyle />
     
  <Routes>
  <Route path='/' exact element={(<Sign />)} />
<Route path='/dashboard3' exact element={(<Dashboard3 />)} />
<Route path='/Transactions' element={(<Transactions />)} />
<Route path='/Schedules'  element={(<Schedules />)} />
<Route path='/Users'  element={(<Users />)} />
<Route path='/Settings'  element={(<Settings />)} />


</Routes>
     

     

    </>
  )
}

export default App
