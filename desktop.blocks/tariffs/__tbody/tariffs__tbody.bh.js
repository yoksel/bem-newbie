module.exports = (bh) => {
  bh.match('tariffs__tbody', function (ctx, json) {
    ctx.tag('tbody');
    ctx.content(json.data.map((item) => {
      const name = item.name;

      return {
        elem: 'tr',
        tag: 'tr',
        content: [
          {
            elem: 'prop-name',
            tag: 'td',
            content: name
          },
          item.values.map((item) => {
            return {
              elem: 'prop-val',
              tag: 'td',
              attrs: { 'data-name': name },
              content: {
                elem: 'icon',
                tag: 'span',
                mods: { 'prop-val': item ? 'yes' : 'no' },
                content: {
                  block: 'svg',
                  id: item ? 'icon-yes' : 'icon-no',
                  text: item ? 'да' : 'нет',
                  mix: { block: 'tariffs', elem: 'icon-svg' }
                }
              }
            }
          })
        ]
      };
    }));
})};
