import React from 'react';
import TagsList from './TagsList';
import RecipesList from './RecipesList';
import { graphql, useStaticQuery } from 'gatsby';

const query = graphql`
  {
    allContentfulRecipe {
      nodes {
        id
        prepTime
        servings
        title
        cookTime
        image {
          gatsbyImageData
        }
        content {
          tags
        }
      }
    }
  }
`;

const AllRecipes = () => {
  const { allContentfulRecipe } = useStaticQuery(query);
  const recipes = allContentfulRecipe.nodes;

  return (
    <section className="recipes-container">
      <TagsList recipes={recipes} />
      <RecipesList recipes={recipes} />
    </section>
  );
};

export default AllRecipes;
