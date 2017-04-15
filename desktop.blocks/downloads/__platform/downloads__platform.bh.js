module.exports = (bh) => {
  bh.match('downloads__platform', (ctx, json) => {
    ctx.tag('a');
    ctx.attr('href', ctx.param('url'));
    ctx.content({
      block: 'svg',
      mix: { block: 'downloads', elem: 'platform-icon' },
      id: json.id,
      text: json.text
    });
  });
};
