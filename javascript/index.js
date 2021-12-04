const closeButton = document.querySelector('.close-navigation');
const openButton = document.querySelector('.open-navigation');
const nav = document.querySelector('.navigation');
const aboutEl = document.querySelector('.about')
const techEl = document.querySelector('.tech')
const projectEl = document.querySelector('.project')
const contactEl = document.querySelector('.contact')
const socialEl = document.querySelector('.social')


closeButton.addEventListener("click", () => {
  nav.classList.remove('navigation-open');
});

openButton.addEventListener("click", () => {
  nav.classList.add('navigation-open');
})