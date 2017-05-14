module.exports = (bh) => {
  bh.match('tariffs__thead', function (ctx, json) {
    ctx.tag('thead');
    ctx.content(json.data.map((item) => {
      let content = [];
      if (item.name) {
        content = [
          {
            elem: 'price-name',
            tag: 'span',
            content: item.name
          },
          {
            elem: 'price-val',
            tag: 'span',
            content: item.price
          }
        ];
      };

      return {
        elem: 'th',
        tag: 'th',
        content: content
      }
    }));
})};
