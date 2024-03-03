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