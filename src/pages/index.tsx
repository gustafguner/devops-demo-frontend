import * as React from 'react';
import SEO from '../components/seo';
import Layout from '../components/layout';
import { ContentWrapper } from '../components/blocks';
import { graphql, Link } from 'gatsby';

const IndexPage = ({ data }: any) => (
  <Layout>
    <SEO title="Home" />
    <ContentWrapper>
      <h3>
        {data.allMarkdownRemark.totalCount} Post
        {data.allMarkdownRemark.totalCount !== 1 ? 's' : ''}
      </h3>
      {data.allMarkdownRemark.edges.map(({ node }: any) => (
        <div key={node.id}>
          <Link to={node.fields.slug}>
            <h2>
              {node.frontmatter.title} <span>— {node.frontmatter.date}</span>
            </h2>
            <p>{node.excerpt}</p>
          </Link>
        </div>
      ))}
    </ContentWrapper>
  </Layout>
);

export default IndexPage;

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`;
