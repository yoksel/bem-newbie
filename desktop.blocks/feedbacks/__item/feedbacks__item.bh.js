module.exports = (bh) => {
  bh.match('feedbacks__item', function (ctx, json) {
    ctx.tag('li');
    ctx.content([
      {
        elem: 'author',
        content: [
          {
            elem: 'author-name',
            content: json.data.author
          },
          {
            elem: 'author-info',
            content: json.data.info
          }
        ]
      },
      {
        elem: 'text',
        content: json.data.text
      }
    ])
})};
