module.exports = (bh) => {
  bh.match('btn', (ctx) => {
    ctx.tag('a');
    ctx.attr('href', ctx.param('url'));
  });
};
