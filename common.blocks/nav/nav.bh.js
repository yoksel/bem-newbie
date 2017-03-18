module.exports = function(bh) {
    bh.match('nav', function (ctx) {
      ctx.tag('nav');
    });
};
