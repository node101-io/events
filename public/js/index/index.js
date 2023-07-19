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
    document.querySelector(`.all-${ROUTES[i]}-wrapper`).style.display = ROUTES[i] == route ? 'flex' : 'none';
};

window.addEventListener('load', () => {
  const links = document.querySelectorAll('a');
  for (let i = 0; i < links.length; i++)
    links[i].addEventListener('click', (event) => {
      const targetRoute = event.currentTarget.getAttribute('href');
      if (targetRoute.startsWith('http') || targetRoute.startsWith('mailto')) return;
      event.preventDefault();
      history.pushState(null, null, targetRoute);
      renderContent(targetRoute.split('/')[1]);
    });

  const clickableImages = document.querySelectorAll('.clickable-image');
  const clickableImageBig = document.querySelector('.clickable-image-big');
  const clickableImageLayer = document.querySelector('.clickable-image-layer');

  clickableImageLayer.addEventListener('click', (event) => {
    clickableImageLayer.classList.add('display-none');
    document.querySelector('html').classList.remove('disable-scroll');
  });

  for (let i = 0; i < clickableImages.length; i++)
    clickableImages[i].addEventListener('click', (event) => {
      clickableImageBig.src = event.currentTarget.src;
      clickableImageLayer.classList.remove('display-none');
      document.querySelector('html').classList.add('disable-scroll');
    });

  let sliderIndex = 0;
  const root = document.querySelector(':root');
  const eventsSliderWrapper = document.querySelector('.events-slider-wrapper');
  const eventsSliderOuterWrapper = document.querySelector('.events-slider-outer-wrapper');
  const eventsSliderWrappers = document.querySelectorAll('.each-event-slider-wrapper');
  const eventsSliderBullets = document.querySelectorAll('.each-event-slider-bullet');

  new ResizeObserver(() => root.style.setProperty('--events-slider-wrapper-width', eventsSliderWrapper.scrollWidth + 'px')).observe(eventsSliderWrapper);

  document.addEventListener("scroll", (event) => {
    const windowScrollY = window.scrollY;
    const scrollWidth = eventsSliderWrapper.scrollWidth;
    const windowInnerWidth = window.innerWidth;

    if (windowScrollY > scrollWidth - eventsSliderWrapper.offsetWidth) {
      root.style.setProperty('--events-slider-wrapper-width', scrollWidth + 'px');
      eventsSliderOuterWrapper.classList.add('events-slider-outer-wrapper-end');
    } else {
      eventsSliderOuterWrapper.classList.remove('events-slider-outer-wrapper-end');
    }

    for (let i = 0; i < 5; i++) {
      const sliderPositionLeft = eventsSliderWrappers[i].getBoundingClientRect().left;
      const sliderPositionRight = eventsSliderWrappers[i].getBoundingClientRect().right;

      if (sliderPositionLeft < windowInnerWidth / 2 && sliderPositionRight > windowInnerWidth / 2) {
        document.querySelector('.each-event-slider-active').classList.remove('each-event-slider-active');
        eventsSliderWrappers[i].classList.add('each-event-slider-active');
        document.querySelector('.each-event-slider-bullet-filled').classList.remove('each-event-slider-bullet-filled');
        eventsSliderBullets[i].classList.add('each-event-slider-bullet-filled');
        sliderIndex = i;
        break;
      }
    }

    eventsSliderWrapper.scrollTo(windowScrollY, 0);
  });

  document.addEventListener('click', (event) => {
    if (event.target.classList.contains('each-event-slider-bullet'))
      window.scrollTo(0, (eventsSliderWrapper.scrollWidth - eventsSliderWrapper.offsetWidth) * (event.target.dataset.index / 4));

    if (event.target.classList.contains('each-event-page-wrapper')) {
      history.pushState(null, null, '/');
      renderContent('');
    };
  });

  window.addEventListener('popstate', () => renderContent(window.location.pathname.split('/')[1]));
  renderContent(window.location.pathname.split('/')[1]);

  observeByClassNames(['.each-team-member-wrapper', '.each-motto-line', '.all-content-team-title']);
});