import React from 'react';
import { graphql, Link } from 'gatsby';
import setupTags from '../utils/setupTags';
import Layout from '../components/Layout';
import slugify from 'slugify';
import SEO from '../components/SEO';

export const query = graphql`
  {
    allContentfulRecipe {
      nodes {
        content {
          tags
        }
      }
    }
  }
`;

const Tags = ({ data }) => {
  const newTags = setupTags(data?.allContentfulRecipe?.nodes);
  return (
    <Layout>
      <SEO title="Tags" />
      <main className="page">
        <section className="tags-page">
          {newTags.map((tag, index) => {
            const [text, value] = tag;
            const tagSlug = slugify(text, { lower: true });

            return (
              <Link to={`/tags/${tagSlug}`} key={index} className="tag">
                <h5>{text}</h5>
                <p>{value} recipe</p>
              </Link>
            );
          })}
        </section>
      </main>
    </Layout>
  );
};

export default Tags;
