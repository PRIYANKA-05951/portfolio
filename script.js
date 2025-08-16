// Hamburger menu toggle
const menuBtn = document.getElementById('menu-btn');
const navList = document.getElementById('nav-list');
menuBtn.onclick = () => {
  navList.classList.toggle('active');
};

// Theme toggle (light/dark switch)
themeBtn.addEventListener('click', function() {
  if (document.body.classList.contains('dark-theme')) {
    document.body.classList.remove('dark-theme');
    document.body.classList.add('light-theme');
    themeBtn.innerHTML = '<i class="fa fa-moon"></i>';
  } else {
    document.body.classList.remove('light-theme');
    document.body.classList.add('dark-theme');
    themeBtn.innerHTML = '<i class="fa fa-sun"></i>';
  }

  // Update SVG logo color
  let lightText = document.querySelector('.logo-text-light');
  let darkText = document.querySelector('.logo-text-dark');
  if (document.body.classList.contains('dark-theme')) {
    if (lightText) lightText.style.display = 'none';
    if (darkText) darkText.style.display = '';
  } else {
    if (lightText) lightText.style.display = '';
    if (darkText) darkText.style.display = 'none';
  }
});

// Typewriter effect
const typewriterStrings = [
  "Welcome to my portfolio!",
  "I'm PRIYANKA, a student @ CAIAS",
  "Explore my journey."
];
let typewriterIndex = 0, charIndex = 0, currentString = typewriterStrings[typewriterIndex];
const typewriterElem = document.getElementById('typewriter');
function typeWriter() {
  if(typewriterElem && charIndex < currentString.length) {
    typewriterElem.textContent += currentString.charAt(charIndex);
    charIndex++;
    setTimeout(typeWriter, 65);
  } else if(typewriterElem) {
    setTimeout(() => {
      typewriterElem.textContent = "";
      typewriterIndex = (typewriterIndex + 1) % typewriterStrings.length;
      currentString = typewriterStrings[typewriterIndex];
      charIndex = 0;
      typeWriter();
    }, 1420);
  }
}
if(typewriterElem) typeWriter();
