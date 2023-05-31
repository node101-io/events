module.exports = (req, res) => {
  return res.render('index/index', {
    page: 'index/index',
    title: res.__('Aleo - Türkiye Turu'),
    includes: {
      external: {
        css: ['aleo', 'cryptist', 'general', 'header', 'moda', 'nym', 'page', 'sui'],
        js: ['aleo', 'ancestorWithClassName', 'cryptist', 'header', 'moda', 'nym', 'page', 'serverRequest', 'sui']
      },
      meta: {
        title: res.__('Aleo - Türkiye Turu'),
        description: res.__(''),
        image: '/img/meta/aleo.png',
        twitter: true
      }
    },
    active_page: 'aleo'
  });
}