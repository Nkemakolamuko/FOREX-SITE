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