export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5fdbfcf0af8fdf00a43e4041',
                  title: 'Sanity Studio',
                  name: 'finalkoalastage-studio',
                  apiId: 'c1b460d7-d9e1-4e59-88c7-6595c117f583'
                },
                {
                  buildHookId: '5fdbfcf000dab7015bb60bea',
                  title: 'Blog Website',
                  name: 'finalkoalastage',
                  apiId: 'd2821c27-be01-4b22-9f43-33e2724589f9'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/k10zxx/finalkoalastage',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://finalkoalastage.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
