module.exports = (req, res) => {
  return res.render('index/index', {
    page: 'index/index',
    title: res.__('Aleo - Türkiye Turu'),
    includes: {
      external: {
        css: ['cryptist', 'general', 'header', 'moda-palas', 'nym-community-gathering', 'page', 'sui-move-workshop', 'aleo-tour-of-turkiye'],
        js: ['ancestorWithClassName', 'cryptist', 'header', 'moda-palas', 'nym-community-gathering', 'page', 'serverRequest', 'sui-move-workshop', 'aleo-tour-of-turkiye']
      },
      meta: {
        title: res.__('Aleo - Türkiye Turu'),
        description: res.__(''),
        image: '/img/meta/aleo.png',
        twitter: true
      }
    },
    url: '/aleo_tour_of_turkiye',
    active_page: 'aleo'
  });
}