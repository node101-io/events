module.exports = (req, res) => {
  return res.render('index/index', {
    page: 'index/index',
    title: res.__('NYM Topluluk Buluşması'),
    includes: {
      external: {
        css: ['cryptist', 'general', 'header', 'moda-palas', 'nym-community-gathering', 'page', 'sui-move-workshop', 'aleo-tour-of-turkiye'],
        js: ['ancestorWithClassName', 'cryptist', 'header', 'moda-palas', 'nym-community-gathering', 'page', 'serverRequest', 'sui-move-workshop', 'aleo-tour-of-turkiye']
      },
      meta: {
        title: res.__('NYM Topluluk Buluşması'),
        description: res.__(''),
        image: '/img/meta/nym.png',
        twitter: true
      }
    },
    url: '/nym_community_gathering',
    active_page: 'nym'
  });
}