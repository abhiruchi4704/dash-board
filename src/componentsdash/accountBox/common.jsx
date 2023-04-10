import styled from "styled-components";

export const BoxContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;

  @media (max-width: 768px) {
    margin-top: 0px;
  }
`;

export const FormContainer = styled.form`
  width: 40%;
  display: flex;
  // justify-content:center;
background: #FFFFFF;
  flex-direction: column;
  box-shadow: 0px 0px 2.5px rgba(15, 15, 15, 0.19);
//   box-sizing:border-box
border-radius: 20px;

@media (max-width: 768px) {
  width: 100%;
}
`;

export const MutedLink = styled.a`
  font-size: 16px;
  font-family: 'Lato';
font-style: normal;
  color:#858585;
  font-weight: 500;
  text-decoration: none;
  margin-top: 30px;

`;

export const BoldLink = styled.a`
  font-size: 16px;
  font-family: 'Lato';
font-style: normal;
  color: #346BD4;
  font-weight: 500;
  text-decoration: none;
  margin: 10px 4px;
  margin-left:0px;
`;

export const BoldLinkf = styled.a`
  font-size: 11px;
  color: #346BD4;
  font-weight: 500;
  text-decoration: none;
  margin: 10px 4px;
  margin-left:31px;
  margin-bottom:14px;
`;

export const Input = styled.input`
  width: 78%;
  height: 42px;
  margin-left:28px;
  // margin-right:60px;
  outline: none;
  border: 1px solid rgba(200, 200, 200, 0.3);
  padding: 0px 10px;
  border-bottom: 1.4px solid transparent;
  transition: all 200ms ease-in-out;
  font-size: 12px;
  &::placeholder {
    color: rgba(200, 200, 200, 1);
  }
  &:not(:last-of-type) {
    border-bottom: 1.5px solid rgba(200, 200, 200, 0.4);
  }
  &:focus {
    outline: none;
    border-bottom: 2px solid rgb(241, 196, 15);
  }
  background: #F5F5F5;
  // margin-top: 00px;
  // margin-top:0px;
border-radius: 10px;
margin-bottom: 3px;

`;

export const SubmitButton = styled.button`
  width: 83%;
  margin-left:30px;
  padding: 10px 12%;
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  border: none;
  border-radius: 10px;
  // alignItems: 'center';
  cursor: pointer;
  transition: all, 240ms ease-in-out;
  background: rgb(241, 196, 15);
  background: rgb(0, 0, 0);
  );
  &:hover {
    filter: brightness(1.03);
  }
  
  margin-top: 20px;
  margin-bottom: 40px;
  display:flex;
  justify-content: center;
    align-items: center;
`;
export const HeaderTextDown = styled.h5`

font-family: 'Lato';
font-style: normal;
font-size: 16px;
// line-height: 19px;
  font-weight: 600;
  line-height: 1.24;
  color: rgb(17 16 16);
  z-index: 10;
  box-sizing: border-box;
  margin-top: 14px;
    margin-left: 30px;
    margin-bottom: 1px;
`;