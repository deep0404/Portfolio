// Replace your entire script.js with this

document.addEventListener('DOMContentLoaded', function() {
  const header = document.querySelector('header');
  const navLinks = document.querySelectorAll('header nav a');
  const logo = document.querySelector('.logo');

  // --- This is the new, improved scroll handler ---
  function handleHeaderScroll() {
    // If user has scrolled more than 50px, add the .scrolled class
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      // Otherwise, remove it
      header.classList.remove('scrolled');
    }
  }

  // --- Click handlers for smooth scrolling ---
  // This helps ensure smooth scrolling works for all links
  const allLinks = document.querySelectorAll('a[href^="#"]');
  allLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Run the function once on page load
  handleHeaderScroll();

  // Add the scroll event listener
  window.addEventListener('scroll', handleHeaderScroll);
});