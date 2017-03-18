module.exports = function(bh) {
    bh.match('page-footer', function (ctx) {
      ctx.tag('footer');
    });
};
