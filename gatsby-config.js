module.exports = {
  siteMetadata: {
    title: `Valentina`,
    subtitle: `Front-end Software Engineer & Designer`,
    description: `A custom portfolio/blog built with Gatsbyjs.`,
    author: `@vale-c`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/data`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-copy-linked-files`,
            options: {
              ignoreFileExtensions: [],
            },
          },
          `gatsby-remark-reading-time`,
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              aliases: { sh: 'bash', js: 'javascript' },
              showLineNumbers: true,
            },
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 590,
            },
            resolve: `gatsby-remark-classes`,
            options: {
              classMap: {
                'heading[depth=1]': 'text-2xl',
                'heading[depth=2]': 'text-xl',
                paragraph: 'text-base',
              },
            },
          },
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_self',
              rel: 'nofollow',
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        display: `minimal-ui`,
        icon: `src/assets/images/favico.svg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        headers: {
          '/*': ['Strict-Transport-Security: max-age=63072000'],
        }, // option to add more headers. `Link` headers are transformed by the below criteria
        allPageHeaders: [], // option to add headers for all pages. `Link` headers are transformed by the below criteria
        mergeSecurityHeaders: true, // boolean to turn off the default security headers
        mergeLinkHeaders: true, // boolean to turn off the default gatsby js headers
        mergeCachingHeaders: true, // boolean to turn off the default caching headers
        transformHeaders: (headers, path) => headers, // optional transform for manipulating headers under each path (e.g.sorting), etc.
        generateMatchPathRewrites: true, // boolean to turn off automatic creation of redirect rules for client only paths
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-tailwindcss`,
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require(`tailwindcss`)],
      },
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        tailwind: true,
        printRejected: false,
        develop: false,
        purgeOnly: [`src/styles/tailwind.css`],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
