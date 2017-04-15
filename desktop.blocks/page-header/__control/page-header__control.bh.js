module.exports = (bh) => {
  bh.match('page-header__control', function (ctx, json) {
    ctx.tag('button')
    ctx.attrs({type: 'button'})
    ctx.content([{
      block: 'svg',
      mix: { block: json.block, elem: 'control-svg' },
      text: json.text,
      content: [
        {
          block: 'svg-symbol',
          id: 'icon-menu-burger',
          attrs: { width: 50, height: 24 },
          mix: { block: json.block, elem: 'symb', mods: { 'burger': true } }
        },
        {
          block: 'svg-symbol',
          id: 'icon-menu-cross',
          attrs: { width: 23, height: 23 },
          mix: { block: json.block, elem: 'symb', mods: { 'cross': true } }
        }
      ]
    }]);
  });
};
