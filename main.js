let input = document.querySelector('.input'),
    btn = document.querySelector('.btn'),
    timeOut = document.querySelector('.time'),
    block = document.querySelector('.block'),
    score = 0,
    time = 0,
    interval = 0,
    result;
    
btn.addEventListener('click', (event) => {
    event.preventDefault();
    if(input.value != '') {
        time = input.value
        input.value = '';
        clearInterval(interval)
        score = 0;
        document.querySelector('h3').classList.remove('danger')
        startGame();
        result = document.querySelector('.result');
        block.removeChild(result)
    }
})
block.addEventListener('click', (event) => {
    if(event.target.classList.contains('ball')) {
        score++
        event.target.remove();
        createBall()
    }
})



function startGame() {
    interval = setInterval(() => decreaseTime(), 1000)
    createBall()
}

function decreaseTime() {
    if(time === 0) {
        endGame()
    }else {
        let currentTime = --time;
        if(currentTime < 10) {
            currentTime = '0' + currentTime
            document.querySelector('h3').classList.add('danger')
        }
        timeOut.innerHTML = '00:' + currentTime;
    }
}

function endGame() {
    block.innerHTML = `<h1 class="result">Ваш результат: <span class="span">${score}</span></h1>`
}
    
function createBall() {
    let ball = document.createElement('div');
    let size = getRandomNumber(20,60);
    let blockSize = block.getBoundingClientRect();
    let x = getRandomNumber(0, blockSize.width - size)
    let y = getRandomNumber(0, blockSize.height - size)
    
    ball.style.width = size + 'px';
    ball.style.height = size + 'px';
    ball.classList.add('ball')
    ball.style.top = y + 'px';
    ball.style.left = x + 'px';
    ball.style.background = 'red';
    
    block.append(ball)
}

function getRandomNumber(min,max) {
    return Math.floor(Math.random() * (max + 1 - min) + min)
}