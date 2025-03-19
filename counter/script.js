const number = document.getElementById('number');

const button1 = document.getElementById('btn1');
const button2 = document.getElementById('btn2');
const button3 = document.getElementById('btn3');
const button4 = document.getElementById('btn4');

let counter = 0;
let reset = "";

button1.addEventListener('click', () => {
    counter++;
    number.innerHTML = counter
})

button2.addEventListener('click', () => {
    if (counter == 0) {
        number.innerHTML = 'not suraction by 0 '
    } else {
        counter--;
        number.innerHTML = counter
    }
});

button3.addEventListener('click', () => {
    if (counter == 0) {
        number.innerHTML = 'not multiply by 0 '
    } else {
        counter *= 2;
        number.innerHTML = counter
    }
});

button4.addEventListener('click', () => {
    if (counter == 0) {
        number.innerHTML = 'not divide by 0'
    } else {
        counter /= 2;
        number.innerHTML = counter
    }
});

button5.addEventListener('click', () => {
    counter = 0;
    number.innerHTML = counter;
});