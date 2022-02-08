module.exports = {
    siteMetadata: {
      title: `Test-rick`,
        siteUrl: `https://www.yourdomain.tld`,
    },
    plugins: [
        'gatsby-plugin-postcss',
        {
            resolve: 'gatsby-plugin-apollo',
            options: {
                uri: 'https://rickandmortyapi.com/graphql'
            }
        }
        // ...
    ],
}