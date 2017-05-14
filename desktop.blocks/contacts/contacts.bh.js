module.exports = (bh) => {
  bh.match('contacts', function (ctx, json) {
    ctx.tag('section');

    ctx.content([
      {
        elem: 'title',
        content: json.title,
        mix: { block: 'visually-hidden' }
      },
      {
        block: 'slogan',
        mix: { block: 'contacts', elem: 'slogan' },
        text: json.slogan
      },
      {
        elem: 'list',
        items: json.items
      },
      {
        elem: 'map',
        // items: json.items
      }
    ]);
})};
