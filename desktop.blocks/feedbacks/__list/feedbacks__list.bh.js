module.exports = (bh) => {
  bh.match('feedbacks__list', function (ctx, json) {
    ctx.tag('ul');
    ctx.content(
      json.items.map((item) => {
        return {
          elem: 'item',
          data: item
        }
      })
    );
})};

