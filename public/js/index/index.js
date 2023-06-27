window.addEventListener('load', () => {
  const sliders = document.querySelectorAll('.each-event-slider-wrapper');
  const bullets = document.querySelectorAll('.each-event-slider-bullet');
  let sliderIndex = 0;
  let dontCheckScroll = false;
  let dontCheckClick = false;

  const handleScroll = (event) => {
    event.preventDefault();
    event.stopPropagation();

    if (dontCheckScroll) return;
    dontCheckScroll = true;
    setTimeout(() => {
      dontCheckScroll = false;
    }, 1000);

    if (event.wheelDeltaY < 0 && sliderIndex == sliders.length - 1) {
      document.removeEventListener('wheel', handleScroll, { passive: false });
      return;
    };

    const active = document.getElementById('each-event-slider-active');
    const leftBack = document.getElementById('each-event-slider-left-back');
    const rightBack = document.getElementById('each-event-slider-right-back');

    if (event.wheelDeltaY < 0) {
      if (sliderIndex == sliders.length - 1) return;

      active.id = '';
      rightBack.id = '';

      sliderIndex++;

      sliders[sliderIndex].id = 'each-event-slider-active';
      sliders[sliderIndex - 1].id = 'each-event-slider-left-back';
      if (sliders[sliderIndex + 1])
        sliders[sliderIndex + 1].id = 'each-event-slider-right-back';

      const range = document.querySelector('.each-event-slider-image').offsetWidth + 180;
      document.querySelector('.events-slider-wrapper').scrollBy(range, 0)

      if (bullets[sliderIndex]) {
        bullets[sliderIndex].classList.add('each-event-slider-bullet-filled');
        bullets[sliderIndex - 1].classList.remove('each-event-slider-bullet-filled');
      }
    } else {
      if (sliderIndex == 0) return;

      active.id = '';
      leftBack.id = '';

      sliderIndex--;

      sliders[sliderIndex].id = 'each-event-slider-active';
      sliders[sliderIndex + 1].id = 'each-event-slider-right-back';
      if (sliders[sliderIndex - 1])
        sliders[sliderIndex - 1].id = 'each-event-slider-left-back';

      const range = document.querySelector('.each-event-slider-image').offsetWidth + 180;
      document.querySelector('.events-slider-wrapper').scrollBy(range * -1, 0)

      if (bullets[sliderIndex]) {
        bullets[sliderIndex].classList.add('each-event-slider-bullet-filled');
        bullets[sliderIndex + 1].classList.remove('each-event-slider-bullet-filled');
      }
    };
  };

  if (!window.scrollY)
    document.addEventListener("wheel", handleScroll, { passive: false });

  window.addEventListener('click', (event) => {
    if (event.target.classList.contains('each-event-slider-bullet')) {
      if (dontCheckClick) return;
      dontCheckClick = true;
      setTimeout(() => {
        dontCheckClick = false;
      }, 1000);

      const oldSliderIndex = sliderIndex;
      for (let i = 0; i < bullets.length; i++) {
        if (bullets[i] == event.target) {
          sliderIndex = i;
          break;
        };
      }

      const active = document.getElementById('each-event-slider-active');
      const leftBack = document.getElementById('each-event-slider-left-back');
      const rightBack = document.getElementById('each-event-slider-right-back');

      active.id = '';
      if (leftBack) leftBack.id = '';
      if (rightBack) rightBack.id = '';

      sliders[sliderIndex].id = 'each-event-slider-active';
      if (sliders[sliderIndex - 1])
        sliders[sliderIndex - 1].id = 'each-event-slider-left-back';
      if (sliders[sliderIndex + 1])
        sliders[sliderIndex + 1].id = 'each-event-slider-right-back';

      const range = (document.querySelector('.each-event-slider-image').offsetWidth + 180) * (sliderIndex - oldSliderIndex);
      document.querySelector('.events-slider-wrapper').scrollBy(range, 0);

      document.querySelector('.each-event-slider-bullet-filled').classList.remove('each-event-slider-bullet-filled');
      bullets[sliderIndex].classList.add('each-event-slider-bullet-filled');
    };
  });

  document.querySelectorAll('.each-spot-rectangle-top').forEach((rectangle, index) => {
    rectangle.style.animationDelay = `calc(${index} * 0.3s)`;
  });
  document.querySelectorAll('.each-spot-rectangle-bottom').forEach((rectangle, index) => {
    rectangle.style.animationDelay = `calc(${index} * 0.3s)`;
  });
  document.querySelectorAll('.each-team-member-wrapper').forEach((member, index) => {
    member.style.animationDelay = `calc(${index} * 0.3s)`;
  });



  const mottoLines = document.querySelectorAll('.each-motto-line');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('item-appear-animation');
        observer.unobserve(entry.target);
      }
    });
  });

  for (let i = 0; i < mottoLines.length; i++) {
    observer.observe(mottoLines[i]);
  }
  observer.observe(document.querySelector('.all-content-team-members-wrapper'));
});
