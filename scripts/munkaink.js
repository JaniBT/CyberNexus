// háttérkép változtató gomb

const bg_button = document.querySelector('#backgroundChanger')
const bg_changer_div = document.querySelector('.bg-changing')
let changer = true
bg_button.onclick = function(e) {
    if (changer) {
        bg_changer_div.style.transform = "translateY(-87%)"
        changer = false
    } else {
        bg_changer_div.style.transform = "translateY(387%)"
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

const lumar_gomb = document.querySelector('#lumar')
const lumar_menu = document.querySelector('.lumar-menu')

lumar_gomb.onclick = (e) => {
    menu.style.transform = "translate(-50%, 250%)"
    menunyito = true
    setTimeout(() => {
        lumar_menu.style.transform = "translate(-50%, -50%)"
    }, 1000)
    
    
}

const lumar_exit = document.querySelector('.exit')
lumar_exit.onclick = (e) => {
    lumar_menu.style.transform = "translate(-250%, -50%)"
}

const lenon_menu = document.querySelector('.lenon-menu')
const lenon_gomb = document.querySelector('#lenon')
lenon_gomb.onclick = (e) => {
    menu.style.transform = "translate(-50%, 250%)"
    menunyito = true
    setTimeout(() => {
        lenon_menu.style.transform = "translate(-50%, -50%)"
    })
}

const lenon_exit = document.querySelector('.exit-lenon')
lenon_exit.onclick = (e) => {
    lenon_menu.style.transform = "translate(-250%, -50%)"
}


const roxfort_menu = document.querySelector('.roxfort-menu')
const roxfort_exit = document.querySelector('#roxfort-exit')
const roxfort_gomb = document.querySelector('#roxfort')

roxfort_gomb.onclick = (e) => {
    menu.style.transform = "translate(-50%, 250%)"
    menunyito = true
    setTimeout(() => {
        roxfort_menu.style.transform = "translate(-50%, -50%)"
    })
}

roxfort_exit.onclick = (e) => {
    roxfort_menu.style.transform = "translate(-250%, -50%)"
}

const darts_gomb = document.querySelector('#darts')
const darts_exit = document.querySelector('#darts-exit')
const darts_menu = document.querySelector('.darts-menu')

darts_gomb.onclick = (e) => {
    menu.style.transform = "translate(-50%, 250%)"
    menunyito = true
    setTimeout(() => {
        darts_menu.style.transform = "translate(-50%, -50%)"
    })
}

darts_exit.onclick = (e) => {
    darts_menu.style.transform = "translate(-250%, -50%)"
}