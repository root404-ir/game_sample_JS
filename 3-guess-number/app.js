const gameArea = document.querySelector('.game')
const startBtn = document.querySelector('.start')
const message = document.querySelector('.message_header')
let gamePlay = false
let score = 0
startBtn.addEventListener("click", function () {
    if (!gamePlay) {
        gamePlay = true
        score = 0
        maker()
        startBtn.innerHTML = "check combo"
    } else {
        var numbers = document.querySelectorAll('.number_input')
        score++
        message.innerHTML = "Guesses " + score
        for (let x = 0; x < numbers.length; x++) {
            if (numbers[x].value == numbers[x].random) {
                console.log("match");
            }
            else {
                console.log("no match");
            }
        }
    }
})
let maker = () => {
    for (let i = 0; i < 5; i++) {
        var element = document.createElement('input')
        element.setAttribute('type', 'number')
        element.max = 9
        element.min = 1
        element.style.width = "50px"
        element.size = 1
        element.classList.add('number_input')
        element.random = Math.floor(Math.random() * 10)
        element.value = element.random
        element.order = i
    }
}