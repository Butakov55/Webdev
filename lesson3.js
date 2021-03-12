const button = document.querySelector('button');
const input = document.querySelector('.age');

button.onclick = () => {
    let num = +input.value;
    if (num >= 16) {
        console.log('welcome');
    }
    else {
        console.log('Ты не пройдешь');
    }
}
