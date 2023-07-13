function createNumberIncreaseObserver(classname, numbers) {
  const observer = new IntersectionObserver((entries) => {
    const statsElements = document.querySelectorAll(classname);

    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        increaseNumbers(statsElements, numbers);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  return observer;
};

function increaseNumber(element, number, i, indent) {
  if (i <= number) {
    element.innerHTML = (indent ? '+' : '') + i;
    setTimeout(() => increaseNumber(element, number, i + 1, indent), 500 / (number - i + 1));
  }
};

function increaseNumbers(elements, numbers) {
  for (let m = 0; m < elements.length; m++) {
    let indent = false;
    if (numbers[m].includes('+')) indent = true;

    increaseNumber(elements[m], Number(numbers[m]), 0, indent);
  }
};
