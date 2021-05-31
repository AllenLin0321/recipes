import React from 'react';
import Layout from '../components/Layout';
import { StaticImage } from 'gatsby-plugin-image';
import { Link, graphql } from 'gatsby';
import RecipesList from '../components/RecipesList';
import SEO from '../components/SEO';

const AboutImage = '../assets/images/about.jpeg';

export const query = graphql`
  {
    allContentfulRecipe(filter: { feature: { eq: true } }, sort: { fields: title, order: ASC }) {
      nodes {
        id
        prepTime
        title
        cookTime
        image {
          gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
        }
      }
    }
  }
`;

const About = ({ data }) => {
  const { nodes: recipes } = data.allContentfulRecipe;
  return (
    <Layout>
      <SEO title="About" />
      <main className="page">
        <section className="about-page">
          <article>
            <h2>I'm baby coloring book poke taxidermy</h2>
            <p>
              Taxidermy forage glossier letterpress heirloom before they sold out you probably haven't heard of them
              banh mi biodiesel chia.
            </p>
            <p>Taiyaki tumblr flexitarian jean shorts brunch, aesthetic salvia retro.</p>
            <Link to="/contact" className="btn">
              contact
            </Link>
          </article>
          <StaticImage src={AboutImage} alt="Person Pouring Salt in Bowl" className="about-img" placeholder="blurred" />
        </section>
        <section className="featured-recipes">
          <h5>Loo k at this Awesomesauce!</h5>
          <RecipesList recipes={recipes} />
        </section>
      </main>
    </Layout>
  );
};

export default About;
