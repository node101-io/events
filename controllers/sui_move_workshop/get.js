module.exports = (req, res) => {
  return res.render('index/index', {
    page: 'index/index',
    title: res.__('SUI Move Yazılım Eğitimleri'),
    includes: {
      external: {
        css: ['cryptist', 'general', 'header', 'moda-palas', 'nym-community-gathering', 'page', 'sui-move-workshop', 'aleo-tour-of-turkiye'],
        js: ['ancestorWithClassName', 'cryptist', 'header', 'moda-palas', 'nym-community-gathering', 'page', 'serverRequest', 'sui-move-workshop', 'aleo-tour-of-turkiye']
      },
      meta: {
        title: res.__('SUI Move Yazılım Eğitimleri'),
        description: res.__(''),
        image: '/img/meta/sui.png',
        twitter: true
      }
    },
    url: '/sui_move_workshop',
    active_page: 'sui'
  });
}