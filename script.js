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

const wobbleElements = document.querySelectorAll('.card, .icon-content,.cvbtn');

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



