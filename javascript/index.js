const closeButton = document.querySelector('.close-navigation');
const openButton = document.querySelector('.open-navigation');
const nav = document.querySelector('.navigation');
const aboutEl = document.querySelector('.about');
const techEl = document.querySelector('.tech');
const projectEl = document.querySelector('.project');
const contactEl = document.querySelector('.contact');
const socialEl = document.querySelector('.social');
const navNameEl = document.querySelector('.navigation-name');
const mediaQuery1 = window.matchMedia('(min-width: 600px)');
const mediaQuery2 = window.matchMedia('(min-width: 1000px)');

// To close the navigation window
closeButton.addEventListener("click", () => {
  nav.classList.remove('navigation-open');
});

// To add the navigation window
openButton.addEventListener("click", () => {
  nav.classList.add('navigation-open');
});

// When the "navigation-name" is clicked, the browser will scroll to the top.
navNameEl.addEventListener("click", () => {
  scrollTo({top: 0, left: 0, behavior: "smooth"});
});

// When the "about" link is clicked, then the browser will scroll to the "about" section
aboutEl.addEventListener("click", () => {
  nav.classList.remove('navigation-open');
});

// When the "technology" link is clicked, then the browser will scroll to the "technology" section
techEl.addEventListener("click", () => {
  nav.classList.remove('navigation-open');
});

// When the "project" link is clicked, then the browser will scroll to the "project" section
projectEl.addEventListener("click", () => {
  nav.classList.remove('navigation-open');
});

// When the "contact" link is clicked, then the browser will scroll to the "contact" section
contactEl.addEventListener("click", () => {
  nav.classList.remove('navigation-open');
});

// When the "contact" link is clicked, then the browser will scroll to the "contact" section
socialEl.addEventListener("click", () => {
  nav.classList.remove('navigation-open');
});

