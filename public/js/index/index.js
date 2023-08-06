history.scrollRestoration = 'manual';

let ROUTES = null;

let sliderIndex = 0;
let oldScrollY = 0;

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('become-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

const observeByClassNames = classNames => {
  classNames.forEach(className => {
    document.querySelectorAll(className).forEach(entry => observer.observe(entry))
  });
};

const renderContent = route => {
  for (let i = 0; i < ROUTES.length; i++)
    document.querySelector(`.all-${ROUTES[i]}-wrapper`).classList.toggle('display-none', ROUTES[i] != route);

  if (route == 'cryptist') {
    createNumberIncreaseObserver(route);
    document.querySelector('.all-cryptist-wrapper').scrollTo(0, 0);
  } else if (route == 'sui-move-workshop') {
    createNumberIncreaseObserver(route);
    document.querySelector('.all-sui-move-workshop-wrapper').scrollTo(0, 0);
  } else if (route == 'aleo-tour-of-turkiye') {
    createNumberIncreaseObserver(route);
    document.querySelector('.all-aleo-tour-of-turkiye-wrapper').scrollTo(0, 0);
  } else if (route == 'nym-community-gathering') {
    document.querySelector('.all-nym-community-gathering-wrapper').scrollTo(0, 0);
  } else if (route == 'moda-palas') {
    document.querySelector('.all-moda-palas-wrapper').scrollTo(0, 0);
  }
};

window.addEventListener('load', () => {
  const allHeaderBottomWrapper = document.querySelector('.all-header-bottom-wrapper');
  const clickableImageBig = document.querySelector('.clickable-image-big');
  const clickableImageLayer = document.querySelector('.clickable-image-layer');
  const eventsSliderBullets = document.querySelectorAll('.each-event-slider-bullet');
  const eventsSliderOuterWrapper = document.querySelector('.events-slider-outer-wrapper');
  const eventsSliderWrapper = document.querySelector('.events-slider-wrapper');
  const eventsSliderWrappers = document.querySelectorAll('.each-event-slider-wrapper');
  const rootElement = document.querySelector(':root');

  ROUTES = JSON.parse(document.getElementById('routes').value);

  new ResizeObserver(() => {
    rootElement.style.setProperty('--events-slider-wrapper-width', eventsSliderWrapper.scrollWidth + 'px');
  }).observe(eventsSliderWrapper);

  document.addEventListener('scroll', () => {
    const windowScrollY = window.scrollY;
    const scrollWidth = eventsSliderWrapper.scrollWidth;
    const windowInnerWidth = window.innerWidth;

    if (windowScrollY > scrollWidth - eventsSliderWrapper.offsetWidth) {
      rootElement.style.setProperty('--events-slider-wrapper-width', scrollWidth + 'px');
      eventsSliderOuterWrapper.classList.add('events-slider-outer-wrapper-end');

      allHeaderBottomWrapper.classList.toggle('all-header-bottom-wrapper-hidden', oldScrollY < windowScrollY);

      oldScrollY = window.scrollY;
    } else {
      eventsSliderOuterWrapper.classList.remove('events-slider-outer-wrapper-end');

      allHeaderBottomWrapper.classList.remove('all-header-bottom-wrapper-hidden');
    };

    for (let i = 0; i < eventsSliderWrappers.length; i++) {
      const sliderRect = eventsSliderWrappers[i].getBoundingClientRect();

      const absoluteValue = Math.abs((sliderRect.left + sliderRect.right) / windowInnerWidth - 1);
      const headerButtonsToBeActive = allHeaderBottomWrapper.querySelectorAll(`a[href="/${ROUTES[i]}"]`);
      const isCentered = sliderRect.left < windowInnerWidth / 2 && sliderRect.right > windowInnerWidth / 2;

      eventsSliderWrappers[i].style.transform = `scale(${1 - absoluteValue / 10})`;
      eventsSliderWrappers[i].style.opacity = 1 - absoluteValue / 2;

      eventsSliderBullets[i].classList.toggle('each-event-slider-bullet-filled', isCentered);
      for (let j = 0; j < headerButtonsToBeActive.length; j++)
        headerButtonsToBeActive[j].classList.toggle('each-all-header-button-active', isCentered);

      if (isCentered)
        sliderIndex = i;
    };

    eventsSliderWrapper.scrollTo(windowScrollY, 0);
  });

  document.addEventListener('click', event => {
    if (event.target.closest('a')) {
      const targetRoute = event.target.closest('a').getAttribute('href');
      if (!targetRoute.startsWith('http') && !targetRoute.startsWith('mailto')) {
        event.preventDefault();
        history.pushState(null, null, targetRoute + window.location.search);
        renderContent(targetRoute.split('/')[1]);
      };
    };

    if (event.target.closest('.each-event-slider-bullet')) {
      window.scrollTo(0, (eventsSliderWrapper.scrollWidth - eventsSliderWrapper.offsetWidth) * (event.target.dataset.index / 4));
    };

    if (event.target.classList.contains('each-event-page-wrapper') || event.target.closest('.each-event-page-close-button')) {
      history.pushState(null, null, '/' + window.location.search);
      renderContent('');
    };

    if (event.target.closest('.clickable-image-layer') && !event.target.closest('.clickable-image-big')) {
      clickableImageLayer.classList.add('display-none');
    };

    if (event.target.closest('.clickable-image')) {
      clickableImageBig.src = event.target.src;
      clickableImageLayer.classList.remove('display-none');
    };

    if (event.target.closest('.each-event-page-switch-button')) {
      const isRightButton = event.target.closest('.each-event-page-switch-right-button');
      const newRoute = ROUTES[(ROUTES.indexOf(window.location.pathname.split('/')[1]) + (isRightButton ? 1 : -1) + 5) % ROUTES.length];
      history.pushState(null, null, newRoute + window.location.search);
      renderContent(newRoute);
    };

    if (event.target.closest('.each-scroll-down-button')) {
      if (event.target.closest('.all-cryptist-second-left-wrapper'))
        document.querySelector('.all-cryptist-fourth-wrapper').scrollIntoView({ behavior: 'smooth' });
      else if (event.target.closest('.all-sui-second-left-wrapper'))
        document.querySelector('.all-sui-third-wrapper').scrollIntoView({ behavior: 'smooth' });
      else if (event.target.closest('.all-aleo-first-bottom-wrapper'))
        document.querySelector('.all-aleo-second-wrapper').scrollIntoView({ behavior: 'smooth' });
      else if (event.target.closest('.all-nym-first-left-bottom-wrapper'))
        document.querySelector('.all-nym-second-wrapper').scrollIntoView({ behavior: 'smooth' });
      else if (event.target.closest('.all-moda-second-left-left-bottom-wrapper'))
        document.querySelector('.all-moda-third-wrapper').scrollIntoView({ behavior: 'smooth' });
    };
  });

  window.addEventListener('popstate', () => {
    renderContent(window.location.pathname.split('/')[1]);
  });

  renderContent(window.location.pathname.split('/')[1]);

  observeByClassNames(['.each-team-member-wrapper', '.each-motto-line', '.all-content-team-title']);

  window.scrollTo(0, 1);
});