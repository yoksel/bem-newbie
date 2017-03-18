module.exports = function(bh) {
    bh.match('page-header', function (ctx) {
      ctx.tag('header');
    });
};
