const myCarousel = document.getElementById('myTextCarousel');


const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {

      const carousel = new bootstrap.Carousel(myCarousel, {
        interval: 5000,
        ride: 'carousel'
      });
      

      observer.unobserve(entry.target);
    }
  });
}, {

  rootMargin: '0px',
  threshold: 0.5
});


observer.observe(myCarousel);

const wobbleElements = document.querySelectorAll('.card, .icon-content,.navbar,.navbar-brand img');

wobbleElements.forEach(el => {
  el.addEventListener('touchstart', function() {
    el.classList.remove('liquid-wobble');
    void el.offsetWidth;
    el.classList.add('liquid-wobble');
  });

 
  el.addEventListener('animationend', function() {
    el.classList.remove('liquid-wobble');
  });
});

// const lenis = new Lenis({
//   duration: 1.2, // How long the "glide" lasts
//   easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom easing function
//   smoothWheel: true,
// })

// function raf(time) {
//   lenis.raf(time)
//   requestAnimationFrame(raf)
// }

// requestAnimationFrame(raf)


