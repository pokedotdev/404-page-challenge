import React from 'react';
import styled from '@emotion/styled'

const Wrapper = styled.footer`
  display: flex;
  justify-content: center;

  a {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    text-decoration: none;
    color: #333333;
  }
`

const Footer = () => {
  return ( 
    <Wrapper>
      <a href="https://portfolio.devchallenges.io/arturo-enriquez">@arturo-enriquez DevChallenges.io</a>
    </Wrapper>
  );
}
 
export default Footer;