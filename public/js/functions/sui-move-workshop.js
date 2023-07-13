const observer3 = new IntersectionObserver((entries) => {
  const statsElements = document.querySelectorAll('.each-sui-first-left-event-stats-number');

  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      increaseNumbers(statsElements, ['+40', '+10', '1']);
      observer3.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

window.addEventListener('load', () => {
  observer3.observe(document.querySelector('.all-sui-first-left-event-stats-wrapper'));
});