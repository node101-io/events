module.exports = (req, res) => {
  return res.render('index/index', {
    page: 'index/index',
    title: res.__('Cryptİst'),
    includes: {
      external: {
        css: ['general', 'header', 'page', 'cryptist', 'sui-move-workshop', 'aleo-tour-of-turkiye', 'nym-community-gathering', 'moda-palas'],
        js: ['header', 'page', 'serverRequest', 'increaseNumbers', 'cryptist', 'sui-move-workshop', 'aleo-tour-of-turkiye', 'nym-community-gathering', 'moda-palas']
      },
      meta: {
        title: res.__('Cryptİst'),
        description: res.__(''),
        image: '/img/meta/cryptist.png',
        twitter: true
      }
    },
    url: '/cryptist',
    active_page: 'cryptist'
  });
}