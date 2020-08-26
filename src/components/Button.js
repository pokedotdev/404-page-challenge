import React from 'react';
import styled from '@emotion/styled'

const Wrapper = styled.button`
  font-family: 'Space Mono';
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.035em;
  color: white;
  background: #333;
  padding: 24px 43px;
  cursor: pointer;
`

const Button = ({children}) => {
  return ( 
    <Wrapper>
      {children}
    </Wrapper>
  );
}
 
export default Button;