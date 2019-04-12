import * as React from 'react';
import { graphql } from 'gatsby';
import { ContentWrapper } from '../components/blocks';
import Layout from '../components/layout';

const BlogPost = ({ data }: any) => {
  const post = data.markdownRemark;
  return (
    <Layout>
      <ContentWrapper>
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </ContentWrapper>
    </Layout>
  );
};

export default BlogPost;

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
