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
  const eventaSliderWrappers = document.querySelectorAll('.each-event-slider-wrapper');
  const eventsSliderBullets = document.querySelectorAll('.each-event-slider-bullet');
  const allHeaderWrapper = document.querySelector('.all-header-wrapper');
  const spotTopRectangles = document.querySelectorAll('.each-spot-rectangle-top');
  const spotBottomRectangles = document.querySelectorAll('.each-spot-rectangle-bottom');


  document.addEventListener("scroll", () => {
    const windowScrollY = window.scrollY;
    const scrollWidth = eventsSliderWrapper.scrollWidth;
    const allHeaderWrapperHeight = allHeaderWrapper.offsetHeight;

    if (windowScrollY > scrollWidth - eventsSliderWrapper.offsetWidth + allHeaderWrapperHeight) {
      root.style.setProperty('--events-slider-wrapper-width', scrollWidth + 'px');
      eventsSliderOuterWrapper.classList.add('events-slider-outer-wrapper-end');
    } else {
      eventsSliderOuterWrapper.classList.remove('events-slider-outer-wrapper-end');
    }

    for (let i = 0; i < 5; i++) {
      if (eventaSliderWrappers[i].getBoundingClientRect().left < window.innerWidth / 2 && eventaSliderWrappers[i].getBoundingClientRect().right > window.innerWidth / 2) {
        document.querySelector('.each-event-slider-active').classList.remove('each-event-slider-active');
        eventaSliderWrappers[i].classList.add('each-event-slider-active');
        document.querySelector('.each-event-slider-bullet-filled').classList.remove('each-event-slider-bullet-filled');
        eventsSliderBullets[i].classList.add('each-event-slider-bullet-filled');
        sliderIndex = i;
        break;
      }
    }

    eventsSliderWrapper.scrollTo(windowScrollY > allHeaderWrapperHeight ? windowScrollY - allHeaderWrapperHeight : 0, 0);
  });

  document.addEventListener('click', (event) => {
    if (event.target.classList.contains('each-event-slider-bullet'))
      window.scrollTo(0, (eventsSliderWrapper.scrollWidth - eventsSliderWrapper.offsetWidth) * (event.target.dataset.index / 4) + allHeaderWrapper.offsetHeight)
  });


  window.addEventListener('hashchange', () => {
    if (location.hash == '#cryptist' || location.hash == '#sui-move-workshop' || location.hash == '#aleo-tour-of-turkiye' || location.hash == '#nym-community-gathering' || location.hash == '#moda-palas')
      document.querySelector(`.all-${location.hash.split('#')[1]}-wrapper`).style.display = 'flex';
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