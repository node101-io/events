history.scrollRestoration = 'manual';

const ROUTES = ['cryptist', 'sui-move-workshop', 'aleo-tour-of-turkiye', 'nym-community-gathering', 'moda-palas'];

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('become-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

const observeByClassNames = (classNames) => {
  classNames.forEach((className) => {
    document.querySelectorAll(className).forEach((entry) => observer.observe(entry))
  });
};

const renderContent = (route) => {
  for (let i = 0; i < ROUTES.length; i++)
    document.querySelector(`.all-${ROUTES[i]}-wrapper`).classList.toggle('display-none', ROUTES[i] != route);

  if (route == 'cryptist') {
    createNumberIncreaseObserver('.each-cryptist-first-left-event-stats-number', ['150', '14', '7', '6'])
      .observe(document.querySelector('.all-cryptist-first-left-event-stats-wrapper'));
    document.querySelector('.all-cryptist-wrapper').scrollTo(0, 0);
  } else if (route == 'sui-move-workshop') {
    createNumberIncreaseObserver('.each-sui-first-left-event-stats-number', ['+40', '+10', '1'])
      .observe(document.querySelector('.all-sui-first-left-event-stats-wrapper'));
    document.querySelector('.all-sui-move-workshop-wrapper').scrollTo(0, 0);
  } else if (route == 'aleo-tour-of-turkiye') {
    createNumberIncreaseObserver('.each-aleo-first-left-event-stats-number', ['+200', '+3', '2'])
      .observe(document.querySelector('.all-aleo-second-stats-wrapper'));
    document.querySelector('.all-aleo-tour-of-turkiye-wrapper').scrollTo(0, 0);
  } else if (route == 'nym-community-gathering') {
    document.querySelector('.all-nym-community-gathering-wrapper').scrollTo(0, 0);
  } else if (route == 'moda-palas') {
    document.querySelector('.all-moda-palas-wrapper').scrollTo(0, 0);
  }
};

window.addEventListener('load', () => {
  let sliderIndex = 0;
  let oldScrollY = 0;
  const links = document.querySelectorAll('a');
  const rootElement = document.querySelector(':root');
  const htmlElement = document.querySelector('html');
  const allHeaderBottomWrapper = document.querySelector('.all-header-bottom-wrapper');
  const eventsSliderWrapper = document.querySelector('.events-slider-wrapper');
  const eventsSliderOuterWrapper = document.querySelector('.events-slider-outer-wrapper');
  const eventsSliderWrappers = document.querySelectorAll('.each-event-slider-wrapper');
  const eventsSliderBullets = document.querySelectorAll('.each-event-slider-bullet');
  const clickableImageBig = document.querySelector('.clickable-image-big');
  const clickableImageLayer = document.querySelector('.clickable-image-layer');

  for (let i = 0; i < links.length; i++)
    links[i].addEventListener('click', (event) => {
      const targetRoute = event.currentTarget.getAttribute('href');
      if (targetRoute.startsWith('http') || targetRoute.startsWith('mailto')) return;
      event.preventDefault();
      history.pushState(null, null, targetRoute);
      renderContent(targetRoute.split('/')[1]);
    });

  new ResizeObserver(() => {
    rootElement.style.setProperty('--events-slider-wrapper-width', eventsSliderWrapper.scrollWidth + 'px');
  }).observe(eventsSliderWrapper);

  document.addEventListener("scroll", (event) => {
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

      eventsSliderWrappers[i].style.transform = `scale(${1 - absoluteValue / 10})`;
      eventsSliderWrappers[i].style.opacity = 1 - absoluteValue / 2;

      if (sliderRect.left < windowInnerWidth / 2 && sliderRect.right > windowInnerWidth / 2) {
        document.querySelector('.each-event-slider-active').classList.remove('each-event-slider-active');
        eventsSliderWrappers[i].classList.add('each-event-slider-active');
        document.querySelector('.each-event-slider-bullet-filled').classList.remove('each-event-slider-bullet-filled');
        eventsSliderBullets[i].classList.add('each-event-slider-bullet-filled');
        sliderIndex = i;
      }
    };

    eventsSliderWrapper.scrollTo(windowScrollY, 0);
  });

  document.addEventListener('click', (event) => {
    if (event.target.closest('.each-event-slider-bullet')) {
      window.scrollTo(0, (eventsSliderWrapper.scrollWidth - eventsSliderWrapper.offsetWidth) * (event.target.dataset.index / 4));
    };

    if (event.target.classList.contains('each-event-page-wrapper') || event.target.closest('.each-event-page-close-button')) {
      history.pushState(null, null, '/');
      renderContent('');
    };

    if (event.target.closest('.clickable-image-layer') && !event.target.closest('.clickable-image-big')) {
      clickableImageLayer.classList.add('display-none');
      htmlElement.classList.remove('disable-scroll');
    };

    if (event.target.closest('.clickable-image')) {
      clickableImageBig.src = event.target.src;
      clickableImageLayer.classList.remove('display-none');
      htmlElement.classList.add('disable-scroll');
    };

    if (event.target.closest('.each-event-page-switch-button')) {
      const isRightButton = event.target.closest('.each-event-page-switch-right-button');
      const newRoute = ROUTES[(ROUTES.indexOf(window.location.pathname.split('/')[1]) + (isRightButton ? 1 : -1) + 5) % ROUTES.length];
      history.pushState(null, null, newRoute);
      renderContent(newRoute);
    };
  });

  window.addEventListener('popstate', () => {
    renderContent(window.location.pathname.split('/')[1]);
  });

  renderContent(window.location.pathname.split('/')[1]);

  observeByClassNames(['.each-team-member-wrapper', '.each-motto-line', '.all-content-team-title']);

  window.scrollTo(0, 1);
});