module.exports = (bh) => {
  bh.match('page-main', (ctx, json) => {
    ctx.tag('main');
    ctx.content([
      {
        block: 'advantages'
      },
      {
        block: 'feedbacks'
      },
      {
        block: 'tariffs'
      },
      {
        block: 'contacts'
      }

    ]);
  });
};
