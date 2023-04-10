import React, { useContext } from "react";
 import { useNavigate} from "react-router-dom";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
  HeaderTextDown,
  BoldLinkf,
} from "./common";

import { AccountContext } from "./accountContext";


export function LoginForm(props) {
  const { switchToSignup } = useContext(AccountContext);
  const navigate = useNavigate(); // get the history object from useHistory hook

  const handleSignIn = (e) => {
    // e.preventDefault();
    // do your login logic here
    
    // navigate to the new page
    navigate('/dashboard3'); // replace `/dashboard` with the path of your new component
  }

return (
    <BoxContainer>
      <FormContainer onSubmit={handleSignIn} >
        <HeaderTextDown>Email address</HeaderTextDown>
        <Input type="email" required />
        <HeaderTextDown>Password</HeaderTextDown>
        <Input type="password" required />
     
      <BoldLinkf href="#">Forget your password?</BoldLinkf>
      
      <SubmitButton type="submit" >Sign in</SubmitButton>
      
      </FormContainer>
      
      <MutedLink href="#">
        Don't have an account?{" "}
        <BoldLink href="#" onClick={switchToSignup}>
          Register here
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}