module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://gregoryaburgess.com`,
    // Your Name
    name: 'Gregory A. Burgess',
    // Main Site Title
    title: `Gregory A. Burgess | Submarine Officer`,
    // Description that goes under your name in main bio
    description: `LT in the US Navy currently assigned to the USS Charlotte (SSN 766) in Pearl Harbor HI. 
                  Studied Robotics and Controls Science Engineering at the United States Naval Academy and commissioned as a Submarine Warfare 
                  Officer in 2020. Studied Applied Ocean Science and Engineering in the MIT-WHOI Joint Program.`,
    // Optional: Twitter account handle
    //author: `@rfitzio`,
    // Optional: Github account URL
    github: `https://github.com/gregory8498`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/gregory-burgess/`,
    // Optional: CV PDF URL (place the PDF in the `static/` folder to serve at the site root)
    cv: `/cv.pdf`,
    // Content of the About Me section
    about: `Gregory A. Burgess (LT) received the M.S. in Mechanical Engineering from the Massachusetts Institute of Technology and 
            Woods Hole Oceanographic Institution in 2022. LT Burgess also received his B.S. in Robotics and Controls Science Engineering at 
            the United States Naval Academy in 2020. He is currently serving as a Submarine Officer in Pearl Harbor, HI. His research 
            focuses on improving the sensing and navigational capabilities of autonomous underwater vehicles. `,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'An Autonomous Underwater Glider with Improved Onboard Navigation for Unattended Mapping',
        description: 'Georeferenced subsurface survey is primarily conducted by autonomous underwater vehicles and remotely operated vehicles that require power-intensive navigation suites, acoustic beacons, and surface support vessels with attendant operations teams onboard. The significant infrastructure required to operate vehicles conducting surveys in remote regions (e.g., under ice) poses increased challenges and remains prohibitively costly, leading to sparse coverage. Unattended operations using autonomous underwater gliders (AUGs) with low power, high-resolution onboard navigation holds promise in scaling up coverage while significantly reducing the operational costs of georeferenced surveys. In this article, we present a modified AUG equipped with a low power embedded navigation process and results of unattended sonar acoustic surveys using this experimental platform.',
        link: 'https://ieeexplore.ieee.org/document/10980064',
      },
      {
        name: 'An Autonomous Underwater Glider With Improved Transport Efficiency',
        description:
          'In this article, we present the design and test results of an autonomous underwater glider: Enhanced Propulsion Integrated Capability—Deep Autonomous Underwater Glider. This modified Slocum glider uses redesigned lifting surfaces and hybrid propulsion that are optimized for efficient operation in confined depth bands, deep water profiling, and adverse currents. Modeling suggests a maximum through-water velocity approaching 2 m/s and a theoretical maximum range up to 7000 km when equipped with a commercially available Li-ion rechargeable battery pack. Results indicate more than 30% improvement in glide efficiency and demonstrate the ability of this vehicle to operate equally well within ice-covered coastal regions and the deep ocean. These capabilities, combined with an improved navigation process, permit long-range and shore-launched missions with energy-intensive payloads.',
        link: 'https://ieeexplore.ieee.org/document/11072729',
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'Naval Officer, LT',
        description: 'Submarine Officer, USS Charlotte (SSN 766), Pearl Harbor, HI, September 2022  - Present',
        link: 'https://www.linkedin.com/in/gregory-burgess/',
      },
      {
        name: 'Massachusett\s Institute of Technology',
        description: 'Graduate Student, May 2020 - Sep 2022',
        link: 'https://www.linkedin.com/in/gregory-burgess/',
      },
      {
        name: 'Wood\s Hole Oceanographic Institution',
        description: 'Graduate Student, May 2020 - Sep 2022',
        link: 'https://www.linkedin.com/in/gregory-burgess/',
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
    `gatsby-plugin-image`,
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
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `dominantColor`,
          quality: 80,
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map((edge) => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  custom_elements: [{ 'content:encoded': edge.node.html }],
                });
              });
            },
            query: `
              {
                allMarkdownRemark(
                  sort: { frontmatter: { date: DESC } }
                ) {
                  edges {
                    node {
                      excerpt
                      html
                      fields { slug }
                      frontmatter {
                        title
                        date
                      }
                    }
                  }
                }
              }
            `,
            output: '/rss.xml',
            title: "Your Site's RSS Feed",
          },
        ],
      },
    },
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
