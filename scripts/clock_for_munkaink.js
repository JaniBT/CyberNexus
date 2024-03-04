// óra a jobbalsó sarokba

function clock() {
    let now = new Date()
    let hours = now.getHours()
    let minutes = now.getMinutes()
    
    hours = hours.toString().padStart(2, '0')
    minutes = minutes.toString().padStart(2, '0')

    let timeformat = hours + ':' + minutes

    document.querySelector('#time').textContent = timeformat

    let day = now.getDate()
    let month = now.getMonth() + 1
    let year = now.getFullYear()

    let dateformat = day + '/' + month + '/' + year

    document.querySelector('#date').textContent = dateformat
}

setInterval(clock, 1000)