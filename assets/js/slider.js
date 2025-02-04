
  /* Testimonial JS */
  document.addEventListener('DOMContentLoaded', function (){
    const swiper = new Swiper('.unique', {
      slidesPerView: 1,
      spaceBetween: 0,
      loop: true,
      navigation: {
          nextEl: '#slider-previous-unique',
          prevEl: '#slider-next-unique',
      },
    });
  });

  


/* Header Menu */
  
document.getElementById('mobileMenuButton').addEventListener('click', function () {
    var mobileMenu = document.getElementById('mobileMenu');
    var menuOpenIcon = document.getElementById('menuOpenIcon');
    var menuCloseIcon = document.getElementById('menuCloseIcon');

    // Toggle mobile menu visibility
    if (mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.remove('hidden');
        menuOpenIcon.classList.add('hidden');
        menuCloseIcon.classList.remove('hidden');
    } else {
        mobileMenu.classList.add('hidden');
        menuOpenIcon.classList.remove('hidden');
        menuCloseIcon.classList.add('hidden');
    }
});




document.addEventListener("DOMContentLoaded", function () {
    let progressBars = document.querySelectorAll(".progress-bar");

    let observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                let percentage = entry.target.textContent.trim(); // Get the percentage from text
                entry.target.style.width = percentage; // Set width dynamically
            }
        });
    }, { threshold: 0.5 });

    progressBars.forEach(progressBar => observer.observe(progressBar));
});




// Get the button and icon
// Get the button
const goToTopBtn = document.getElementById("goToTopBtn");

// Show the button when scrolling down 100px
window.onscroll = function () {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        goToTopBtn.classList.remove("hidden");
        goToTopBtn.classList.add("opacity-100");
    } else {
        goToTopBtn.classList.add("hidden");
        goToTopBtn.classList.remove("opacity-100");
    }
};

// Scroll to the top when the button is clicked
goToTopBtn.onclick = function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};
