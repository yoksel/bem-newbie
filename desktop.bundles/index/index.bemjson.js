({
  block: 'page',
  title: 'Hello, World!',
  styles: [{
    elem: 'css',
    url: 'index.min.css'
  }],
  scripts: [{
    elem: 'js',
    url: 'index.min.js'
  }],
  head: [{
      elem: 'meta',
      attrs: {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      }
  }],
  content:
  [
    {
      block: 'svg-lib'
    },
    {
      block: 'page-header'
    },
    {
      block: 'page-footer'
    }
  ]
});
