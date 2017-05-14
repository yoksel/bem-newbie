module.exports = (bh) => {
  bh.match('tariffs__title', function (ctx, json) {
    ctx.tag('h3');
})};
