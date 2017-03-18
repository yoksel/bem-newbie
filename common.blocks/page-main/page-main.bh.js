module.exports = function(bh) {
    bh.match('page-main', function (ctx) {
      // console.log( ctx );
      ctx.tag('main');
    });
};
