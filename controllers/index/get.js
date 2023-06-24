module.exports = (req, res) => {
  return res.render('index/index', {
    page: 'index/index',
    title: res.__('Türkiye Merkezli Blogzincir Etkinlik Organizatörü'),
    includes: {
      external: {
        css: ['aleo', 'cryptist', 'general', 'header', 'moda', 'nym', 'page', 'sui'],
        js: ['aleo', 'ancestorWithClassName', 'cryptist', 'header', 'getQuery', 'moda', 'nym', 'page', 'serverRequest', 'sui']
      },
      meta: {
        title: res.__('Türkiye Merkezli Blogzincir Etkinlik Organizatörü'),
        description: res.__('Bir etkinlik organize'),
        image: '/img/meta/header.png',
        twitter: true
      }
    },
    url: '',
    active_page: ''
  });
}