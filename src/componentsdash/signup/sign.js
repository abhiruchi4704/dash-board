
 import {AccountBox} from "../accountBox/Index.jsx"


import React from 'react'
import { Bdiv, Container, Lt, Rt,Sig, Signs } from './sign.styles'

function Sign() {
  return (
    <>
    <Container>
    <Lt>
        <Bdiv>
            
                Board.
            
        </Bdiv>
    </Lt>
    <Rt>
        
        <AccountBox>

        </AccountBox>
    </Rt>
    </Container>
    </>
  )
}

export default Sign

