module.exports = (bh) => {
  bh.match('nav__link', (ctx, json) => {
    ctx.tag('a');
    ctx.attrs({ href: json.url });
    ctx.mix({ block: json.parent, elem: 'nav-link' });
    ctx.content(json.text);
  });
};
