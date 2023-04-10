

import React, { useEffect, useState } from "react";
import { auth, provider } from "./config";
import { signInWithPopup } from "firebase/auth";
import styled from "styled-components";
import { FaGoogle } from 'react-icons/fa';
import { FaApple } from 'react-icons/fa';
import Home from "./Home";
// import Dashboard2 from "../../dashboard2";

import { useNavigate } from "react-router-dom";

const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const Icon1 = styled(FaGoogle)`
 color: #333;
font-size: 0.8rem;
`;
export const Icon2 = styled(FaApple)`
 color: #333;
font-size:0.81rem;
`;

const Googlebutton = styled.button`
  width: 50%;
  color: #858585;
  font-family: 'Montserrat';
  font-style: normal;
  font-size: 13px;
  font-weight: 600;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: all, 240ms ease-in-out;
  background: #FFFFFF;
  padding-bottom: 0.3rem;
  padding-top: 0.3rem;
  
  &:hover {
    filter: brightness(1.03);
  }
  
  .icon {
    margin-right: 5px;
  }
//   .icong {
//     margin-right: 500px;
//   }
margin-right:12px;

`;

function SignIn() {
  const [value, setValue] = useState('');

  const navigate = useNavigate();

  const handleGoogleClick = () => {
    signInWithPopup(auth, provider).then((data) => {
      setValue(data.user.email)
      localStorage.setItem("email", data.user.email)

      navigate('/dashboard3');

    })
  }

  

  useEffect(() => {
    setValue(localStorage.getItem('email'))
  }, []);

  return (
    <ButtonContainer>
      {/* {value ? <Home/> : */}
       <> <Googlebutton className="icong" onClick={handleGoogleClick}>
          <Icon1 className="icon"  /> 
          Sign in With Google
        </Googlebutton>
        <Googlebutton onClick={handleGoogleClick}>
        <Icon2 className="icon"  /> 
        Sign in With Apple
      </Googlebutton></>
      {/* } */}
    </ButtonContainer>
  );
}

export default SignIn;
