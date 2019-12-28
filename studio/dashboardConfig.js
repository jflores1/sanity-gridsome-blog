export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
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
                  buildHookId: '5e06b59baf09c63309a2e76f',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-aqk1mi3b',
                  apiId: 'da6c0d42-ad3e-4ba6-9459-f023ff11f542'
                },
                {
                  buildHookId: '5e06b59c8eeaca9406c14c56',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-rxkk21jo',
                  apiId: 'b7c8f354-ae90-4de0-a626-c777e8fe5d89'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jflores1/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-rxkk21jo.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
