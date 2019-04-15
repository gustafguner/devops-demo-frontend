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
  display: flex;
  justify-content: space-between;
`;

const LogoLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const BackendStatus = styled.div``;

const getData = async () => {
  const data = await fetch('http://localhost:8000');
  return data;
};

const Header = () => {
  const [backendVersion, setBackendVersion]: any = React.useState(null);
  React.useEffect(() => {
    fetch('http://backend/version')
      .then((result: any) => {
        setBackendVersion(result.version);
      })
      .catch((error: any) => {
        console.error('Error fetching backend version', error);
      });
  }, []);

  return (
    <Container>
      <ContentWrapper>
        <Logo>
          <LogoLink to="/">
            <h1>Static Blog</h1>
          </LogoLink>
          <BackendStatus>
            {backendVersion !== null
              ? backendVersion
              : 'Unknown backend version'}
          </BackendStatus>
        </Logo>
      </ContentWrapper>
    </Container>
  );
};

export default Header;
