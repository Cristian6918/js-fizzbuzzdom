console.log('js ok')

const divSquare = document.querySelector('#container');
for (let index = 1; index <= 100; index++) {

    const element = `<div id="square-${index}" class="square"> </div>`;
    divSquare.innerHTML += element;
}
for (index = 1; index <= 100; index++) {
    const element = document.querySelector('#square-' + index);
    if (index % 3 == 0 && index % 5 == 0) {
        console.log('FizzBuzz')
        element.style.backgroundColor = '#a0deb8';
        element.innerText = 'FizzBuzz';
    }
    else if (index % 3 == 0) {
        console.log('Fizz');
        element.style.backgroundColor = '#eccbcb';
        element.innerText = 'Fizz';
    }
    else if (index % 5 == 0) {
        console.log('Buzz');
        element.style.backgroundColor = '#b8dff0';
        element.innerText = 'Buzz';
    }
    else {
        console.log(index);
        element.innerText = index;
    }
}

