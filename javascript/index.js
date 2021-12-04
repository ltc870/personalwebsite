const closeButton = document.querySelector('.close-navigation');
const openButton = document.querySelector('.open-navigation');
const nav = document.querySelector('.navigation');
const aboutEl = document.querySelector('.about');
const techEl = document.querySelector('.tech');
const projectEl = document.querySelector('.project');
const contactEl = document.querySelector('.contact');
const socialEl = document.querySelector('.social');
const navNameEl = document.querySelector('.navigation-name');


closeButton.addEventListener("click", () => {
  nav.classList.remove('navigation-open');
});

openButton.addEventListener("click", () => {
  nav.classList.add('navigation-open');
});

navNameEl.addEventListener("click", () => {
  scrollTo({top: 0, left: 0, behavior: "smooth"});
});

aboutEl.addEventListener("click", () => {
  nav.classList.remove('navigation-open');
  scrollTo({top:250, left: 0, behavior: "smooth"});
});

techEl.addEventListener("click", () => {
  nav.classList.remove('navigation-open');
  scrollTo({top: 840, left: 0, behavior: "smooth"});
});

projectEl.addEventListener("click", () => {
  nav.classList.remove('navigation-open');
  scrollTo({top: 1275, left: 0, behavior: "smooth"});
});

contactEl.addEventListener("click", () => {
  nav.classList.remove('navigation-open');
  scrollTo({top: 3000, left: 0, behavior: "smooth"});
});

socialEl.addEventListener("click", () => {
  nav.classList.remove('navigation-open');
  scrollTo({top: 3000, left: 0, behavior: "smooth"});
});