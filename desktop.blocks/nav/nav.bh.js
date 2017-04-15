module.exports = (bh) => {
  bh.match('nav', (ctx, json) => {
    const items = ctx.param('items');
    ctx.tag('nav');
    ctx.content(
      items.map((item) => {
        return bh.utils.extend({
          elem: 'link',
          mix: { block: json.mix.block, elem: 'nav-link' }
        }, item);
      }
      ));
  });
};
