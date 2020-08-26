import React from 'react';
import Header from './Header'
import Footer from './Footer'
import Container from './Container'

const Layout = ({children}) => {
  return ( 
    <div className="App">
      <Container>
        <Header/>
        {children}
        <Footer/>
      </Container>
    </div>
  );
}
 
export default Layout