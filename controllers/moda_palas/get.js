module.exports = (req, res) => {
  return res.render('index/index', {
    page: 'index/index',
    title: res.__('Moda Palas'),
    includes: {
      external: {
        css: ['cryptist', 'general', 'header', 'moda-palas', 'nym-community-gathering', 'page', 'sui-move-workshop', 'aleo-tour-of-turkiye'],
        js: ['ancestorWithClassName', 'cryptist', 'header', 'moda-palas', 'nym-community-gathering', 'page', 'serverRequest', 'sui-move-workshop', 'aleo-tour-of-turkiye']
      },
      meta: {
        title: res.__('Moda Palas'),
        description: res.__(''),
        image: '/img/meta/aleo.png',
        twitter: true
      }
    },
    url: '/moda_palas',
    active_page: 'moda'
  });
}