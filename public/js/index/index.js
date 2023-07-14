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

window.addEventListener('load', () => {
  history.scrollRestoration = "manual";

  let sliderIndex = 0;
  const root = document.querySelector(':root');
  const eventsSliderWrapper = document.querySelector('.events-slider-wrapper');
  const eventsSliderOuterWrapper = document.querySelector('.events-slider-outer-wrapper');
  const eventsSliderWrappers = document.querySelectorAll('.each-event-slider-wrapper');
  const eventsSliderBullets = document.querySelectorAll('.each-event-slider-bullet');
  const allHeaderWrapper = document.querySelector('.all-header-wrapper');
  const spotTopRectangles = document.querySelectorAll('.each-spot-rectangle-top');
  const spotBottomRectangles = document.querySelectorAll('.each-spot-rectangle-bottom');
  const hashLocations = {
    '#cryptist': document.querySelector('.all-cryptist-wrapper'),
    '#sui-move-workshop': document.querySelector('.all-sui-move-workshop-wrapper'),
    '#aleo-tour-of-turkiye': document.querySelector('.all-aleo-tour-of-turkiye-wrapper'),
    '#nym-community-gathering': document.querySelector('.all-nym-community-gathering-wrapper'),
    '#moda-palas': document.querySelector('.all-moda-palas-wrapper')
  };

  for (let i = 0; i < hashLocations.length; i++)
    eventPages.push(document.querySelector(`.all-${hashLocations[i].split('#')[1]}-wrapper`));

  document.addEventListener("scroll", (event) => {
    const windowScrollY = window.scrollY;
    const scrollWidth = eventsSliderWrapper.scrollWidth;
    const allHeaderWrapperHeight = allHeaderWrapper.offsetHeight;

    if (windowScrollY > scrollWidth - eventsSliderWrapper.offsetWidth) {
      root.style.setProperty('--events-slider-wrapper-width', scrollWidth + 'px');
      eventsSliderOuterWrapper.classList.add('events-slider-outer-wrapper-end');
    } else {
      eventsSliderOuterWrapper.classList.remove('events-slider-outer-wrapper-end');
    }

    for (let i = 0; i < 5; i++) {
      if (eventsSliderWrappers[i].getBoundingClientRect().left < window.innerWidth / 2 && eventsSliderWrappers[i].getBoundingClientRect().right > window.innerWidth / 2) {
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
      window.scrollTo(0, (eventsSliderWrapper.scrollWidth - eventsSliderWrapper.offsetWidth) * (event.target.dataset.index / 4))

    if (!event.target.closest('.all-cryptist-inner-wrapper') && !event.target.closest('.all-sui-move-workshop-inner-wrapper') && !event.target.closest('.all-aleo-tour-of-turkiye-inner-wrapper') && !event.target.closest('.all-nym-community-gathering-inner-wrapper') && !event.target.closest('.all-moda-palas-inner-wrapper'))
      location.hash = '#';
  });

  window.addEventListener('hashchange', () => {
    Object.keys(hashLocations).forEach((key) => hashLocations[key].style.display = 'none');

    if (Object.keys(hashLocations).includes(location.hash))
      hashLocations[location.hash].style.display = 'flex';
    else
      location.hash = '#';
  });
  window.dispatchEvent(new HashChangeEvent("hashchange"));

  new ResizeObserver(() => root.style.setProperty('--events-slider-wrapper-width', eventsSliderWrapper.scrollWidth + 'px')).observe(eventsSliderWrapper);

  for (let i = 0; i < spotTopRectangles.length; i++) {
    spotTopRectangles[i].style.animationDelay = i * -0.3 + 's';
    spotBottomRectangles[i].style.animationDelay = i * -0.3 + 's';
  }

  observeByClassNames(['.each-team-member-wrapper', '.each-motto-line', '.all-content-team-title']);
});