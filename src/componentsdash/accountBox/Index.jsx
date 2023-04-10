import React from 'react';
import styled from "styled-components"

import { useState } from 'react';

import { LoginForm } from './loginForm';
import { AccountContext } from './accountContext';
import { SignupForm } from './signUp';

import SignIn from '../googleSign/signinwithgoogle';

// const BoxContainer = styled.div`
//   width: 952px;
//   min-height: 100vh;
//   display: flex;
//   flex-direction: column;
//   border-radius: 19px;
//   background-color: #F5F5F5;
//   box-shadow: 0 0 2px rgba(15, 15, 15, 0.28);
//   position: relative;
//   overflow: hidden;
//   box-sizing: border-box;

// `;


const BoxContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  border-radius: 19px;
  background-color: #F5F5F5;
  box-shadow: 0 0 2px rgba(15, 15, 15, 0.28);
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
`;

// const TopContainer = styled.div`
//   width: 100%;
// //   height: 250px;
// height: 227px;
//   display: flex;
//   flex-direction: column;
//   justify-content: flex-end;
//   padding: 0px 12em 1em;
//   padding-bottom: 2em;
//   box-sizing: border-box;
// `;


const TopContainer = styled.div`
  width: 100%;
  height: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0px 1em 1em;
  padding-bottom: 2em;
  box-sizing: border-box;
  align-items: center;

  @media (min-width: 768px) {
    height: 227px;
    // padding: 0px 12em 1em;
  }
`;


// const HeaderContainer = styled.div`
// margin-left:18%;  
// width: 100%;
//   display: flex;
//   flex-direction: column;
//   box-sizing: border-box;
// `;
const HeaderContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;

  @media (min-width: 768px) {
    align-items: flex-start;
    width: 40%;
  }
`;


const HeaderText = styled.h2`
  font-family: 'Montserrat';
  font-style: normal;  
  font-size: 28px;
  font-weight: 800;
  line-height: 1.24;
  color: rgb(17 16 16);
  z-index: 10;
  margin: 0;
  margin-top: 1em;
  margin-bottom: 0.5em;
  text-align: center;
  box-sizing: border-box;

  @media (min-width: 768px) {
    font-size: 36px;
    margin-top: 0;
    margin-bottom: 0;
    text-align: left;
  }
`;

// const SmallText = styled.h5`
// font-family: 'Lato';
// font-style: normal;
//   color: rgb(17 16 16);
//   font-weight: 500;
//   font-size: 11px;
//   z-index: 10;
//   margin: 0;
//   margin-top: 7px;
//   margin-bottom:7px;
//   box-sizing: border-box;
// `;

const SmallText = styled.h5`
  font-family: 'Lato';
  font-style: normal;
  color: rgb(17 16 16);
  font-weight: 500;
  font-size: 10px;
  z-index: 10;
  margin: 0;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
  text-align: center;
  box-sizing: border-box;

  @media (min-width: 768px) {
    font-size: 11px;
    margin-top: 7px;
    margin-bottom: 7px;
    text-align: left;
   
`;

const InnerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 1.8em;
  box-sizing: border-box;
`;



export function AccountBox() { 
  
    const [active, setActive] = useState("signin");
  
    const switchToSignup = () => {
      setTimeout(() => {
        setActive("signup");
      }, 400);
    };
  
    const switchToSignin = () => {
      setTimeout(() => {
        setActive("signin");
      }, 400);
    };
   
    
  const contextValue = { switchToSignup, switchToSignin };

  return (
    
    <AccountContext.Provider value={contextValue}>
    <BoxContainer>
      <InnerContainer>
        <TopContainer>
        {active === "signin" && (
            <HeaderContainer>
              <HeaderText>Sign in</HeaderText>
              <SmallText>Sign in to your account</SmallText>
              <SignIn></SignIn>
            </HeaderContainer>
          )}
          {active === "signup" && (
            <HeaderContainer>
              <HeaderText>Create</HeaderText>
              <HeaderText>Account</HeaderText>
              <SmallText>Please sign-up to continue!</SmallText>
            </HeaderContainer>
          )}
        </TopContainer>
        </InnerContainer>
        <InnerContainer>
          {active === "signin" && <LoginForm />}
          {active === "signup" && <SignupForm />}
        </InnerContainer>
    </BoxContainer>
    </AccountContext.Provider>
  )
}



