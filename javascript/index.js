const closeButton = document.getElementById('close-navigation');
const openButton = document.getElementById('open-navigation');
const nav = document.getElementById('navigation');
const aboutEl = document.getElementById('about');
const techEl = document.getElementById('tech');
const projectEl = document.getElementById('project');
const contactEl = document.getElementById('contact');
const socialEl = document.getElementById('social');
const navNameEl = document.getElementById('navigation-name');


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

