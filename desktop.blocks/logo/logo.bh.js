module.exports = (bh) => {
  bh.match('logo', function (ctx, json) {
    ctx.tag('a');
  });

  bh.lib.getLogosByContext = function(color, formats) {
    if (!formats || !color) {
      return [];
    }

    return formats.map((item) => {
      const obj = {
        block: 'svg-symbol',
        mix: {
          block: 'logo-symbol',
          mods: {}
        },
        id: 'logo-pink-' + color + '-' + item
      };
      obj.mix.mods[item] = true;

      return obj;
    });
  }
};



