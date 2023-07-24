module.exports = (req, res) => {
  return res.render('index/index', {
    page: 'index/index',
    title: res.__('Blockchain Event Organizer Based in Turkey'),
    includes: {
      external: {
        css: ['general', 'header', 'page', 'cryptist', 'sui-move-workshop', 'aleo-tour-of-turkiye', 'nym-community-gathering', 'moda-palas'],
        js: ['header', 'page', 'serverRequest', 'increaseNumbers', 'cryptist', 'sui-move-workshop', 'aleo-tour-of-turkiye', 'nym-community-gathering', 'moda-palas']
      },
      meta: {
        title: res.__('Blockchain Event Organizer Based in Turkey'),
        description: res.__('An event organizer based in Turkey that focuses on blockchain technology and cryptocurrencies.'),
        image: '/img/meta/index.webp',
        twitter: true
      }
    },
    url: '/',
  });
}