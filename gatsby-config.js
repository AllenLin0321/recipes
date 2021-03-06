require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: 'Simply Recipes',
    description: 'Nice and clean recipes site',
    author: '@allen',
    person: {
      name: 'allen',
      age: 18,
    },
    simpleData: ['item 1', 'item 2'],
    complexData: [
      {
        name: 'allen',
        age: 18,
      },
      {
        name: 'alen',
        age: 19,
      },
      {
        name: 'elan',
        age: 20,
      },
    ],
  },
  plugins: [
    'gatsby-plugin-sass',
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `oqg5dyj5duab`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: 'Montserrat',
              variants: ['400'],
            },
            {
              family: 'Inconsolata',
              variants: ['400', '500', '600', '700'],
            },
          ],
        },
      },
    },
  ],
};
