module.exports = (bh) => {
  bh.match('tariffs__table', function (ctx, json) {
    ctx.tag('table');
    ctx.content([
      {
        elem: 'thead',
        data: json.prices.head
      },
      {
        elem: 'tbody',
        data: json.prices.body
      }
    ])
})};
