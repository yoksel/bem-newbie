module.exports = (bh) => {
  bh.match('advantages__title', function (ctx, json) {
    ctx.tag('h3');
})};
