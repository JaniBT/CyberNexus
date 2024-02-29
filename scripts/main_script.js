document.addEventListener('focus', () => {
    document.title = "CyberNexus 🥵"
})

document.addEventListener('blur', () => {
    document.title = "CyberNexus szomorú 😭"
})

function openNav() {
    document.getElementById("mySidebar").style.transform = "translateX(0)"
}

function closeNav() {
    document.getElementById("mySidebar").style.transform = "translateX(100%)"
}

// Get the height of the viewport
const viewportHeight = window.innerHeight || document.documentElement.clientHeight;

// Function to scroll the page to a specific position
function scrollToPosition(position) {
  window.scrollTo({
    top: position,
    behavior: 'smooth' // Use smooth scrolling animation
  });
}

// Scroll the page by one viewport height
function scrollOneViewport() {
  scrollToPosition(viewportHeight);
}

// Call the scrollOneViewport function when a button is clicked, for example
document.querySelector('.scroll-button').addEventListener('click', scrollOneViewport);