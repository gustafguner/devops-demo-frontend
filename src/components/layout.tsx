import * as React from 'react';
import { colors } from '../styles';
import styled, { createGlobalStyle } from 'styled-components';
import Header from './header';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    font-size: 16px;
    line-height: 1.5;
    margin: 0;
    padding: 0;
    background-color: ${colors.WHITE_OFF};
  }

  img {
    max-width: 100%;
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
