module.exports = (bh) => {
  bh.match('contacts__title', function (ctx, json) {
    ctx.tag('h3');
})};
