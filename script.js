// console.log("Hello world");
// let myName = 'Alex';
// let myAge = 33;
// console.log('Мое имя: ' + myName);
// console.log(`Мое имя: ${myName}`);
// alert('Hello');
document.querySelector('button').onclick = myClick;

// document.querySelector('button').addEventListener('click', myClick);

function myClick() {
    let a = document.querySelector('.i-1').value;
    console.log(a);
    document.querySelector('.out').innerHTML = a;
}

// value - получить текст из Input
// innerHTML - получить или записать текста в парный тэг