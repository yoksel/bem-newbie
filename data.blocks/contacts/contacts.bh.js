module.exports = (bh) => {
  bh.match('contacts', function (ctx, json) {
    ctx.param('title', 'Контакты');

    ctx.param('slogan', 'Остались&nbsp;вопросы? Свяжитесь&nbsp;с&nbsp;нами!');

    ctx.param('items', [
      {
        title: 'Звоните:',
        text: '+7 (812) 555-66-66'
      },
      {
        title: 'Пишите:',
        text: 'mail@htmlacademy.ru'
      },
      {
        title: 'Приезжайте в гости:',
        text: 'ул. Большая Конюшенная,&nbsp;19/8'
      }
    ]);
})};
