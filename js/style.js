const resultText = document.querySelector('.result_text');


const button = document.querySelectorAll('button')
button.forEach((e) => {
    console.log(e)
    e.addEventListener('mouseout', () => {
        resultText.style.color = 'black';
    });
});

function pl() {
    const plus = document.querySelector('.plus');
    plus.addEventListener('click', () => {
        resultText.innerHTML++;
        resultText.style.color = 'green';
    })
}

pl();


function min() {
    const minus = document.querySelector('.min');
    minus.addEventListener('click', () => {
        if (resultText.innerHTML === '0') {
            resultText.innerHTML = '0'
        } else {
            resultText.innerHTML--;
            resultText.style.color = 'red';
        }
    })
}

min();