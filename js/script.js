let red = document.querySelector('.svetofor_red')
let yellow = document.querySelector('.svetofor_yellow')
let green = document.querySelector('.svetofor_green')

const chenge_collor_red = function () {
    red.style.background = 'red';
    yellow.style.background = 'none';
    green.style.background = 'none'
}
const chenge_collor_yellow = function () {
    yellow.style.background = 'yellow';
    red.style.background = 'none';
    green.style.background = 'none'
}
const chenge_collor_green = function () {
    green.style.background = 'green';
    red.style.background = 'none';
    yellow.style.background = 'none'
}
valera = function () {
    setTimeout(chenge_collor_red, 3000);
    setTimeout(chenge_collor_yellow, 6000)
    setTimeout(chenge_collor_green, 9000);
}
setInterval(valera, 12000);