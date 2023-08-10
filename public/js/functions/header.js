window.addEventListener('load', () => {
  const QUERY = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop)
  });

  const contactEmailInput = document.getElementById('contact-email-input');
  const contactNameInput = document.getElementById('contact-name-input');
  const contactMessageInput = document.getElementById('contact-message-input');

  const contactSuccessMessage = document.getElementById('contact-success-message');
  const contactErrorMessage = document.getElementById('contact-error-message');

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

    if (event.target.closest('#contact-button')) {
      serverRequest('/contact', 'POST', {
        sender: contactEmailInput.value,
        name: contactNameInput.value,
        message: contactMessageInput.value
      }, res => {       
        console.log(res);
        
        if (res.success) {
          contactEmailInput.value = '';
          contactNameInput.value = '';
          contactMessageInput.value = '';
        }

        contactSuccessMessage.classList.toggle('display-none', !res.success);
        contactErrorMessage.classList.toggle('display-none', res.success);
      });
    };
  });
});