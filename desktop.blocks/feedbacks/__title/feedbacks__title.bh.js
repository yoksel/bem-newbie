module.exports = (bh) => {
  bh.match('feedbacks__title', function (ctx, json) {
    ctx.tag('h3');
})};
