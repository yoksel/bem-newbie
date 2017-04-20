module.exports = (bh) => {
  bh.match('logo_light', function (ctx, json) {
    const logos = bh.lib.getLogosByContext('white', ['mobile', 'tablet', 'desktop']);

    ctx.content([{
      block: 'svg',
      mix: { block: 'logo-svg' },
      text: json.text,
      content: logos
    }]);
  });
};
