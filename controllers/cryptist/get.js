module.exports = (req, res) => {
  return res.render('index/index', {
    page: 'index/index',
    title: res.__('Cryptİst'),
    includes: {
      external: {
        css: ['cryptist', 'general', 'header', 'moda-palas', 'nym-community-gathering', 'page', 'sui-move-workshop', 'aleo-tour-of-turkiye'],
        js: ['ancestorWithClassName', 'cryptist', 'header', 'moda-palas', 'nym-community-gathering', 'page', 'serverRequest', 'sui-move-workshop', 'aleo-tour-of-turkiye']
      },
      meta: {
        title: res.__('Cryptİst'),
        description: res.__(''),
        image: '/img/meta/cryptist.png',
        twitter: true
      }
    },
    url: '/cryptist',
    active_page: 'cryptist'
  });
}