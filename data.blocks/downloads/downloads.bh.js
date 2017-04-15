module.exports = (bh) => {
  bh.match('downloads', (ctx) => {
    ctx.param('slogan', 'Взгляните на&nbsp;жизнь иначе!');
    ctx.param('btn', {
      url: '#5',
      content: 'Скачать приложение'
    });
    ctx.param('items', [{
      mods: {
        ios: true
      },
      url: '#itunes',
      text: 'Скачать для IOS',
      id: 'logo-apple'
    },
    {
      mods: {
        android: true
      },
      url: '#googleplay',
      text: 'Скачать для Android',
      id: 'logo-android'
    },
    {
      mods: {
        win: true
      },
      url: '#windows',
      text: 'Скачать для Windows',
      id: 'logo-microsoft'
    }
    ]);
    ctx.param('text', 'Доступно для&nbsp;iPhone, iPad, Android, Windows Phone, OS&nbsp;X, Windows&nbsp;8');
  })
};
