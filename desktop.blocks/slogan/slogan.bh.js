module.exports = (bh) => {
  bh.match('slogan', function (ctx, json) {
    // ctx.tag('h3');
    if (json.items) {
      ctx.content(
        json.items.map((item) => {
          return {
            elem: 'line',
            content: item
          }
        })
      );
    }
    else {
      ctx.content(json.text);
    }
})};
