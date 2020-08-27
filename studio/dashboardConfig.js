export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f475fc55c29112fcd69ba7c',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-ib7v8ax8',
                  apiId: '9d7a55a2-6ae1-4361-979e-ff863f325da7'
                },
                {
                  buildHookId: '5f475fc55c29113a7f69b7d5',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-8bg84wcd',
                  apiId: '6ba81917-0172-4647-97f1-133c9766198b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/vivekneem/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-8bg84wcd.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
