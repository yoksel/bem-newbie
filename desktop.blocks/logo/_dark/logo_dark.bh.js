module.exports = (bh) => {
  bh.match('logo_dark', function (ctx, json) {
    const logos = bh.lib.getLogosByContext('blue', ['mobile', 'desktop']);

    ctx.content([{
      block: 'svg',
      mix: { block: 'logo-svg' },
      text: json.text,
      content: logos
    }]);
  });
};
