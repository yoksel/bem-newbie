module.exports = (bh) => {
  bh.match('svg-lib', (ctx, json) => {
    ctx.content('<!-- inject:svg --><!-- endinject -->')
  });
}
