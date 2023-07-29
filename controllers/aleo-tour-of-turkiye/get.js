module.exports = (req, res) => {
  return res.render('index/index', {
    page: 'index/index',
    title: res.__('Aleo - Tour of Türkiye'),
    includes: {
      external: {
        css: ['general', 'header', 'page', 'cryptist', 'sui-move-workshop', 'aleo-tour-of-turkiye', 'nym-community-gathering', 'moda-palas'],
        js: ['header', 'page', 'serverRequest', 'increaseNumbers', 'cryptist', 'sui-move-workshop', 'aleo-tour-of-turkiye', 'nym-community-gathering', 'moda-palas']
      },
      meta: {
        title: res.__('Aleo - Tour of Türkiye'),
        description: res.__(''),
        image: '/img/meta/aleo-tour-of-turkiye.webp',
        twitter: true
      }
    },
    url: '/aleo-tour-of-turkiye',
  });
}