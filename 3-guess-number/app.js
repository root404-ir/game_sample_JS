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
        let numbers = document.querySelectorAll('.number_input')
        score++
        message.innerHTML = "Guesses " + score
        let winCondition = 0
        for (let x = 0; x < numbers.length; x++) {
            if (numbers[x].value == numbers[x].random) {
                numbers[x].style.backgroundColor = "green"
                numbers[x].style.color = "white"
                winCondition++
            }
            else {
                let color = (numbers[x].value < numbers[x].random) ? "blue" : "red"
                numbers[x].style.backgroundColor = color
                numbers[x].style.color = "black"
            }
            if(winCondition === numbers.length)
                {
                    console.log("gameFinished");
                }
        }
    }
})
let maker = () => {
    for (let i = 0; i < 5; i++) {
        let element = document.createElement('input')
        element.setAttribute('type', 'number')
        element.max = 9
        element.min = 1
        element.style.width = "50px"
        element.size = 1
        element.classList.add('number_input')
        element.random = Math.floor(Math.random() * 10)
        element.value = 0
        element.order = i
        gameArea.appendChild(element)
    }
}