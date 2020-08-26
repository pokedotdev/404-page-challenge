import React from 'react';
import styled from '@emotion/styled'

const Wrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1440px;
  padding: 40px 77px;
  display: grid;
  min-height: calc(100vh);
  align-content: space-between;
  /* background: #f1f1f1 */

  @media (max-width: 768px) {
    padding: 20px 24px;
  }
`

const Container = ({children}) => {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  );
}
 
export default Container;