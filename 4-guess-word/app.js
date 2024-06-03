//find element in html document
const message_header = document.querySelector('.message')
const word_input = document.querySelector('.hidden')
const guess_button = document.querySelector('.start')
const wordsArray = ["محمد", "علی", "غذا", "ماشین", "لباس", "خونه", "جاوا اسکریپت", "اکما اسکریپت", "خیابان"] //word list array
//game play false default
let playGame = false
let scramble = null
let scrambled = null
let score = 0
//add event click start buttton
guess_button.addEventListener('click', function () {
    //checked play game false 
    //if false play game= true
    if (!playGame) {
        playGame = true
        //inner text tag 
        guess_button.innerHTML = "=> guess"
        //toggle iunput
        //if click added class 
        word_input.classList.toggle('hidden')
        //call function random word
        scramble = createWord()
        scrambled = randomArray(scramble.split("")).join("")
        message_header.innerHTML = scrambled
    } else {
        let tempGuess = word_input.value
        console.log(tempGuess);
        score++
        if (tempGuess === scramble) {
            playGame = false
            message_header.innerHTML = "Correct it was " + " " + scramble + " " + "it look" + " " + score + " " + "guesses"
            guess_button.innerHTML = "start again"
            word_input.value = null
            word_input.classList.toggle("hidden")

        } else {
            message_header.innerHTML = "Wrong" + scrambled
        }
    }
})
//function random word
let createWord = () => {
    //using random method because generate random index in array
    let randomWord = Math.floor(Math.random() * wordsArray.length)
    //generate random word
    let tempWord = wordsArray[randomWord]
    //split word array using the split method
    let rand = randomArray(tempWord.split(""))
    message_header.innerHTML = rand.join("")
    return tempWord
}

let randomArray = (arr) => {
    for (let i = arr.length - 1; i >= 0; i--) {
        let temp = arr[i];
        let j = Math.floor(Math.random() * (i + 1))
        arr[i] = arr[j]
        arr[j] = temp
    }
    return arr
}