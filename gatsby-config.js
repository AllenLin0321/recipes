module.exports = {
    siteMetadata: {
        title: "Simply Recipes",
        description: "Nice and clean recipes site",
        author: "@allen",
        person: {
            name: "allen",
            age: 18,
        },
        simpleData: ["item 1", "item 2"],
        complexData: [
            {
                name: "allen",
                age: 18,
            },
            {
                name: "alen",
                age: 19,
            },
            {
                name: "elan",
                age: 20,
            },
        ],
    },
    plugins: [
        "gatsby-plugin-sass",
        `gatsby-plugin-image`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`, // Needed for dynamic images
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/assets/images`,
            },
        },
    ],
};
