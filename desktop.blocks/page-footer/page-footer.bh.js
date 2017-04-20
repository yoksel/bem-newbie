module.exports = (bh) => {
  bh.match('page-footer', function (ctx, json) {
    ctx.tag('footer');
    ctx.content([
      {
        block: 'logo',
        mods: { 'dark': true }
      }
    ]);
})};
