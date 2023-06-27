module.exports = (req, res) => {
  return res.render('index/index', {
    page: 'index/index',
    title: res.__('Blockchain Event Organizer Based in Turkey'),
    includes: {
      external: {
        css: ['cryptist', 'general', 'header', 'moda-palas', 'nym-community-gathering', 'page', 'sui-move-workshop', 'aleo-tour-of-turkiye'],
        js: ['ancestorWithClassName', 'cryptist', 'header', 'moda-palas', 'nym-community-gathering', 'page', 'serverRequest', 'sui-move-workshop', 'aleo-tour-of-turkiye']
      },
      meta: {
        title: res.__('Blockchain Event Organizer Based in Turkey'),
        description: res.__('An event organizer based in Turkey that focuses on blockchain technology and cryptocurrencies.'),
        image: '/img/meta/header.png',
        twitter: true
      }
    },
    url: '',
    active_page: ''
  });
}