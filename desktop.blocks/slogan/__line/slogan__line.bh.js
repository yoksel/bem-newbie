module.exports = (bh) => {
  bh.match('slogan__line', function (ctx, json) {
    ctx.tag('span');
})};
