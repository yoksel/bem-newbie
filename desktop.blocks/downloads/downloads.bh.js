module.exports = (bh) => {
  bh.match('downloads', (ctx, json) => {
    ctx.content(
      [{
        elem: 'inner',
        content: [{
          elem: 'content',
          content: [
            {
              elem: 'slogan',
              content: json.slogan
            },
            {
              block: 'btn',
              mix: { block: 'downloads', elem: 'btn' },
              mods: { rounded: true },
              content: json.btn.content,
              url: json.btn.url
            },
            {
              elem: 'platforms',
              items: json.items
            },
            {
              elem: 'text',
              content: json.text
            }
          ]
        }]
      },
      ]
    );
  });
};
