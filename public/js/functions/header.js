let QUERY;

window.addEventListener('load', () => {
  QUERY = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop)
  });

  document.addEventListener('click', event => {
    if (event.target.closest('.all-header-language-button')) {
      const target = event.target.closest('.all-header-language-button');
      console.log(target);
      const lang = target.href.split('=')[1];

      let url = window.location.href.split('?')[0] + '?';

      Object.keys(QUERY).forEach(key => {
        if (key != 'lang')
          url = `${url}${key}=${QUERY[key]}&`;
      });
      url = `${url}lang=${lang}`;

      window.location.href = url;
    };
  });
});