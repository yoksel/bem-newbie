module.exports = (bh) => {
  bh.match('tariffs', function (ctx, json) {
    ctx.tag('section');
    ctx.content([
      {
        elem: 'title',
        content: json.title,
        mix: { block: 'visually-hidden' }
      },
      {
        elem: 'fullwide-bg',
        mix: { block: 'fullwide-bg' },
        content: [
          {
            elem: 'table',
            prices: json.prices
          },
          {
            block: 'slider',
            mix: { block: 'tariffs', elem: 'slider'},
            items: 3,
            target: 'tariffs__table'
          }
        ]
      }

    ]);
})};
