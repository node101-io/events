const CLASSES_TO_OBSERVE = {
  'cryptist': '.each-cryptist-first-left-event-stats-number',
  'sui-move-workshop': '.each-sui-first-left-event-stats-number',
  'aleo-tour-of-turkiye': '.each-aleo-first-left-event-stats-number'
};

function createNumberIncreaseObserver(route) {
  const className = CLASSES_TO_OBSERVE[route];

  const observer = new IntersectionObserver(entries => {
    const statsElements = document.querySelectorAll(className);

    entries.forEach(entry => {
      if (entry.isIntersecting) {
        increaseNumbers(statsElements);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  observer.observe(document.querySelector(className));
};

function increaseNumber(element, number, i, indent) {
  if (i <= number) {
    element.innerHTML = (indent ? '+' : '') + i;
    setTimeout(() => increaseNumber(element, number, i + 1, indent), 500 / (number - i + 1));
  }
};

function increaseNumbers(elements) {
  for (let m = 0; m < elements.length; m++) {
    const numberAsString = elements[m].dataset.stats;

    let indent = false;

    if (numberAsString.includes('+'))
      indent = true;

    increaseNumber(elements[m], Number(numberAsString), 0, indent);
  }
};
