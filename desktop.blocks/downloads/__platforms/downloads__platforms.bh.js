module.exports = (bh) => {
  bh.match('downloads__platforms', (ctx, json) => {
    ctx.tag('div');

    const items = ctx.param('items');

    ctx.content(
      items.map((item) => {
        return bh.utils.extend({
          elem: 'platform'
        }, item);
      }
      ));
  })
};
