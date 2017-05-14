module.exports = (bh) => {
  bh.match('research', function (ctx, json) {
    ctx.content(
      {
        elem: 'inner',
        mix: {
          block: 'container'
        },
        content: {
          elem: 'content',
          content: [
            {
              elem: 'title',
              content: json.data.title
            },
            {
              elem: 'text',
              content: json.data.text
            },
            {
              block: 'link',
              mix: {
                block: 'research',
                elem: 'link'
              },
              url: json.data.link.url,
              content: json.data.link.text
            }
          ]
        }
      }
    );
  })
};
