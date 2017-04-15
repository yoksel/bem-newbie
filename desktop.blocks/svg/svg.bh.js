module.exports = (bh) => {
  bh.match('svg', (ctx, json) => {
    ctx.tag('svg')
    ctx.attrs({
      'width': 32,
      'height': 32,
      'role': 'img',
      'aria-label': json.text
    })

    if (json.id) {
      ctx.content({
        block: 'svg-symbol',
        id: json.id
      });
    }
  });
};
