  // Get the carousel element
const myCarousel = document.getElementById('myTextCarousel');

// Create the Intersection Observer
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    // If the carousel is intersecting with the viewport
    if (entry.isIntersecting) {
      // Initialize and start the carousel
      // This is the Bootstrap 5 way of initializing
      const carousel = new bootstrap.Carousel(myCarousel, {
        interval: 5000, // Set the interval in milliseconds
        ride: 'carousel'
      });
      
      // We only need to do this once, so stop observing after it starts
      observer.unobserve(entry.target);
    }
  });
}, {
  // Options for the observer
  rootMargin: '0px', // No margin around the viewport
  threshold: 0.5 // Trigger when 50% of the carousel is visible
});

// Start observing the carousel element
observer.observe(myCarousel);

// Select elements you want to wobble (example: all .card and .icon-content)
const wobbleElements = document.querySelectorAll('.card, .icon-content,.cvbtn');

wobbleElements.forEach(el => {
  el.addEventListener('touchstart', function() {
    el.classList.remove('liquid-wobble'); // Reset if already animating
    void el.offsetWidth; // Force reflow
    el.classList.add('liquid-wobble');
  });

  // Optional: Remove the class after animation ends
  el.addEventListener('animationend', function() {
    el.classList.remove('liquid-wobble');
  });
});

// Add wobble effect to the navbar logo
const navbarLogo = document.querySelector('.navbar-brand img');
if (navbarLogo) {
  navbarLogo.addEventListener('touchstart', function() {
    navbarLogo.classList.remove('liquid-wobble');
    void navbarLogo.offsetWidth;
    navbarLogo.classList.add('liquid-wobble');
  });
  navbarLogo.addEventListener('animationend', function() {
    navbarLogo.classList.remove('liquid-wobble');
  });
}

document.querySelectorAll('.cvbtn').forEach(btn => {
  btn.addEventListener('click', e => {
    btn.classList.add('active-hold');
    setTimeout(() => btn.classList.remove('active-hold'), 1000); // 0.5s hold
  });
});

