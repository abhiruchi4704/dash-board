import React, { useContext } from "react";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
  HeaderTextDown
} from "./common";
//  import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";

export function SignupForm(props) {
  const { switchToSignin } = useContext(AccountContext);

  return (
    <BoxContainer>
      <FormContainer>
      <HeaderTextDown>Full Name</HeaderTextDown>
        <Input type="text"/>
        <HeaderTextDown>Email</HeaderTextDown>
        <Input type="email" />
        <HeaderTextDown>Password</HeaderTextDown>
        <Input type="password" />
        <HeaderTextDown>Confirm Passsword</HeaderTextDown>
        <Input type="password"  />
        <SubmitButton type="submit">Signup</SubmitButton>
      </FormContainer>
     
      <MutedLink href="#">
        Already have an account?
        <BoldLink href="#" onClick={switchToSignin}>
          Signin
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}