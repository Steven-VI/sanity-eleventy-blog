export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
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
                  buildHookId: '60b6fcd533c51b65968fadc5',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-5ikbaqtz',
                  apiId: 'e69bf19d-a182-4645-a838-0227f53f8ab8'
                },
                {
                  buildHookId: '60b6fcd5cbbf5d5952bbed9a',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-ux9goehh',
                  apiId: 'fc6cd908-1168-4842-b33e-2be1dc6c0366'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Steven-VI/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-ux9goehh.netlify.app', category: 'apps'}
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
