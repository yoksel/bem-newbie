module.exports = (bh) => {
  bh.match('tariffs', function (ctx, json) {
    ctx.param('title', 'Тарифы');

    ctx.param('prices', {
      head: [
        '',
        {
          name: 'Базa',
          price: '1,99 USD'
        },
        {
          name: 'Стандарт',
          price: '3,99 USD'
        },
        {
          name: 'Анлим',
          price: '9,99 USD'
        }
      ],
      body: [
        {
          name: 'Розовый фильтр',
          values: [true, true, true]
        },
        {
          name: 'Смайлики',
          values: [false, true, true]
        },
        {
          name: 'Комментарии',
          values: [false, false, true]
        }
      ]
    })
})};
