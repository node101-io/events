module.exports = (req, res) => {
  return res.render('index/index', {
    page: 'index/index',
    title: res.__('NYM Topluluk Buluşması'),
    includes: {
      external: {
        css: ['aleo', 'cryptist', 'general', 'header', 'moda', 'nym', 'page', 'sui'],
        js: ['aleo', 'ancestorWithClassName', 'cryptist', 'header', 'moda', 'nym', 'page', 'serverRequest', 'sui']
      },
      meta: {
        title: res.__('NYM Topluluk Buluşması'),
        description: res.__(''),
        image: '/img/meta/nym.png',
        twitter: true
      }
    },
    active_page: 'nym'
  });
}