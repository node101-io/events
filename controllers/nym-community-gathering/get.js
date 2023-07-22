module.exports = (req, res) => {
  return res.render('index/index', {
    page: 'index/index',
    title: res.__('NYM Topluluk Buluşması'),
    includes: {
      external: {
        css: ['general', 'header', 'page', 'cryptist', 'sui-move-workshop', 'aleo-tour-of-turkiye', 'nym-community-gathering', 'moda-palas'],
        js: ['header', 'page', 'serverRequest', 'increaseNumbers', 'cryptist', 'sui-move-workshop', 'aleo-tour-of-turkiye', 'nym-community-gathering', 'moda-palas']
      },
      meta: {
        title: res.__('NYM Topluluk Buluşması'),
        description: res.__(''),
        image: '/img/meta/nym.png',
        twitter: true
      }
    },
    url: '/nym-community-gathering',
  });
}