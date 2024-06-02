//find the elements
const gameArea = document.querySelector('.game')
const startBtn = document.querySelector('.start')
const message = document.querySelector('.message_header')
let gamePlay = false
let score = 0
//set click event for button
startBtn.addEventListener("click", function () {
    if (!gamePlay) {
        gamePlay = true
        //When the game is reset، the inputs are null.
        gameArea.innerHTML = null
        score = 0
        //Here dynamically argument you can set the number of Harar inputs in real time
        maker(5)
        startBtn.innerHTML = "check combo"
        message.innerHTML = "Guess the Combo"
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
            if (winCondition === numbers.length) {
                gameEnd()
            }
        }
    }
})
let gameEnd = () => {
    message.innerHTML = "You solved the combo in " + score + " guesses "
    //restart the game
    gamePlay = false
    //text button changed to reser
    startBtn.innerHTML = "reset"
}

//create input element //num_input parameter for dynamic input number
let maker = (num_input) => {
    //using for loop, because create 5 input type (number)
    for (let i = 0; i < num_input; i++) {
        let element = document.createElement('input')
        element.setAttribute('type', 'number')
        //minimum and maximum input
        element.max = 9
        element.min = 1
        //input styles
        element.style.width = "50px"
        element.size = 1
        //added the class
        element.classList.add('number_input')
        //using math method and random method for generate random number
        element.random = Math.floor(Math.random() * 10)
        element.value = 0
        element.order = i
        //append the input elemnt to div tag (game area)
        gameArea.appendChild(element)
    }
}