module.exports = (bh) => {
  bh.match('research__title', function (ctx, json) {
    ctx.tag('h4');
})};
