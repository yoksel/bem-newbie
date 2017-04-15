module.exports = (bh) => {
  bh.match('nav__item', (ctx, json) => {
    ctx.tag('li')
    ctx.mods(json.mods)
    ctx.content({
      elem: 'link',
      content: json.text,
      attrs: {href: json.url},
      mods: json.mods
    })
  });
};
