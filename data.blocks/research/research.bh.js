module.exports = (bh) => {
  bh.match('research', function (ctx, json) {
    ctx.param('data', {
      title: 'Эффект <span class="break break_tablet-only">на 24 часа!',
      text: 'Британские ученые провели исследования и&nbsp;доказали, что&nbsp;положительный эффект от&nbsp;использования приложения длится целые&nbsp;сутки!',
      link: {
        url: '#',
        text: 'Узнать больше об исследовании'
      }
    });
})};
