module.exports = (bh) => {
  bh.match('nav', (ctx) => {
    ctx.param('items', [
      {
        url: '#1',
        text: 'Главная'
      },
      {
        url: '#2',
        text: 'Фотографии'
      },
      {
        url: '#3',
        text: 'Конкурс'
      },
      {
        url: '#4',
        text: 'HTML Academy'
      }
    ]);
  });
};
