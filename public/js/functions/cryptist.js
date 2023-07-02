window.addEventListener('load', () => {
  document.addEventListener('click', (event) => {
    if (!event.target.closest('.all-cryptist-inner-wrapper'))
      location.hash = '#';
  });
});