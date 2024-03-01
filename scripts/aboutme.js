var buttons = document.querySelectorAll('.aboutme-social-icon')
var delay = 500

function showButtons() {
  buttons.forEach(function(button, index) {
    setTimeout(start, 500)
    function start() {
        setTimeout(function() {
            button.classList.remove('hidden')
          }, delay * index)
        }
    })
}

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    
    if (entry.isIntersecting) {
      showButtons()
      
      observer.unobserve(entry.target);
    }
  });
});

const elements = document.querySelectorAll('.aboutme-social-icon');

// Observe each element
elements.forEach(element => {
  observer.observe(element);
});

const scrollToTop = document.querySelector('#vissza-fel')

scrollToTop.onclick = (e) => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

window.addEventListener('scroll', e => {
  if (window.scrollY > 100) {
    scrollToTop.classList.remove("hidden-button")
  } else {
    scrollToTop.classList.add("hidden-button")
  }
})