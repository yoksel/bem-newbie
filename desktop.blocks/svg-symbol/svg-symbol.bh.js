module.exports = (bh) => {
  bh.match('svg-symbol', (ctx, json) => {
    let attrs = json.attrs || {};
    attrs['xlink:href'] = `#${json.id}`;

    ctx.tag('use')
    ctx.attrs(attrs)
  });
};
