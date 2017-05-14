module.exports = (bh) => {
  bh.match('feedbacks', function (ctx, json) {
    ctx.tag('section');
    ctx.content({
      elem: 'inner',
      mix: { block: 'container' },
      content: [
        {
          elem: 'title',
          content: json.title,
          mix: { block: 'visually-hidden' }
        },
        {
          elem: 'list',
          items: json.items
        },
        {
          block: 'slider',
          mix: { block: 'feedbacks', elem: 'slider'},
          items: 3,
          target: 'feedbacks__list'
        },
        {
          elem: 'arrows',
          content: [
            {
              block: 'button',
              mix: {
                block: 'feedbacks',
                elem: 'arrow',
                mods: { 'prev': true}
              },

            },
            {
              block: 'button',
              mix: {
                block: 'feedbacks',
                elem: 'arrow',
                mods: { 'next': true}
              },
            }
          ]
        }
      ]
    });
})};
