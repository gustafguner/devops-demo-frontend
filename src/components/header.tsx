import * as React from 'react';
import styled from 'styled-components';
import { colors } from '../styles';

const Container = styled.div`
  width: 100%;
  height: 80px;
  background-color: ${colors.WHITE};
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.05);
`;

const Header = () => <Container>Hej</Container>;

export default Header;
