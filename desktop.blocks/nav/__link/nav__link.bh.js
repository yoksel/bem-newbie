module.exports = (bh) => {
  bh.match('nav__link', (ctx, json) => {
    ctx.tag('a');
    ctx.attrs({ href: json.url });
    ctx.mods(json.mods);
    ctx.content(json.text);
  });
};
