let playerOneScore = 0;
let playerTwoScore = 0;

const playerOneSpan = document.querySelector('#playerOne');
const playerTwoSpan = document.querySelector('#playerTwo');

playerOneSpan.innerText = playerOneScore;
playerTwoSpan.innerText = playerTwoScore;

const playerOneButton = document.querySelector('#playerOnePoint');
const playerTwoButton = document.querySelector('#playerTwoPoint');
const resetButton = document.querySelector('#reset');

const finalScore = document.querySelector('#points');

playerOneButton.addEventListener('click', function () {
    playerOneScore = playerOneScore + 1;
    playerOneSpan.innerText = playerOneScore;
    if (playerOneScore === parseInt(finalScore.value)) {
        playerOneButton.disabled = true;
        playerTwoButton.disabled = true;
        playerOneSpan.classList.add('has-text-success');
        playerTwoSpan.classList.add('has-text-danger');

    }
})

playerTwoButton.addEventListener('click', function () {
    playerTwoScore = playerTwoScore + 1;
    playerTwoSpan.innerText = playerTwoScore;
    if (playerTwoScore === parseInt(finalScore.value)) {
        playerOneButton.disabled = true;
        playerTwoButton.disabled = true;
        playerOneSpan.classList.add('has-text-danger');
        playerTwoSpan.classList.add('has-text-success');
    }
})

resetButton.addEventListener('click', function () {
    playerOneScore = 0;
    playerTwoScore = 0;
    playerOneButton.disabled = false;
    playerTwoButton.disabled = false;
    playerOneSpan.innerText = playerOneScore;
    playerTwoSpan.innerText = playerTwoScore;
    playerOneSpan.classList.remove('has-text-danger', 'has-text-success');
    playerTwoSpan.classList.remove('has-text-danger', 'has-text-success');
})



