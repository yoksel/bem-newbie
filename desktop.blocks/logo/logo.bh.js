module.exports = (bh) => {
  bh.match('logo', function (ctx, json) {
    ctx.tag('a')
    ctx.content([{
      block: 'svg',
      mix: { block: json.mix.block, elem: 'logo-svg' },
      text: json.text,
      content: [
        {
          block: 'svg-symbol',
          id: 'logo-pink-white-mobile',
          mix: { block: json.mix.block, elem: 'logo-symb', mods: { 'mobile': true } }
        },
        {
          block: 'svg-symbol',
          id: 'logo-pink-white-tablet',
          mix: { block: json.mix.block, elem: 'logo-symb', mods: { 'tablet': true } }
        },
        {
          block: 'svg-symbol',
          id: 'logo-pink-white-desktop',
          mix: { block: json.mix.block, elem: 'logo-symb', mods: { 'desktop': true } }
        }
      ]
    }]);
  });
};
