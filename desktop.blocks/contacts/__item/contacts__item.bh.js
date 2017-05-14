module.exports = (bh) => {
  bh.match('contacts__item', function (ctx, json) {
    ctx.tag('li');
    ctx.content([
      {
        elem: 'item-title',
        tag: 'h4',
        content: json.data.title
      },
      {
        elem: 'item-text',
        content: json.data.text
      }
    ])
})};
