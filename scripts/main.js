const nav = document.querySelector('.nav');
const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;

const orchid = document.querySelector('.orchid');

const stickyNav = function (entries) {
  const [entry] = entries;
  if (entry.isIntersecting) {
    nav.classList.remove('sticky');
    nav.classList.add('nav--hidden');
  } else {
    nav.classList.add('sticky');
    nav.classList.remove('nav--hidden');
  }
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight+80}px`,
});
headerObserver.observe(header);

orchid.addEventListener('click', event => {
  window.location = "plant-detail.html";
});

// // Reveal sections
// const allSections = document.querySelectorAll('.section');

// const revealSection = function (entries, observer) {
//   const [entry] = entries;

//   if (!entry.isIntersecting) return;

//   entry.target.classList.remove('section--hidden');
//   observer.unobserve(entry.target);
// };

// const sectionObserver = new IntersectionObserver(revealSection, {
//   root: null,
//   threshold: 0.15,
// });

// allSections.forEach(section => {
//   sectionObserver.observe(section);
//   // section.classList.add('section--hidden');
// });