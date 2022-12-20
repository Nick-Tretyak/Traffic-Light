let chenge_collor_red = document.querySelector('.chenge_collor_red')
let chenge_collor_yellow = document.querySelector('.chenge_collor_yellow')
let chenge_collor_green = document.querySelector('.chenge_collor_green')

let red = document.querySelector('.svetofor_red')
let yellow = document.querySelector('.svetofor_yellow')
let green = document.querySelector('.svetofor_green')

valera = function(){

chenge_collor_red = function(){
    red.style.background = 'red';
    if (yellow.style.background = 'yellow', green.style.background = 'green'){
        yellow.style.background = 'none';
        green.style.background = 'none'
    }
}

setTimeout(chenge_collor_red, 3000);

chenge_collor_yellow = function(){
    yellow.style.background = 'yellow';

    if (red.style.background = 'red', green.style.background = 'green'){
        red.style.background = 'none';
        green.style.background = 'none'
    }
}
setTimeout(chenge_collor_yellow, 6000);



chenge_collor_green = function(){
    green.style.background = 'green';
    if (red.style.background = 'red', yellow.style.background = 'green'){
        red.style.background = 'none';
        yellow.style.background = 'none'
    }
}
setTimeout(chenge_collor_green, 9000);

}

setInterval (valera, 12000);