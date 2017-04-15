module.exports = (bh) => {
  bh.match('page-title', (ctx, json) => {
    ctx.tag('h1')
    ctx.mix({block: 'visually-hidden'})
  });
};
