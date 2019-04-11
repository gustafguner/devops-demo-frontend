import * as React from 'react';
import { colors } from '../styles';
import styled, { createGlobalStyle } from 'styled-components';
import Header from './header';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    font-family: Source Sans Pro, sans-serif;
    font-size: 16px;
    line-height: 1.5;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    margin: 0;
    padding: 0;
    background-color: ${colors.WHITE};
  }

  img {
    max-width: 100%;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: Playfair Display, serif;
    margin: 1.5rem 0 0.5rem;
    font-kerning: none;
  }

  h1 {
    margin-top: 0;
    font-size: 3rem;
  }

  h2 {
    font-size: 2rem;
  }

  h3 {
    font-size: 1.25rem;
  }

  h4 {
    font-size: 1rem;
  }
`;

const Wrapper = styled.div`
  width: 100%;
`;

const Layout: React.FC<{}> = ({ children }) => (
  <Wrapper>
    <GlobalStyles />
    <Header />
    {children}
  </Wrapper>
);

export default Layout;
