/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const navbarList = document.getElementById("navbar__list");
const numSection = document.querySelectorAll("section");
let liSection;
let aHarf;


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/
// build the nav
//bulid the Unorder list by loop
for (let i = 1; i < numSection.length + 1; i++) {
  liSection = document.createElement("li");
  aHarf = document.createElement("a");
  aHarf.setAttribute("href", "#section" + i);
  aHarf.setAttribute("class", "menu__link");
  aHarf.textContent = 'Section ' + i;
  liSection.appendChild(aHarf);
  navbarList.appendChild(liSection);
}
//To compare with the section active in Add and Remove function
let sections = document.querySelectorAll("a");


// Add class 'active' to section when near top of viewport
function bounding(section){
  return Math.floor(section.getBoundingClientRect().top);
}
//remove active to nav and section
function removeActive(section) {
  section.classList.remove('your-active-class');
  for (let i = 0; i < numSection.length; i++) {
    if (section == numSection[i]) {
      sections[i].classList.remove("active");
    }
  }
}
//Add active to nav and section
function addActive(consditional, section) {
  if (consditional) {
    section.classList.add('your-active-class');
    for (let i = 0; i < numSection.length; i++) {
      if (section == numSection[i]) {
        sections[i].classList.add("active");
      }
    }
  }
}

/**
 * End Main Functions
 * Begin Events
 * 
*/
// Build menu 

// Scroll to section on link click
function scorllToSection() {
  const links = document.querySelectorAll('.navar__menu li');
  links.forEach(link => {
    link.addEventListener('click', () => {
      for (i = 0; i < numSection; i++) {
        numSection[i].addEventListener("click", sectionscroll(link));
      }
    });
  });
}
scorllToSection();

// Set sections as active
function sectionActive(){
  numSection.forEach(section => {
    const item = bounding(section);
    inviewport = () => item < 200 && item >= -200;
    removeActive(section);
    addActive(inviewport(), section);
  });
}
window.addEventListener('scroll', sectionActive);

