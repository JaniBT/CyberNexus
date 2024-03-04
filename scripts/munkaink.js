// háttérkép változtató gomb

const bg_button = document.querySelector('#backgroundChanger')
const bg_changer_div = document.querySelector('.bg-changing')
let changer = true
bg_button.onclick = function(e) {
    if (changer) {
        bg_changer_div.style.transform = "translateY(-87%)"
        changer = false
    } else {
        bg_changer_div.style.transform = "translateY(87%)"
        changer = true
    }
    
}

const bg_default = document.querySelector('#bg_default')
const bg_secondary = document.querySelector('#bg_secondary')
const bg_third = document.querySelector('#bg_third')
const desktop_bg = document.querySelector('.desktop-view')

function background_changing(index) {
    switch (index) {
        case 0:
            desktop_bg.style.background = "url('../assets/images/munkaink-bg-default.jpg') center/cover no-repeat"
            break
        case 1:
            desktop_bg.style.background = "url('../assets/images/second_bg_body.jpg') center/cover no-repeat"
            break
        case 2:
            desktop_bg.style.background = "url('../assets/images/third_bg_body.jpg') center/cover no-repeat"
            break
    }
}

bg_default.onclick = () => { background_changing(0) }
bg_secondary.onclick = () => { background_changing(1) }
bg_third.onclick = () => { background_changing(2) }

// menü nyitó gomb

const fomenu_gomb = document.querySelector('#fomenu')
const menu = document.querySelector('.menus')
let menunyito = true
fomenu_gomb.onclick = function() {
    if (menunyito) {
        menu.style.transform = "translate(-50%, -50%)"
        menunyito = false
    } else {
        menu.style.transform = "translate(-50%, 250%)"
        menunyito = true
    }
}