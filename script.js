const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add("show")
        } else {
            entry.target.classList.remove("show")
        }
    })
})


const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el))



  // Smooth Scroll

  $(document).ready(function() {
      
    $('a[href^="#"]').on('click', function(event) {
        event.preventDefault();
        var target = $(this.getAttribute('href'));
        if (target.length) {
          $('html, body').stop().animate({
            scrollTop: target.offset().top - 100
          }, 1000); 
        }
    });
  });

// Reseting Form values
const form = document.querySelector('#my-Form');

form.addEventListener('submit', () => {
    form.reset();
});

// Updating date 
const today = document.querySelectorAll('.today');

today.forEach(elem => {
    elem.textContent = new Date().toDateString();
})



// Get all the navigation links with the common class
const navLinks = document.querySelectorAll('.nav-link');

// Define options for the Intersection Observer
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.7, // Adjust this threshold for when the link becomes active
};

// Callback function for the Intersection Observer
function handleIntersection(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Remove the "active" class from all navigation links
      navLinks.forEach((link) => {
        link.classList.remove('active');
      });

      // Find the navigation link with the corresponding href
      const activeLink = document.querySelector(`[href="#${entry.target.id}"]`);
      
      // Add the "active" class to the active navigation link
      if (activeLink) {
        activeLink.classList.add('active');
      }
    }
  });
}

// Create an Intersection Observer instance
const sectionObserver = new IntersectionObserver(handleIntersection, observerOptions);

// Observe each section
navLinks.forEach((link) => {
  const targetId = link.getAttribute('href').substring(1); // Remove the "#" symbol
  const targetSection = document.getElementById(targetId);
  if (targetSection) {
    sectionObserver.observe(targetSection);
  }
});


// Toggle
const toggleBtn = document.querySelector('.hamburgerMenu');
const navLink = document.querySelector('.nav-links');
// const toggleClose = document.querySelector('.hamburgerMenuClose')

toggleBtn.addEventListener('click', () => {
  navLink.classList.toggle('open');
  // navLink.classList.toggle('close');
});
