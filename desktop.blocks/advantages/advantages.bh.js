module.exports = (bh) => {
  bh.match('advantages', function (ctx, json) {
    ctx.tag('section');
    ctx.content([
      {
        elem: 'title',
        content: json.title,
        mix: {
          block: 'visually-hidden'
        }
      },
      {
        block: 'slogan',
        mix: {
            block: 'container'
        },
        items: json.slogan
      },
      {
        elem: 'fullwide-bg',
        mix: { block: 'fullwide-bg' },
        content: {
          elem: 'inner',
          mix: { block: 'container' },
          content: {
            elem: 'list',
            items: json.items
          }
        }
      },
      {
        block: 'research',
        mix: { block: 'advantades', elem: 'research' }
      }
    ]);
  })
};
