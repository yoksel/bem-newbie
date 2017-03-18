({
  block: 'page',
  title: 'Hello, World!',
  styles: [
    { elem: 'css', url: 'index.min.css' }
  ],
  scripts: [
    { elem: 'js', url: 'index.min.js' }
  ],
  content: [
    {
      block: 'page-header',
      content: [
        {
          elem: 'inner',
          mix: { block: 'container'},
          content: [
            {
              block: 'logo',
              content: 'Logo 12333'
            },
            {
              block: 'nav',
              mix: { block: 'main-nav'},
              content: [
                'Nav',
                {
                  block: 'list',
                  mix: { block: 'main-nav', elem: 'list'},
                  items: [
                    {
                      url: '#1',
                      content: 'Главная'
                    },
                    {
                      url: '#2',
                      content: 'Фотографии'
                    },
                    {
                      url: '#3',
                      content: 'Конкурс'
                    },
                    {
                      url: '#4',
                      content: 'HTML Academy'
                    }
                  ]
                }
              ]
            },
            {
              block: 'downloads',
              content: [
                {
                  block: 'link',
                  mix: {
                    block: 'downloads',
                    elem: 'link',
                    mods: { rounded: true }
                  },
                  url: '#5',
                  content: 'Скачать',
                },
                {
                  block: 'list',
                  mix: { block: 'downloads', elem: 'list'},
                  items: [
                    {
                      url: '#itunes',
                      content: 'IOS',
                      mods: { ios: true }
                    },
                    {
                      url: '#googleplay',
                      content: 'Android',
                      mods: { android: true }
                    },
                    {
                      url: '#windows',
                      content: 'Windows',
                      mods: { win: true }
                    }
                  ]
                }
              ],
            },

          ]
        }

      ]
    },
    {
      block: 'page-main',
      content: 'main'
    },
    {
      block: 'page-footer',
      content: 'footer'
    }
  ]
});
