module.exports = (req, res) => {
  return res.render('index/index', {
    page: 'index/index',
    title: res.__('SUI Move Yazılım Eğitimleri'),
    includes: {
      external: {
        css: ['aleo', 'cryptist', 'general', 'header', 'moda', 'nym', 'page', 'sui'],
        js: ['aleo', 'ancestorWithClassName', 'cryptist', 'header', 'moda', 'nym', 'page', 'serverRequest', 'sui']
      },
      meta: {
        title: res.__('SUI Move Yazılım Eğitimleri'),
        description: res.__(''),
        image: '/img/meta/sui.png',
        twitter: true
      }
    },
    active_page: 'sui'
  });
}