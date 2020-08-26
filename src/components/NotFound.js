import React from 'react';
import styled from '@emotion/styled';
import Button from './Button'

import ImageScarecrow from '../assets/img/Scarecrow.png'

const Main = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 120px;
`;

const Info = styled.div`
  h2 {
    font-family: 'Space Mono';
    font-style: normal;
    font-weight: bold;
    font-size: 64px;
    line-height: 95px;
    letter-spacing: -0.035em;
    color: #333333; 
    margin: 0 0 36px 0;
  }

  p {
    display: block;
    width: 65%;
    font-family: 'Space Mono';
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 36px;
    letter-spacing: -0.035em;
    color: #4F4F4F;
    margin: 0 0 64px 0;
  }
`

const Image = styled.img`
  max-width: 540px;
`

const NotFound = () => {
  return (
    <Main>
      <div>
        <Image src={ImageScarecrow} alt=""/>
      </div>
      <Info>
        <h2>I have bad news for you</h2>
        <p>The page you are looking for might be removed or is temporarily unavailable</p>
        <Button>BACK TO HOMEPAGE</Button>
      </Info>
    </Main>
  );
}
 
export default NotFound;