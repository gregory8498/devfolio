module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://gregoryaburgess.com`,
    // Your Name
    name: 'Gregory A. Burgess',
    // Main Site Title
    title: `Gregory A. Burgess | Nuclear Submarine Officer`,
    // Description that goes under your name in main bio
    description: `Naval Officer currently stationed on the USS Charlotte (SSN 766) in Pearl Harbor, HI.`,
    // Optional: Twitter account handle
    author: `@gregburgess84`,
    // Optional: Github account URL
    github: `https://github.com/gregory8498`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/gregory-burgess/`,
    // Content of the About Me section
    about: `LT in the US Navy currently assigned to the USS Charlotte (SSN 766) in Pearl Harbor HI.  Studied Robotics and Controls Engineering at the US Naval Academy and commissioned as a Submarine Warfare Officer in 2020. Studied Applied Ocean Science and Engineering in the MIT-WHOI Joint Program.`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'Mia Kalt\'s Boyfriend',
        description:
          'An extremely important duty dedicated to the most lovely human being on the planet',
        link: 'https://www.miakalt.com/',
      },
      {
        name: 'Devfolio',
        description:
          'A zero-config and blazing fast personal site + blog built with GatsbyJs and TailwindCSS',
        link: 'https://github.com/RyanFitzgerald/devfolio',
      },
      {
        name: 'ChromeExtensionKit',
        description:
          'Kit to jump-start your Chrome extension projects with a variety of battle-tested starter templates',
        link: 'https://chromeextensionkit.com/?ref=devfolio',
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'US Navy',
        description: 'Submarine Officer, September 2022  - Present',
        link: 'https://github.com/RyanFitzgerald/devfolio',
      },
      {
        name: 'Massachusett\s Institute of Technology',
        description: 'Graduate Student, May 2020 - Sep 2022',
        link: 'https://github.com/RyanFitzgerald/devfolio',
      },
      {
        name: 'Wood\s Hole Oceanographic Institution',
        description: 'Graduate Student, May 2020 - Sep 2022',
        link: 'https://github.com/RyanFitzgerald/devfolio',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages & Frameworks',
        description:
          'JavaScript (ES6+), Golang, Node.js, Express.js, React, Ruby on Rails, PHP',
      },
      {
        name: 'Databases',
        description: 'MongoDB, PostreSQL, MySQL',
      },
      {
        name: 'Other',
        description:
          'Docker, Amazon Web Services (AWS), CI / CD, Microservices, API design, Agile / Scrum',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
