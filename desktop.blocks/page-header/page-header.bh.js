module.exports = (bh) => {
  bh.match('page-header', function (ctx, json) {
    ctx.tag('header')
    ctx.content([
      {
        block: 'page-title',
        content: 'Приложение «Pink»'
      },
      {
        elem: 'content',
        mix: { block: 'container' },
        content: [{
            elem: 'panel',
            content: [{
                block: 'logo',
                text: 'Логотип «Pink»',
                mix: {
                  block: 'page-header',
                  elem: 'logo'
                }
              },
              {
                elem: 'control'
              }
            ]
          },
          {
            block: 'nav',
            mix: {
              block: 'page-header',
              elem: 'nav'
            }
          }
        ]
      },
      {
        block: 'downloads',
        mix: { block: 'container' },
      }
    ]);
  });
};
