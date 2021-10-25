/*
contentful 
cosmic 
dato cms
sanity
shopify
agility
contentstack
drupal
flotiq
graphcms
kontent
strapi
wordpress
buttercms
prismic
Not using any of the above? This POST endpoint should be triggered on any content change so your Preview is consistent with the state of your CMS, automatically!
https://webhook.gatsbyjs.com/hooks/data_source/3544bd31-24e2-461d-8453-3a6179b0bc7a
*/
module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "gatsby-test",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "G-38LS783923",
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
