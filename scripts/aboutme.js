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


const anim1 = document.querySelectorAll('.anim1')
const anim2 = document.querySelectorAll('.anim2')

function addAnimation() {
  anim1.forEach(anim => {
    anim.classList.add('animate1')
  })
  anim2.forEach(anim => {
    anim.classList.add('animate2')
  })
}

const observe2 = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      addAnimation()
    }
  })
})

anim1.forEach(anim => {
  observe2.observe(anim)
})