// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Select all nav links
  const navLinks = document.querySelectorAll('header nav a');
  // Select the logo
  const logo = document.querySelector('.logo');

  // Function to handle color change on scroll
  function handleScroll() {
    const scrollY = window.scrollY;

    // If near the very top → white
    if (scrollY < window.innerHeight * 0.7) {
      navLinks.forEach(l => l.style.color = "white");
    } else {
      // Else (scrolled down to sections) → black
      navLinks.forEach(l => l.style.color = "black");
    }
    console.log("I am running");
  }

  // Navigation link click handlers
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');

      if (href && href.startsWith('#')) {
        e.preventDefault();

        const targetSection = document.querySelector(href);

        if (targetSection) {
          targetSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
        }

        // Make ALL nav links black after clicking
        navLinks.forEach(l => l.style.color = "black");
      }
    });
  });

  // Logo click → scroll to top + reset colors
  if (logo) {
    logo.addEventListener('click', (e) => {
      e.preventDefault();

      // Smooth scroll to top
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });

      // Reset all nav link colors to white when at top
      navLinks.forEach(l => l.style.color = "white");
      console.log("Scrolled to top + navbar colors reset");
    });
  }

  // Run handleScroll once at load
  handleScroll();

  // Listen to scroll event with throttling for better performance
  let ticking = false;
  
  function requestTick() {
    if (!ticking) {
      requestAnimationFrame(() => {
        handleScroll();
        ticking = false;
      });
      ticking = true;
    }
  }

  window.addEventListener('scroll', requestTick);
});