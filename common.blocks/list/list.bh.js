module.exports = function(bh) {
    bh.match('list', function (ctx) {

      ctx.tag('ul');
      ctx.content(

        ctx.ctx.items.map(function (item) {
          const items = ctx.param('items');
          const block = ctx.param('mix').block;

          let content = item.content;

          if (item.url) {
            content = {
              block: 'link',
              mix: { block: block, elem: 'link' },
              url: item.url,
              content: item.content
            };
          }
          return {
            elem: 'item',
            mix: { block: block, elem: 'item' },
            tag: 'li',
            content: content
          };
        })
      );
    });
};
