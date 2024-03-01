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

showButtons()