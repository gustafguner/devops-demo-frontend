import * as React from 'react';
import styled from 'styled-components';
import { colors } from '../styles';
import { ContentWrapper } from './blocks';
import { Link } from 'gatsby';

const Container = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  align-items: center;
`;

const Logo = styled.div`
  color: ${colors.BLACK};
  font-size: 1.5rem;
`;

const LogoLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const Header = () => (
  <Container>
    <ContentWrapper>
      <Logo>
        <LogoLink to="/">
          <h1>Static Blog</h1>
        </LogoLink>
      </Logo>
    </ContentWrapper>
  </Container>
);

export default Header;
