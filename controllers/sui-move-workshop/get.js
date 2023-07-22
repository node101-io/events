module.exports = (req, res) => {
  return res.render('index/index', {
    page: 'index/index',
    title: res.__('SUI Move Yazılım Eğitimleri'),
    includes: {
      external: {
        css: ['general', 'header', 'page', 'cryptist', 'sui-move-workshop', 'aleo-tour-of-turkiye', 'nym-community-gathering', 'moda-palas'],
        js: ['header', 'page', 'serverRequest', 'increaseNumbers', 'cryptist', 'sui-move-workshop', 'aleo-tour-of-turkiye', 'nym-community-gathering', 'moda-palas']
      },
      meta: {
        title: res.__('SUI Move Yazılım Eğitimleri'),
        description: res.__(''),
        image: '/img/meta/sui.png',
        twitter: true
      }
    },
    url: '/sui-move-workshop',
  });
}