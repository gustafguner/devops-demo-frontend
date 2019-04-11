import * as React from 'react';
import SEO from '../components/seo';
import Layout from '../components/layout';
import { ContentWrapper } from '../components/blocks';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <ContentWrapper>
      <h2>A blog post</h2>
      <p>Lorem</p>
    </ContentWrapper>
  </Layout>
);

export default IndexPage;
