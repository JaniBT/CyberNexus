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

const munkak_dropdown = document.querySelector('#munkaim')

munkak_dropdown.addEventListener('change', e => {
    if (parseInt(munkak_dropdown.value) === 0) {
        window.open('../subpages/munkaink.html', '_parent')
    }
})