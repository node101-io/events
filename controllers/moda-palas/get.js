module.exports = (req, res) => {
  return res.render('index/index', {
    page: 'index/index',
    title: res.__('Moda Palas'),
    includes: {
      external: {
        css: ['general', 'header', 'page', 'cryptist', 'sui-move-workshop', 'aleo-tour-of-turkiye', 'nym-community-gathering', 'moda-palas'],
        js: ['header', 'page', 'serverRequest', 'increaseNumbers', 'cryptist', 'sui-move-workshop', 'aleo-tour-of-turkiye', 'nym-community-gathering', 'moda-palas']
      },
      meta: {
        title: res.__('Moda Palas'),
        description: res.__(''),
        image: '/img/meta/aleo.png',
        twitter: true
      }
    },
    url: '/moda-palas',
    active_page: 'moda-palas'
  });
}