module.exports = (bh) => {
  bh.match('slider', function (ctx, json) {
    ctx.attrs({'data-target': json.target});
    ctx.content(
      getSliderItems(json)
      );
})};


function getSliderItems(json) {
  var items = [];
  for(var i = 0; i < json.items; i++){
    items.push([
      {
        block: 'button',
        mix: {
          block: 'slider',
          elem: 'btn',
          mods: i === 0 ? { 'active': true } : {},
        },
        attrs: {'data-position': i + 1},
        content: i
      }
    ]);
  }
  return items;
}
